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
  {
    slug: "buttons",
    title: "Buttons Kit",
    description: "Custom buttons made with HTML and Tailwind CSS.",
    category: "Components",
    accent: "blue",
    tags: ["Buttons", "Tailwind", "UI"],
    examples: [
      {
        id: "first-button",
        title: "My First Button",
        description: "A simple button to test the component system.",
        html: `
<button
  type="button"
  class="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
>
  Get Started
</button>
        `,
      },
    ],
  },
  {
    slug: "cards",
    title: "Cards Kit",
    description: "Reusable content and product cards.",
    category: "Components",
    accent: "mint",
    tags: ["Cards", "Tailwind"],
    examples: [],
  },
  {
    slug: "forms",
    title: "Forms Kit",
    description: "Inputs, checkboxes and complete forms.",
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
    description: "Dashboard layouts and admin interfaces.",
    category: "Templates",
    accent: "blue",
    tags: ["Dashboard", "Admin"],
    examples: [],
  },
  {
    slug: "landing-page",
    title: "Landing Page Starter",
    description: "Landing pages and website sections.",
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

export function getStarterKit(slug: string): StarterKit | undefined {
  return starterKits.find((kit) => kit.slug === slug);
}
