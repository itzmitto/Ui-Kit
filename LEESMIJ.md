# Uikit Starter Kits: werkende navigatie

Dit pakket vervangt **alleen** deze twee routebestanden:

- `src/app/(library)/starter-kits/page.tsx`: klikbare kaarten, zoekfunctie, filters
- `src/app/(library)/starter-kits/[slug]/page.tsx`: preview, componentenlijst en code kopiëren

De bestaande `src/lib/starter-kits.ts` met jouw acht testkits blijft **ongewijzigd**.

Installeer vanuit de projectroot:

```bash
mkdir -p 'src/app/(library)/starter-kits/[slug]'
cp 'src/app/(library)/starter-kits/page.tsx' /tmp/uikit-starter-kits-page-backup.tsx
unzip -o ~/Downloads/uikit-kits-werkend.zip -d .
npm run dev
```

Controleer `/starter-kits`, `/starter-kits/buttons`, `/starter-kits/cards`.

Als je een bestaande detailpagina wilt bewaren, maak vooraf zelf een backup daarvan.
