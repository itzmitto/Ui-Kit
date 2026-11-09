# Uikit · Component Lab (testomgeving)

Dit pakket vervangt **alleen** de bestaande `/playground`-layout door een testomgeving. Je homepage, componentbibliotheek, starter kits en button-detailpagina blijven ongewijzigd.

## Installatie

Pak de ZIP in je bestaande Next.js-project uit:

```bash
cd /home/andre/Personal-Projects/ui-kit
unzip -o ~/Downloads/uikit-component-lab.zip -d .
npm run dev
```

Open: http://localhost:3000/playground

Voorwaarden: de `src/app/(library)/layout.tsx`-route uit het eerdere pagina-layoutpakket en `lucide-react` zijn aanwezig.

## Bestanden

- `src/app/(library)/playground/page.tsx` — Next.js-route
- `src/components/playground/component-lab.tsx` — testlayout en interactieve instellingen
- `src/components/playground/playground.module.css` — raster en preview-vlak
- `src/components/playground/sample-button.tsx` — **één** voorbeeldcomponent
- `src/components/playground/sample-button.module.css` — geïsoleerde CSS voor die button
- `src/components/playground/sample-sources.ts` — broncode voor de code-tab in de demo

## Zelf verder bouwen

1. Maak `src/components/ui/card.tsx` en eventueel `card.module.css`.
2. Open `src/components/playground/component-lab.tsx`, zoek naar `category === "buttons"` en voeg een Card-voorbeeld toe in de preview met `category === "cards"`.
3. Voeg daarna jouw eigen Card-props toe aan het instellingenpaneel en je eigen code aan de code-tab.

**Let op:** dit is een oefenomgeving, niet de definitieve openbare codebibliotheek. Bouw de echte UI-kits zelf onder `src/components/ui/`.
