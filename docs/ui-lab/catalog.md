# UI Lab Catalog

This page is PR **40/40**, the searchable catalog for the 39 standalone interactive UI Lab experiments.

**Merge this PR last**, after the individual route PRs, so every link is active.

## Included behavior

- Search by title, description, or category.
- Filter across Buttons, Forms, Cards, Navigation, Feedback, Data, and Design.
- Responsive experiment cards and direct links to each route.
- The existing homepage, starter-kit registry, and custom UI designs are unchanged.

## Review

1. Visit `/ui-lab`.
2. Search for `password`, then clear it.
3. Filter `Buttons`; expect 5 results.
4. Click a feature to open its standalone demonstration.
5. Run `node --test tests/ui-lab/catalog.test.mjs`.
