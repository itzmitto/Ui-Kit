"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Search } from "lucide-react";

type Feature = {
  category: string;
  slug: string;
  title: string;
  description: string;
};

const experiments: Feature[] = [
  {
    "category": "buttons",
    "slug": "gradient-actions",
    "title": "Gradient Actions",
    "description": "A trio of blue, emerald and coral CTA buttons with hover states."
  },
  {
    "category": "buttons",
    "slug": "morphing-arrows",
    "title": "Morphing Arrows",
    "description": "Pill actions with moving icon capsules and compact arrow transitions."
  },
  {
    "category": "buttons",
    "slug": "async-button",
    "title": "Async Button States",
    "description": "Trigger a loading, success and ready action sequence."
  },
  {
    "category": "buttons",
    "slug": "split-action",
    "title": "Split Actions",
    "description": "Primary action with a secondary drop-down menu."
  },
  {
    "category": "buttons",
    "slug": "floating-actions",
    "title": "Floating Action Dock",
    "description": "Expand and collapse a compact action dock."
  },
  {
    "category": "forms",
    "slug": "input-validation",
    "title": "Input Validation",
    "description": "Live email validation with accessible feedback."
  },
  {
    "category": "forms",
    "slug": "password-meter",
    "title": "Password Strength",
    "description": "See a live password strength indicator and guidelines."
  },
  {
    "category": "forms",
    "slug": "otp-cells",
    "title": "OTP Cells",
    "description": "Six-digit one-time-passcode input with visual cells."
  },
  {
    "category": "forms",
    "slug": "multi-step",
    "title": "Multi-step Form",
    "description": "Complete a three-step mini onboarding flow."
  },
  {
    "category": "forms",
    "slug": "plan-selector",
    "title": "Plan Selector",
    "description": "Select between options using accessible radio inputs."
  },
  {
    "category": "forms",
    "slug": "file-picker",
    "title": "File Picker",
    "description": "Select files and display the filename and size."
  },
  {
    "category": "cards",
    "slug": "product-card",
    "title": "Product Card",
    "description": "A product card with a save-for-later control."
  },
  {
    "category": "cards",
    "slug": "profile-card",
    "title": "Profile Card",
    "description": "Compact creator profile with follow/unfollow state."
  },
  {
    "category": "cards",
    "slug": "pricing-card",
    "title": "Pricing Card",
    "description": "Toggle billing frequency and see the adjusted price."
  },
  {
    "category": "cards",
    "slug": "feature-card",
    "title": "Feature Cards",
    "description": "Compare and select featured product capabilities."
  },
  {
    "category": "cards",
    "slug": "flip-card",
    "title": "Flip Card",
    "description": "Reveal additional details by flipping a card."
  },
  {
    "category": "navigation",
    "slug": "segmented-tabs",
    "title": "Segmented Tabs",
    "description": "Switch between grouped content without reloading."
  },
  {
    "category": "navigation",
    "slug": "breadcrumbs",
    "title": "Breadcrumbs",
    "description": "Jump between levels of a navigational path."
  },
  {
    "category": "navigation",
    "slug": "command-search",
    "title": "Command Search",
    "description": "Filter a command list with a live search box."
  },
  {
    "category": "navigation",
    "slug": "sidebar-menu",
    "title": "Sidebar Menu",
    "description": "Switch active workspaces from a compact navigation."
  },
  {
    "category": "navigation",
    "slug": "pagination",
    "title": "Pagination",
    "description": "Page through a local list of records."
  },
  {
    "category": "feedback",
    "slug": "toast-stack",
    "title": "Toast Stack",
    "description": "Add and dismiss accessible toast notifications."
  },
  {
    "category": "feedback",
    "slug": "confirm-dialog",
    "title": "Confirmation Dialog",
    "description": "Open, confirm, or cancel a safe sample action."
  },
  {
    "category": "feedback",
    "slug": "progress-track",
    "title": "Progress Track",
    "description": "Update a progress meter using a range control."
  },
  {
    "category": "feedback",
    "slug": "skeleton-loading",
    "title": "Skeleton Loading",
    "description": "Preview loading placeholders and real content."
  },
  {
    "category": "feedback",
    "slug": "tooltip-demo",
    "title": "Tooltip Patterns",
    "description": "Show accessible tooltips on focus and pointer hover."
  },
  {
    "category": "feedback",
    "slug": "accordion",
    "title": "Accordion",
    "description": "Expand and collapse disclosure panels."
  },
  {
    "category": "data",
    "slug": "sortable-table",
    "title": "Sortable Table",
    "description": "Sort a compact data table by name."
  },
  {
    "category": "data",
    "slug": "filterable-gallery",
    "title": "Filterable Gallery",
    "description": "Filter showcase cards by category."
  },
  {
    "category": "data",
    "slug": "timeline",
    "title": "Timeline",
    "description": "Select milestones to read their detail."
  },
  {
    "category": "data",
    "slug": "kanban-board",
    "title": "Kanban Board",
    "description": "Move sample tasks between to-do and done."
  },
  {
    "category": "data",
    "slug": "bar-analytics",
    "title": "Bar Analytics",
    "description": "Switch a simple bar chart between metrics."
  },
  {
    "category": "data",
    "slug": "activity-feed",
    "title": "Activity Feed",
    "description": "Filter activity messages and mentions."
  },
  {
    "category": "design",
    "slug": "color-tokens",
    "title": "Color Tokens",
    "description": "Inspect and copy a design system color token."
  },
  {
    "category": "design",
    "slug": "type-scale",
    "title": "Typography Scale",
    "description": "Adjust a display heading size interactively."
  },
  {
    "category": "design",
    "slug": "spacing-scale",
    "title": "Spacing Scale",
    "description": "Explore spacing scale values on layout blocks."
  },
  {
    "category": "design",
    "slug": "theme-preview",
    "title": "Theme Preview",
    "description": "Switch a sample card between light and dark themes."
  },
  {
    "category": "design",
    "slug": "responsive-preview",
    "title": "Responsive Preview",
    "description": "Preview a card at desktop, tablet and phone widths."
  },
  {
    "category": "design",
    "slug": "hero-patterns",
    "title": "Hero Patterns",
    "description": "Compare three hero compositions and calls to action."
  }
];
const categories = ["All", "Buttons", "Forms", "Cards", "Navigation", "Feedback", "Data", "Design"];

/** Explore the independently merged UI Lab routes. Merge this catalog after the examples. */
export default function UILabCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const visible = useMemo(() => experiments.filter((item) =>
    (category === "All" || item.category.toLowerCase() === category.toLowerCase()) &&
    `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(search.toLowerCase())
  ), [search, category]);

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#111936]">
      <header className="border-b border-[#e6ebf3] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 text-xl font-black tracking-[-.045em]"><span className="grid size-10 place-items-center rounded-xl bg-[#1546ff] text-white">U</span> UiKit</Link>
          <Link href="/starter-kits" className="inline-flex items-center gap-2 text-sm font-bold text-[#1546ff]">Starter Kits <ArrowRight size={17} /></Link>
        </div>
      </header>
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#dff9ea] px-4 py-2 text-xs font-bold text-[#087951]"><Layers size={16} /> Experiment catalog</span>
          <h1 className="mt-6 text-5xl font-black leading-tight tracking-[-.06em] sm:text-6xl">The UI Lab<span className="text-[#1546ff]">.</span></h1>
          <p className="mt-5 text-lg leading-8 text-[#586984]">Explore interactive buttons, forms, cards, navigation, feedback and design patterns. Each page includes live behavior and copyable HTML + Tailwind markup.</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-[#dee6f1] bg-white p-4">
          <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-[#f4f7fc] px-4 py-3"><Search size={19} className="shrink-0 text-[#7a8aa3]"/><span className="sr-only">Search examples</span><input value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Search experiments..." className="w-full bg-transparent outline-none" /></label>
          <span className="rounded-full bg-[#dff9ea] px-4 py-2 text-sm font-bold text-[#087951]">{visible.length} results</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter experiments by category">
          {categories.map((value)=><button key={value} onClick={()=>setCategory(value)} aria-pressed={category===value} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${category===value?"bg-[#1546ff] text-white":"border border-[#dce4ef] bg-white text-[#53647f] hover:border-blue-400"}`}>{value}</button>)}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item)=><Link href={`/ui-lab/${item.slug}`} key={item.slug} className="group flex min-h-56 flex-col justify-between rounded-[24px] border border-[#e2e7f0] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b5c9ff] hover:shadow-xl hover:shadow-blue-500/5"><div><span className="inline-flex rounded-full bg-[#eff4ff] px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#1546ff]">{item.category}</span><h2 className="mt-5 text-xl font-black tracking-tight">{item.title}</h2><p className="mt-3 text-sm leading-6 text-[#607089]">{item.description}</p></div><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1546ff]">Open live example <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></span></Link>)}
          {visible.length===0&&<p className="col-span-full rounded-xl border border-dashed p-8 text-center text-[#607089]">No experiments match this search.</p>}
        </div>
      </section>
    </main>
  );
}

