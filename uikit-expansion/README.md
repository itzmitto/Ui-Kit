# UiKit UI Lab: 40 substantive GitHub pull requests

This package provides **39 independently mergeable interactive Next.js pages** and **1 searchable catalog page**. Each feature PR includes a functioning React/TypeScript example, copyable HTML/Tailwind snippet, dedicated test, and review documentation. No existing starter kit data or custom UI components are overwritten.

## What is included

- 5 button examples: gradients, morphing arrows, loading states, split actions, floating dock
- 6 form examples: validation, password strength, OTP, onboarding, plan selection, upload picker
- 5 cards: product, profile, pricing, feature, flip
- 5 navigation patterns: tabs, breadcrumbs, command search, sidebar, pagination
- 6 feedback patterns: toasts, dialog, progress, skeleton, tooltip, accordion
- 6 data views: table, filterable gallery, timeline, kanban, chart, activity
- 6 design tools: color tokens, typography, spacing, themes, responsive preview, hero patterns
- 1 UI Lab catalog (`/ui-lab`) with search and category filters, **merge as the final PR**

## Requirements

- Existing Next.js app using `src/app` and Tailwind v4.
- `lucide-react` installed (`npm install lucide-react` if needed).
- Git remote `origin` pointing at your GitHub repo and existing `main` branch.
- GitHub CLI (`gh`) installed and authenticated, `git config user.name` and `git config user.email` set. If Git pushes require credentials, run `gh auth setup-git` once.
- No clean-working-tree requirement: the script uses a separate temporary Git worktree, so uncommitted files in VS Code are not touched.
- Node.js 24 recommended; Node.js 22.16+ should also run the included smoke tests.

## Install and run

From your `ui-kit` project root:

```bash
unzip -o ~/Downloads/uikit-ui-lab-40-prs.zip -d .
bash uikit-expansion/scripts/open-40-prs.sh --check
bash uikit-expansion/scripts/open-40-prs.sh --run
```

The check is read-only. **`--run` really creates and pushes 40 feature branches and opens 40 PRs**, subject to GitHub authentication, permissions, rate limits and network access. It never auto-merges. If something fails midway, rerun `--run` and already existing PRs are skipped. Use `--run --limit 3` to publish just the first three first.

The PR script uses explicit title/body flags and exports `GH_PAGER=cat`, `GIT_PAGER=cat`, `PAGER=cat` and `GH_PROMPT_DISABLED=1`. It never invokes an editor or a pager that requires pressing `q`. If GitHub login is not configured, it **stops clearly** instead of trying to prompt forty times. Sign in once with `gh auth login`, then rerun.

The script works in a temporary Git worktree based on `origin/main`, even if you have local uncommitted changes. Those changes are **not included** in PRs until committed/pushed separately. The script never force-pushes, resets or stashes your project, makes empty commits, merges, or edits `src/lib/starter-kits.ts`.

## Review + merge

Each PR is based on `main` and changes only its own UI route, docs and test files. This means the demo PRs can be reviewed/merged independently without one giant stacked PR. **Merge catalog PR 40 last** so its 39 links exist when it lands.

After the features and catalog are merged:

```bash
git switch main
git pull --ff-only origin main
npm run dev
```

Open `http://localhost:3000/ui-lab`. This is a **new** collection separate from `/starter-kits`; your own kit markup remains untouched.

## Checks

In a branch after one feature is copied:

```bash
node --test tests/ui-lab/gradient-actions.test.mjs
npm run lint
```

The smoke tests validate that the page exports a route, supplies real copyable HTML/Tailwind markup, and exposes an interactive preview. They do **not** replace visual browser testing, end-to-end tests or accessibility audits.

## About component code

The code panel contains an **HTML + Tailwind** fragment, intentionally copyable as one snippet. The interactive demonstration itself runs in React in Next.js. Snippets needing business behavior (e.g., async save or form submission) require attaching handlers in your own application. This package does not create a fake backend or claim to supply real payment/auth functionality.

## If a PR fails

- `gh: command not found`: install GitHub CLI (https://cli.github.com/).
- `gh auth status` fails: run `gh auth login` once.
- Your uncommitted changes: they stay untouched in your normal VS Code working tree. Features are branched from remote `origin/main`.
- Existing local branch conflict: the script skips it rather than overwriting it.
- GitHub API/rate limit error: rerun later. Existing PRs are safely skipped.
- If you accidentally want to stop: Ctrl+C. Existing branches and PRs are preserved.

The log of URLs is written to `uikit-expansion/pr-links.txt` (untracked by this package; does not become part of a feature PR).
