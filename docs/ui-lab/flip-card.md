# Flip Card

- **Category:** Cards
- **Route:** `/ui-lab/flip-card`
- **PR scope:** Reveal additional details by flipping a card.

## Included

This change contributes one working, independently mergeable interactive UI Lab route. The preview is written in React and TypeScript; the code panel displays a plain HTML snippet with Tailwind CSS classes. The demo and its documentation do not change existing starter kit examples.

## Manual acceptance checks

1. Open `/ui-lab/flip-card` on desktop and mobile.
2. Use the interactive controls in the preview and check the visible result.
3. Click **Copy HTML + Tailwind** and paste the copied markup into a Tailwind-enabled project.
4. Navigate back to `/ui-lab` once the catalog PR has been merged.
5. Run `node --test tests/ui-lab/flip-card.test.mjs` and `npm run lint`.

## Scope and accessibility

- Keyboard focus styles and semantic controls are preferred where appropriate.
- This is a UI sample, not a server-side API or an authentication/payment service.
- Copied markup does not include the React state handlers used by the demo; wire those separately for production.
- No new dependency is required beyond the project's existing Next.js, Tailwind CSS and `lucide-react` installation.
