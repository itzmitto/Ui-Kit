# Uikit homepage: layout-only refactor

Dit pakket vervangt alleen `src/app/page.tsx` en voegt `src/components/home/` toe.
Andere pagina's en `src/app/globals.css` blijven ongemoeid.

## Installeren

1. Open je bestaande Next.js-projectmap, bijvoorbeeld `/home/andre/Personal-Projects/ui-kit`.
2. Maak voor de zekerheid een backup of commit van je wijzigingen.
3. Pak het ZIP-bestand uit in de root van je project (waar `package.json` staat).
4. Zorg dat `lucide-react` geïnstalleerd is: `npm install lucide-react`.
5. Start de ontwikkelserver: `npm run dev`.

## Pagina's waarnaar de homepage verwijst

- `/components`
- `/components/buttons`
- `/starter-kits`
- `/playground`

Dit pakket maakt deze andere pagina's niet aan. Hun bestaande bestanden blijven dus intact.

## Wat staat erin?

- `src/app/page.tsx`: overzichtelijk overzicht van de homepage
- `src/components/home/site-header.tsx`: logo en responsive navigatie
- `src/components/home/hero.tsx`: hero met decoratieve editor-/previewlayout
- `src/components/home/features.tsx`: vier introductiekaarten
- `src/components/home/categories.tsx`: categoriekaarten met layoutvoorbeelden
- `src/components/home/starter-kits.tsx`: startpakket-overzicht met mockup-layouts
- `src/components/home/playground-promo.tsx`: promotie voor de playground
- `src/components/home/site-footer.tsx`: footer
- `src/components/home/navigation.ts`: gedeelde navigatielinks

**Scope:** Er zijn geen werkende Buttons, Cards, Forms of andere UI-kits geïmplementeerd. De previews zijn alleen decoratieve layouts. Die componenten bouw je later zelf.
