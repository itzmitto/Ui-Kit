/*
 * UI-KIT COMPONENT LIBRARY
 *
 * In dit bestand bewaar je al je eigen UI Starter Kits.
 *
 * Elke kit heeft:
 * - Een unieke slug (URL)
 * - Een titel
 * - Een beschrijving
 * - Een categorie en accentkleur
 * - Een lijst met zelfgemaakte componenten
 *
 * Je schrijft gewone HTML met Tailwind CSS classes.
 * Je hoeft hier dus GEEN React-componenten te maken.
 */

// STAP 1: De structuur van één component.
export type KitExample = {
  id: string;
  title: string;
  description: string;
  html: string;
};

// STAP 2: De structuur van een complete Starter Kit.
export type StarterKit = {
  slug: string;
  title: string;
  description: string;
  category: "Components" | "Templates";
  accent: "blue" | "mint" | "peach" | "yellow";
  tags: string[];
  examples: KitExample[];
};

// STAP 3: Hier staan alle Starter Kits.
export const starterKits: StarterKit[] = [
  // ============================================
  // KIT 1: BUTTONS (VOORBEELD)
  // ============================================

  {
    // De URL wordt /starter-kits/buttons
    slug: "buttons",

    // De naam die bezoekers zien.
    title: "Buttons Kit",

    // Korte uitleg over deze kit.
    description: "Beautiful buttons made with HTML and Tailwind CSS.",

    category: "Components",
    accent: "blue",
    tags: ["Buttons", "Tailwind", "UI"],

    // Hier komen alle buttons van deze kit.
    examples: [
      {
        // Iedere button moet een unieke ID hebben.
        id: "blue-button",

        // Naam van de button.
        title: "Blue Button",

        // Beschrijving van de button.
        description: "A blue button with hover and click animations.",

        /*
         * HIER SCHRIJF JE JOUW EIGEN HTML.
         *
         * Tailwind CSS staat direct in class="...".
         *
         * Bijvoorbeeld:
         * bg-blue-600       = blauwe achtergrond
         * px-6 py-3        = ruimte binnen de button
         * rounded-xl       = afgeronde hoeken
         * hover:bg-blue-700 = donkerblauw bij hover
         * hover:scale-105   = iets groter bij hover
         * active:scale-95   = kleiner bij klikken
         */

        html: `
<button
  type="button"
  class="inline-flex items-center justify-center
         rounded-xl bg-blue-600 px-6 py-3
         font-semibold text-white
         shadow-lg shadow-blue-600/20
         transition-all duration-200
         hover:scale-105 hover:bg-blue-700
         active:scale-95
         focus-visible:outline-2
         focus-visible:outline-offset-2
         focus-visible:outline-blue-600"
>
  Get Started
</button>
        `,
      },

      /*
       * ZELF EEN TWEEDE BUTTON MAKEN?
       *
       * 1. Kopieer het hele object hierboven.
       * 2. Plak het hieronder, binnen examples: [].
       * 3. Geef de nieuwe button een andere id.
       * 4. Verander title en description.
       * 5. Schrijf je eigen HTML in html: `...`.
       *
       * Vergeet de komma tussen de objecten niet!
       */
    ],
  },

  // ============================================
  // KIT 2: CARDS (DEZE MAAK JIJ ZELF)
  // ============================================

  {
    // Gebruik een unieke slug.
    // Deze bepaalt de URL van je kit.
    slug: "cards",

    title: "Cards Kit",

    description: "Custom cards made with HTML and Tailwind CSS.",

    category: "Components",

    accent: "mint",

    tags: ["Cards", "Tailwind"],

    /*
     * HIER GA JIJ JE EERSTE CARD MAKEN.
     *
     * Hoe doe je dat?
     *
     * 1. Maak van [] een array met een object: [{ ... }]
     * 2. Voeg een unieke id toe.
     * 3. Voeg een title toe.
     * 4. Voeg een description toe.
     * 5. Voeg html: `...` toe.
     * 6. Schrijf daarin jouw eigen HTML met Tailwind.
     *
     * Kijk naar de Buttons Kit hierboven
     * om te zien hoe een volledig voorbeeld werkt.
     *
     * Begin bijvoorbeeld met:
     * - Een div als buitenste container
     * - Een h3 voor de titel
     * - Een p voor de beschrijving
     *
     * Handige Tailwind classes:
     * rounded-2xl = afgeronde hoeken
     * bg-white     = witte achtergrond
     * border       = rand
     * p-6          = binnenruimte
     * shadow-lg    = schaduw
     */

    examples: [],
  },

  // ============================================
  // OVERIGE KITS (NOG LEEG)
  // ============================================

  {
    slug: "forms",
    title: "Forms Kit",
    description: "Inputs, checkboxes and forms.",
    category: "Components",
    accent: "peach",
    tags: ["Forms", "Inputs"],
    examples: [],
  },

  {
    slug: "navigation",
    title: "Navigation Kit",
    description: "Navbars, menus and tabs.",
    category: "Components",
    accent: "yellow",
    tags: ["Navigation", "Menus"],
    examples: [],
  },

  {
    slug: "dashboard",
    title: "Dashboard Starter",
    description: "Dashboard layouts and interfaces.",
    category: "Templates",
    accent: "blue",
    tags: ["Dashboard", "Admin"],
    examples: [],
  },

  {
    slug: "landing-page",
    title: "Landing Page Starter",
    description: "Website layouts and sections.",
    category: "Templates",
    accent: "mint",
    tags: ["Landing", "Website"],
    examples: [],
  },

  {
    slug: "authentication",
    title: "Authentication Kit",
    description: "Login and registration interfaces.",
    category: "Components",
    accent: "peach",
    tags: ["Login", "Authentication"],
    examples: [],
  },

  {
    slug: "pricing",
    title: "Pricing Kit",
    description: "Pricing tables and subscription cards.",
    category: "Components",
    accent: "yellow",
    tags: ["Pricing", "SaaS"],
    examples: [],
  },
];

// STAP 4: Zoek een Starter Kit op basis van de slug.
// De detailpagina gebruikt deze functie automatisch.
// Deze functie hoef je normaal niet aan te passen.
export function getStarterKit(slug: string): StarterKit | undefined {
  return starterKits.find((kit) => kit.slug === slug);
}
