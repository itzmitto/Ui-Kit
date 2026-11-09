CUTKIT | ALLEEN LAYOUTS
=======================

Dit pakket voegt vier nieuwe routes toe aan je bestaande Next.js 16-project:
  /components
  /components/buttons
  /starter-kits
  /playground

Je bestaande src/app/page.tsx en globals.css blijven ONGEWIJZIGD.
Er zijn GEEN Buttons, Cards, Forms of Starter Kits gebouwd.
De lege previewplekken zijn bedoeld voor jouw EIGEN implementaties.

INSTALLEREN
===========

1. Pak de ZIP uit in de hoofdmap van je bestaande project:
   /home/andre/Personal-Projects/ui-kit

2. Controleer of lucide-react beschikbaar is:
   npm install lucide-react

3. Start je site met:
   npm run dev

4. Test:
   http://localhost:3000/components
   http://localhost:3000/components/buttons
   http://localhost:3000/starter-kits
   http://localhost:3000/playground

HOMEPAGE NAVIGATIE BIJWERKEN
============================

Je oude homepage heeft zijn eigen Header in src/app/page.tsx.
Pas daar uitsluitend de 'navigation'-array aan:

const navigation = [
  { label: "Components", href: "/components" },
  { label: "Starter Kits", href: "/starter-kits" },
  { label: "Patterns", href: "/playground" },
  { label: "Docs", href: "/#how-it-works" },
];

Optioneel: vervang href="#components" van de hoofd-CTA door href="/components".

WAAROM (library)?
=================

De map src/app/(library)/ bevat een gedeelde header en footer.
Het woord (library) komt NIET in de URL. Dit is een Next.js route group.

VERVOLG
=======

Later bouw je jouw eigen Button onder src/components/ui/Button.tsx
(en daarna Cards, Forms, enzovoorts).
Vervang per pagina de <PreviewSlot /> door jouw echte component.
De filters, kopieerfunctie en configuratiepanelen zijn bewust nog niet actief.
