## What changes

Adds the searchable `/ui-lab` catalog for the 39 independently mergeable UI Lab routes.

- Category chips and text search
- Responsive cards and clear navigation
- Dedicated unit tests and usage documentation
- No changes to existing user-authored starter kits

**Merge order:** merge this PR **after** PRs 01–39 to avoid links pointing to routes that are not merged yet.

## Checks

- [ ] Open `/ui-lab`
- [ ] Search and filter the list
- [ ] Follow several example links
- [ ] Run `node --test tests/ui-lab/catalog.test.mjs`
