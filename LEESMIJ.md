# Morphing Arrow Button collectie

Zes codevoorbeelden gebaseerd op de afbeelding: Next, Continue en Explore More, telkens Default en Hover.

## Installeren

Plaats `src/lib/kits/morphing-arrow-buttons.ts` in je Next.js-project.

Voeg **bovenaan** `src/lib/starter-kits.ts` toe:

```ts
import { morphingArrowButtons } from "./kits/morphing-arrow-buttons";
```

Zoek alleen `slug: "buttons"` en de `examples: [...]` van die kit.
Voeg **onder je bestaande button-objecten** de volgende regel toe, vóór de sluitende `]`:

```ts
...morphingArrowButtons,
```

Voorbeeld:

```ts
examples: [
  { id: "basic-button", title: "Basic Button", description: "...", html: `...` },
  ...morphingArrowButtons,
],
```

Gebruik geen `...morphingArrowButtons` in andere kits, tenzij je ze daar ook wilt tonen.

## Testen

`npm run dev` -> `http://localhost:3000/starter-kits/buttons`

## Eigenschappen

- Eén klikbaar HTML/Tailwind-codeblok per variant, zonder React-dependencies.
- De default-varianten animeren bij hover (en geven ook keyboard-focus feedback).
- De hover-varianten tonen de eindtoestand al als statisch voorbeeld.
- De SVG-pijl zit inline in de HTML, dus er zijn geen externe icon packs nodig.
- De screenshot is visuele inspiratie; exacte pixels/glow verschillen per browser.

Icon-inspiratie: https://lucide.dev/icons/arrow-right en https://lucide.dev/license.
Bij hergebruik van de Lucide SVG-assets gelden de betreffende licentievoorwaarden.
