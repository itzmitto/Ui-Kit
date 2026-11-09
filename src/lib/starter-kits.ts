/**
 * UI-KIT: HTML + TAILWIND STARTER KITS
 *
 * Elke kit heeft precies één testvoorbeeld.
 * Jij kunt later zelf extra voorbeelden ontwerpen en toevoegen.
 * De HTML en Tailwind CSS staan samen in het veld `html`.
 *
 * EEN TWEEDE COMPONENT TOEVOEGEN:
 * 1. Zoek de juiste kit via `slug`, bijvoorbeeld `buttons`.
 * 2. Kopieer het object binnen `examples: [ ... ]`.
 * 3. Plak de kopie eronder, met een komma ertussen.
 * 4. Geef de kopie een unieke `id`, pas de titel aan en wijzig de HTML.
 *
 * LET OP: schrijf hier HTML met `class`, niet JSX met `className`.
 */

export type KitExample = {
  id: string;
  title: string;
  description: string;
  html: string;
};

export type StarterKit = {
  slug: string;
  title: string;
  description: string;
  category: "Components" | "Templates";
  accent: "blue" | "mint" | "peach" | "yellow";
  tags: string[];
  examples: KitExample[];
};

export const starterKits: StarterKit[] = [
  // KIT 1: BUTTONS
  {
    slug: "buttons",
    title: "Buttons Kit",
    description: "Buttons with different colors, states and animations.",
    category: "Components",
    accent: "blue",
    tags: ["Buttons", "Tailwind", "UI"],
    examples: [
      {
        id: "basic-blue-button",
        title: "Basic Blue Button",
        description: "A simple button with a hover effect.",
        html: `
<button
  type="button"
  class="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
>
  Get Started
</button>`,
      },
      // TODO: Maak hier jouw tweede button. Kopieer het object hierboven.

{
  // Unieke naam voor je button.
  id: "my-custom-button",

  // Naam op de website.
  title: "My Custom Button",

  // Korte beschrijving.
  description: "My first custom Tailwind button.",

  // Hier schrijf je zelf HTML en Tailwind CSS.
  html: `
    <button
      type="button"
      class="rounded-2xl bg-emerald-500 px-8 py-4
             font-bold text-white shadow-lg
             transition-all duration-300
             hover:-translate-y-1 hover:bg-emerald-600
             active:scale-95"
    >
      My Button
    </button>
  `,
},

    ],
  },

  // KIT 2: CARDS
  {
    slug: "cards",
    title: "Cards Kit",
    description: "Reusable content, profile and product cards.",
    category: "Components",
    accent: "mint",
    tags: ["Cards", "Tailwind"],
    examples: [
      {
        id: "simple-info-card",
        title: "Simple Info Card",
        description: "A card with a heading, text and a link.",
        html: `
<article class="max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-700">✦</div>
  <h3 class="text-xl font-bold text-slate-900">Your next project</h3>
  <p class="mt-2 text-sm leading-6 text-slate-600">Build something useful with a simple and reusable card.</p>
  <a href="#more" class="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline">Learn more &rarr;</a>
</article>`,
      },
      // TODO: Maak zelf een tweede card, bijvoorbeeld een productkaart.
    ],
  },

  // KIT 3: FORMS
  {
    slug: "forms",
    title: "Forms Kit",
    description: "Form fields, checkboxes and input layouts.",
    category: "Components",
    accent: "peach",
    tags: ["Forms", "Inputs"],
    examples: [
      {
        id: "simple-contact-form",
        title: "Simple Contact Form",
        description: "A form layout with name, email and message fields.",
        html: `
<form class="w-full max-w-md space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onsubmit="event.preventDefault()">
  <h3 class="text-xl font-bold text-slate-900">Contact us</h3>
  <div>
    <label for="contact-name" class="mb-1 block text-sm font-medium text-slate-700">Name</label>
    <input id="contact-name" name="name" type="text" placeholder="Your name" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
  </div>
  <div>
    <label for="contact-email" class="mb-1 block text-sm font-medium text-slate-700">Email</label>
    <input id="contact-email" name="email" type="email" placeholder="you@example.com" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
  </div>
  <button type="submit" class="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700">Send message</button>
</form>`,
      },
      // TODO: Maak zelf een formulier met checkbox, select of radio.
    ],
  },

  // KIT 4: NAVIGATION
  {
    slug: "navigation",
    title: "Navigation Kit",
    description: "Navigation bars, menus and tabs.",
    category: "Components",
    accent: "yellow",
    tags: ["Navigation", "Menus"],
    examples: [
      {
        id: "simple-navbar",
        title: "Simple Navbar",
        description: "A compact horizontal navigation bar.",
        html: `
<nav aria-label="Main navigation" class="flex w-full max-w-2xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
  <a href="#home" class="text-lg font-extrabold tracking-tight text-slate-900">Brand.</a>
  <div class="flex items-center gap-4 text-sm font-medium text-slate-600">
    <a href="#home" class="hover:text-blue-600">Home</a>
    <a href="#features" class="hover:text-blue-600">Features</a>
    <a href="#contact" class="hover:text-blue-600">Contact</a>
  </div>
</nav>`,
      },
      // TODO: Maak zelf een navigatie met dropdown of mobiele menuvariant.
    ],
  },

  // KIT 5: DASHBOARD
  {
    slug: "dashboard",
    title: "Dashboard Starter",
    description: "Dashboard layouts and small admin interfaces.",
    category: "Templates",
    accent: "blue",
    tags: ["Dashboard", "Admin"],
    examples: [
      {
        id: "dashboard-stats",
        title: "Dashboard Stats",
        description: "A responsive dashboard heading with two stat cards.",
        html: `
<section class="w-full max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
  <div class="mb-5 flex flex-wrap items-center justify-between gap-2">
    <div>
      <p class="text-xs font-bold uppercase tracking-wider text-blue-600">Overview</p>
      <h2 class="mt-1 text-2xl font-extrabold text-slate-900">Dashboard</h2>
    </div>
    <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">All systems active</span>
  </div>
  <div class="grid gap-3 sm:grid-cols-2">
    <article class="rounded-xl border border-slate-200 bg-white p-5">
      <p class="text-sm text-slate-500">Total users</p>
      <p class="mt-2 text-3xl font-bold text-slate-900">1,284</p>
    </article>
    <article class="rounded-xl border border-slate-200 bg-white p-5">
      <p class="text-sm text-slate-500">Active projects</p>
      <p class="mt-2 text-3xl font-bold text-slate-900">48</p>
    </article>
  </div>
</section>`,
      },
      // TODO: Maak zelf een dashboard met tabel, sidebar of grafiek.
    ],
  },

  // KIT 6: LANDING PAGE
  {
    slug: "landing-page",
    title: "Landing Page Starter",
    description: "Landing page sections and website layouts.",
    category: "Templates",
    accent: "mint",
    tags: ["Landing", "Website"],
    examples: [
      {
        id: "simple-hero",
        title: "Simple Hero Section",
        description: "A headline, short description and call-to-action.",
        html: `
<section class="w-full max-w-3xl rounded-3xl bg-blue-50 px-6 py-12 text-center sm:px-12">
  <span class="inline-block rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-700">Your next idea starts here</span>
  <h1 class="mx-auto mt-5 max-w-xl text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">Build something amazing.</h1>
  <p class="mx-auto mt-4 max-w-md text-slate-600">A clean starting point for your next website or product.</p>
  <a href="#start" class="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">Get started</a>
</section>`,
      },
      // TODO: Maak zelf een hero met afbeelding, features of testimonials.
    ],
  },

  // KIT 7: AUTHENTICATION
  {
    slug: "authentication",
    title: "Authentication Kit",
    description: "Login and registration screen layouts.",
    category: "Components",
    accent: "peach",
    tags: ["Login", "Authentication"],
    examples: [
      {
        id: "simple-login",
        title: "Simple Login Card",
        description: "A basic login form layout (no real authentication).",
        html: `
<form class="w-full max-w-sm space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onsubmit="event.preventDefault()">
  <h2 class="text-2xl font-bold text-slate-900">Welcome back</h2>
  <p class="text-sm text-slate-500">Log in to your account.</p>
  <div>
    <label for="login-email" class="mb-1 block text-sm font-medium text-slate-700">Email</label>
    <input id="login-email" type="email" autocomplete="email" placeholder="you@example.com" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" />
  </div>
  <div>
    <label for="login-password" class="mb-1 block text-sm font-medium text-slate-700">Password</label>
    <input id="login-password" type="password" autocomplete="current-password" placeholder="Your password" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" />
  </div>
  <button type="submit" class="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">Log in</button>
</form>`,
      },
      // TODO: Maak zelf een register-, password-reset- of 2FA-layout.
    ],
  },

  // KIT 8: PRICING
  {
    slug: "pricing",
    title: "Pricing Kit",
    description: "Subscription cards and pricing layouts.",
    category: "Components",
    accent: "yellow",
    tags: ["Pricing", "SaaS"],
    examples: [
      {
        id: "simple-pricing-card",
        title: "Simple Pricing Card",
        description: "A pricing card with features and a call-to-action.",
        html: `
<article class="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <p class="text-sm font-bold text-blue-600">Starter Plan</p>
  <div class="mt-3 flex items-baseline gap-1">
    <strong class="text-4xl font-black text-slate-900">€9</strong>
    <span class="text-sm text-slate-500">/ month</span>
  </div>
  <p class="mt-3 text-sm text-slate-600">Everything you need for a small project.</p>
  <ul class="mt-5 space-y-2 text-sm text-slate-700">
    <li>✓ Reusable components</li>
    <li>✓ Responsive layouts</li>
    <li>✓ Easy to customize</li>
  </ul>
  <a href="#choose-plan" class="mt-6 block rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700">Choose plan</a>
</article>`,
      },
      // TODO: Maak zelf een prijsvergelijking met 2 of 3 abonnementen.
    ],
  },
];

// De detailpagina zoekt met deze functie de kit op basis van de URL.
// Hier hoef je niets aan te veranderen wanneer je nieuwe voorbeelden toevoegt.
export function getStarterKit(slug: string): StarterKit | undefined {
  return starterKits.find((kit) => kit.slug === slug);
}
