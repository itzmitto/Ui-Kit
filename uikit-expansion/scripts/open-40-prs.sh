#!/usr/bin/env bash
set -Eeuo pipefail

# UiKit UI Lab: 40 independent, reviewable GitHub feature PRs.
# --check is read-only. --run explicitly enables GitHub writes.
# All work happens in a temporary Git worktree. Your VS Code project,
# its currently checked-out branch and any uncommitted work are untouched.
export GH_PAGER=cat PAGER=cat GIT_PAGER=cat
export GIT_TERMINAL_PROMPT=0 GH_PROMPT_DISABLED=1
export CI=1

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
pack_dir="$(cd -- "$script_dir/.." && pwd)"
manifest="$pack_dir/manifest.tsv"
mode=check
limit=40

usage() {
  cat <<'USAGE'
Usage:
  bash uikit-expansion/scripts/open-40-prs.sh --check       # read-only verification
  bash uikit-expansion/scripts/open-40-prs.sh --run         # push 40 branches + open PRs
  bash uikit-expansion/scripts/open-40-prs.sh --run --limit 3

Requirements: existing GitHub origin/main and GitHub CLI logged in.
No editors, pagers or per-PR questions. Script can be restarted to resume.
The 40 feature branches are independent and target main, not each other.
USAGE
}

while (( $# > 0 )); do
  case "$1" in
    --check|--dry-run) mode=check;;
    --run) mode=run;;
    --limit)
      shift
      [[ $# -gt 0 && "$1" =~ ^[0-9]+$ ]] || { echo "--limit requires an integer" >&2; exit 2; }
      limit="$1";;
    -h|--help) usage; exit 0;;
    *) echo "Unknown argument: $1" >&2; usage >&2; exit 2;;
  esac
  shift
done
[[ -s "$manifest" ]] || { echo "Missing package manifest.tsv" >&2; exit 1; }
(( limit>=1 && limit<=40 )) || { echo "--limit must be 1 to 40" >&2; exit 2; }

if [[ "$mode" == check ]]; then
  echo "CHECK ONLY: No GitHub branches, commits or PRs will be created."
  n=0
  while IFS=$'\t' read -r id slug category title; do
    (( n+=1 ))
    (( n>limit )) && break
    dir="$pack_dir/features/$id-$slug"
    [[ -d "$dir/files" && -f "$dir/pr-body.md" ]] || { echo "Incomplete bundle: $dir" >&2; exit 1; }
    count="$(find "$dir/files" -type f | wc -l | tr -d ' ')"
    printf '%02d/40  %-28s  %s (%s files)\n' "$n" "$slug" "$title" "$count"
  done < "$manifest"
  echo
  echo "Package check passed. To publish, use --run."
  exit 0
fi

for tool in git gh node; do
  command -v "$tool" >/dev/null 2>&1 || { echo "Missing program: $tool" >&2; exit 1; }
done
repo="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "Run from a Git repository." >&2; exit 1; }
[[ -f "$repo/package.json" && -d "$repo/src/app" ]] || { echo "Expected a Next.js project with src/app at $repo" >&2; exit 1; }
origin_url="$(git -C "$repo" remote get-url origin 2>/dev/null)" || { echo "Missing Git remote origin" >&2; exit 1; }
[[ "$origin_url" == *github.com* ]] || { echo "Origin is not a GitHub remote: $origin_url" >&2; exit 1; }

git -C "$repo" config user.name >/dev/null && git -C "$repo" config user.email >/dev/null || { echo "Set git config user.name and user.email first." >&2; exit 1; }
if ! gh auth status --hostname github.com >/dev/null 2>&1; then
  echo "Not logged in to GitHub CLI. Run 'gh auth login' once, then rerun --run." >&2
  exit 1
fi

git -C "$repo" fetch --quiet origin main
repo_name="$(cd "$repo" && gh repo view --json nameWithOwner --jq .nameWithOwner)"
[[ -n "$repo_name" ]] || { echo "Could not resolve GitHub repository" >&2; exit 1; }

# The temporary worktree uses origin/main as its source of truth.
# It never checks out another branch in the user's active workspace.
workparent="$(mktemp -d "${TMPDIR:-/tmp}/uikit-pr-worktree.XXXXXXXX")"
workdir="$workparent/repo"
git -C "$repo" worktree add --quiet --detach "$workdir" origin/main

cleanup() {
  local rc=$?
  trap - EXIT
  if [[ -d "$workdir" ]]; then
    if git -C "$workdir" diff --quiet && git -C "$workdir" diff --cached --quiet; then
      if git -C "$repo" worktree remove "$workdir"; then
        rmdir "$workparent" 2>/dev/null || true
      else
        echo "Temporary worktree cleanup needs attention: $workdir" >&2
      fi
    else
      echo "A failed feature left uncommitted changes in temporary worktree $workdir." >&2
      echo "Your original workspace remains untouched." >&2
    fi
  fi
  if (( rc != 0 )); then
    echo "Stopped after a failed operation. Re-run --run to resume; existing PRs are skipped." >&2
  fi
  exit "$rc"
}
trap cleanup EXIT

log="$pack_dir/pr-links.txt"
touch "$log"
count=0
created=0
skipped=0
printf 'Publishing to %s (base: main)\n' "$repo_name"
echo "Your existing local workspace is not modified."

while IFS=$'\t' read -r id slug category title; do
  (( count+=1 ))
  (( count>limit )) && break
  branch="feat/ui-lab-$id-$slug"
  bundle="$pack_dir/features/$id-$slug"
  [[ -d "$bundle/files" && -f "$bundle/pr-body.md" ]] || { echo "Missing feature bundle: $bundle" >&2; exit 1; }

  printf '\n[%02d/40] %s\n' "$count" "$title"
  existing="$(cd "$repo" && gh pr list --repo "$repo_name" --head "$branch" --state all --limit 100 --json url --jq '.[0].url // empty')"
  if [[ -n "$existing" ]]; then
    echo "PR already exists: $existing"
    grep -Fxq "$existing" "$log" || printf '%s\n' "$existing" >> "$log"
    (( skipped+=1 ))
    continue
  fi

  if git -C "$repo" ls-remote --exit-code --heads origin "$branch" >/dev/null 2>&1; then
    echo "Remote feature branch exists; only PR creation is needed."
  else
    if git -C "$repo" show-ref --quiet "refs/heads/$branch"; then
      echo "Local branch $branch already exists but is not pushed; skipping to preserve it." >&2
      (( skipped+=1 ))
      continue
    fi
    git -C "$workdir" switch --quiet --no-track --create "$branch" origin/main
    cp -a "$bundle/files/." "$workdir/"
    git -C "$workdir" add -- src/app/ui-lab docs/ui-lab tests/ui-lab
    if git -C "$workdir" diff --cached --quiet; then
      echo "No substantive changes in $branch; refusing empty commit." >&2
      exit 1
    fi

    if [[ "$id" == '40' ]]; then
      (cd "$workdir" && node --test tests/ui-lab/catalog.test.mjs)
    else
      (cd "$workdir" && node --test "tests/ui-lab/$slug.test.mjs")
    fi

    git -C "$workdir" commit --quiet -m "feat(ui-lab): add $title interactive example"
    git -C "$workdir" push --quiet --set-upstream origin "$branch"
    echo "Pushed $branch"
  fi

  pr_url="$(cd "$repo" && gh pr create --repo "$repo_name" --base main --head "$branch" --title "feat(ui-lab): $title" --body-file "$bundle/pr-body.md")"
  echo "$pr_url"
  grep -Fxq "$pr_url" "$log" || printf '%s\n' "$pr_url" >> "$log"
  (( created+=1 ))
  sleep "${UIKIT_PR_DELAY_SECONDS:-2}"
done < "$manifest"

printf '\nCreated: %d | Existing/skipped: %d | Processed: %d\n' "$created" "$skipped" "$((count>limit?limit:count))"
printf 'PR URLs saved to %s\n' "$log"
echo 'No PRs were automatically merged.'
