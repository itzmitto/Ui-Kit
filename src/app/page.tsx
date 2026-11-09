"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Copy,
  FormInput,
  Layers3,
  LayoutGrid,
  Mail,
  Menu,
  MousePointerClick,
  PanelTop,
  PlayCircle,
  ShieldCheck,
  SlidersHorizontal,
  Table2,
  X,
} from "lucide-react";

const demoCode = `export function Button() {
  return (
    <button
      className="rounded-xl bg-blue-600 px-5 py-3 text-white"
    >
      Get started
    </button>
  );
}`;

const features = [
  {
    title: "Copy & Paste Ready",
    description: "Copy reusable components directly into your project.",
    icon: Copy,
    background: "bg-[#eef4ff]",
    color: "text-[#1546ff]",
  },
  {
    title: "Starter Packs",
    description: "Complete UI foundations for your next big idea.",
    icon: Layers3,
    background: "bg-[#eafaf1]",
    color: "text-[#08a76d]",
  },
  {
    title: "Fully Customizable",
    description: "Adjust styles, spacing, colors and component variants.",
    icon: SlidersHorizontal,
    background: "bg-[#fff4e7]",
    color: "text-[#f28a16]",
  },
  {
    title: "Developer Friendly",
    description: "Built with modern React, TypeScript and Tailwind CSS.",
    icon: Code2,
    background: "bg-[#eef4ff]",
    color: "text-[#1546ff]",
  },
];

const categories = [
  {
    title: "Buttons",
    description: "Actions, variants and button states.",
    icon: MousePointerClick,
  },
  {
    title: "Cards",
    description: "Flexible layouts for your content.",
    icon: Layers3,
  },
  {
    title: "Forms",
    description: "Accessible input and form patterns.",
    icon: FormInput,
  },
  {
    title: "Navigation",
    description: "Menus, navigation bars and tabs.",
    icon: PanelTop,
  },
  {
    title: "Tables",
    description: "Organized and responsive data.",
    icon: Table2,
  },
  {
    title: "Authentication",
    description: "Login and account interfaces.",
    icon: ShieldCheck,
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: "Components", href: "/components" },
    { label: "Starter Kits", href: "/starter-kits" },
    { label: "Patterns", href: "/playground" },
    { label: "Docs", href: "/#how-it-works" },
  ];

  return (
    <header className="relative z-50 border-b border-[#e9ebef] bg-[#fffdf9]/95">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-[#1546ff] text-3xl font-black text-white shadow-lg shadow-blue-500/20">
            C
          </div>
          <span className="text-2xl font-black tracking-[-0.055em]">Uikit</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#1546ff]"
            >
              {item.label}
              {(item.label === "Components" ||
                item.label === "Starter Kits") && <ChevronDown size={14} />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#how-it-works"
            className="rounded-xl border border-[#d9deea] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#f1f5ff]"
          >
            Learn more
          </a>

          <a
            href="#components"
            className="flex items-center gap-2 rounded-xl bg-[#1546ff] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0033dc]"
          >
            Get started <ArrowRight size={17} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-[#d9deea] p-2 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-[#e9ebef] bg-white p-5 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium hover:bg-[#eef4ff]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function HeroVisual() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  async function copyExample() {
    try {
      await navigator.clipboard.writeText(demoCode);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <div className="relative hidden h-[510px] lg:block">
      <div className="preview-grid absolute inset-3 rounded-[36px]" />

      <div className="absolute left-[7%] top-[5%] size-64 rounded-[43%_57%_55%_45%] bg-[#dcf9e8]" />
      <div className="absolute bottom-2 left-[1%] size-52 rounded-[55%_45%_35%_65%] bg-[#85cfff]" />
      <div className="absolute right-0 top-[48%] h-52 w-40 rotate-12 rounded-[40%] bg-[#ffb25c]" />

      {/* Code-editor op de achtergrond. */}
      <div className="mockup-shadow absolute left-[10%] top-[9%] z-10 w-[65%] -rotate-3 overflow-hidden rounded-[22px] border border-[#324058] bg-[#1d2b41] text-white">
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff7776]" />
            <span className="size-2.5 rounded-full bg-[#ffcf56]" />
            <span className="size-2.5 rounded-full bg-[#4cde9b]" />
          </div>

          <span className="flex items-center gap-2 text-[11px] text-[#becde2]">
            <Code2 size={14} />
            Button.tsx
          </span>
        </div>

        <div className="p-5">
          <pre className="overflow-hidden font-mono text-[11px] leading-6 text-[#cbe1ff]">
            <code>{demoCode}</code>
          </pre>
        </div>
      </div>

      {/* Een kleine componentenbibliotheek. */}
      <div className="mockup-shadow absolute bottom-[3%] left-[3%] z-20 w-[64%] -rotate-2 overflow-hidden rounded-[20px] border border-[#e3e7ef] bg-white">
        <div className="flex h-11 items-center gap-2 border-b border-[#edf0f5] px-4 text-sm font-bold">
          <LayoutGrid size={16} className="text-[#1546ff]" />
          Components
        </div>

        <div className="grid grid-cols-[35%_65%]">
          <div className="border-r border-[#edf0f5] bg-[#f8faff] p-3">
            <div className="mb-3 rounded-lg border border-[#e5eaf3] bg-white p-2 text-[10px] text-[#8792a7]">
              Search components...
            </div>

            {["All components", "Buttons", "Cards", "Forms"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-1 rounded-md px-2 py-2 text-[11px] ${
                    index === 0
                      ? "bg-[#e6edff] font-semibold text-[#1546ff]"
                      : "text-[#56647a]"
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </div>

          <div className="p-4">
            <p className="mb-3 text-xs font-bold">Button Variants</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-[#1546ff] px-2 py-2 text-center text-[11px] text-white">
                Primary
              </div>
              <div className="rounded-lg border border-[#dce2ec] px-2 py-2 text-center text-[11px]">
                Secondary
              </div>
              <div className="rounded-lg bg-[#b5f5d4] px-2 py-2 text-center text-[11px] text-[#08633f]">
                Success
              </div>
              <div className="rounded-lg bg-[#f4f6fa] px-2 py-2 text-center text-[11px]">
                Ghost
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live component preview met kopieerfunctie. */}
      <div className="mockup-shadow absolute right-[-1%] top-[25%] z-30 w-[55%] rotate-1 rounded-[22px] border border-[#e1e7f0] bg-white">
        <div className="flex items-center justify-between border-b border-[#eef0f5] px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-semibold">
            <span className="size-2.5 rounded-full bg-[#00cd63]" />
            Live preview
          </span>
          <button
            type="button"
            onClick={copyExample}
            className="flex items-center gap-1 rounded-lg border border-[#e5eaf2] px-2 py-1 text-[11px] hover:bg-[#f4f6ff]"
            aria-label="Copy button example code"
          >
            {copyStatus === "copied" ? <Check size={12} /> : <Copy size={12} />}
            {copyStatus === "copied"
              ? "Copied!"
              : copyStatus === "error"
                ? "Try again"
                : "Copy"}
          </button>
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-lg font-black leading-tight">
                Modern UI for
                <br />
                your next project.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#66738a]">
                Clean, responsive
                <br />
                and customizable.
              </p>
            </div>

            <div className="relative h-28 w-24 overflow-hidden rounded-xl bg-[#9bd8f5]">
              <div className="absolute -bottom-7 right-2 h-40 w-16 rotate-[25deg] bg-white shadow-lg" />
              <div className="absolute -bottom-6 -right-7 h-40 w-16 rotate-[25deg] bg-[#e4e9ed]" />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg bg-[#1546ff] px-3 py-2 text-[11px] font-semibold text-white hover:bg-[#0033dc]"
            >
              Get started
            </button>
            <a
              href="#features"
              className="rounded-lg border border-[#dce2ee] px-3 py-2 text-[11px] font-semibold"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-[24%] top-[5%] z-40 -rotate-6 rounded-xl bg-[#fff0d9] px-4 py-3 text-xs font-bold shadow-lg">
        Copy & Paste
      </div>
    </div>
  );
}

function CategoryPreview({ index }: { index: number }) {
  return (
    <div className="flex h-24 items-center justify-center overflow-hidden rounded-xl bg-[#f7f9fc] p-3">
      {index === 0 && (
        <div className="flex gap-2">
          <span className="rounded-lg bg-[#1546ff] px-4 py-2 text-[11px] font-semibold text-white">
            Primary
          </span>
          <span className="rounded-lg border border-[#d9e0eb] bg-white px-3 py-2 text-[11px]">
            Secondary
          </span>
        </div>
      )}

      {index === 1 && (
        <div className="flex w-full items-center gap-3 rounded-lg border border-[#e5eaf2] bg-white p-2 shadow-sm">
          <div className="size-12 shrink-0 rounded-lg bg-gradient-to-br from-[#8acfff] to-[#c5f5e1]" />
          <div className="space-y-2">
            <div className="h-2 w-20 rounded bg-[#364158]" />
            <div className="h-1.5 w-16 rounded bg-[#d2d9e5]" />
            <div className="h-1.5 w-12 rounded bg-[#d2d9e5]" />
          </div>
        </div>
      )}

      {index === 2 && (
        <div className="w-full">
          <span className="text-[10px] font-semibold">Email</span>
          <div className="mt-1 flex items-center gap-2 rounded-lg border border-[#d9e0eb] bg-white p-3 text-[11px] text-[#8d97a8]">
            <Mail size={13} />
            you@example.com
          </div>
        </div>
      )}

      {index === 3 && (
        <div className="flex w-full items-center justify-between gap-2 rounded-xl border border-[#e6ebf2] bg-white p-2 text-[10px]">
          <span className="rounded-lg bg-[#e8efff] px-2 py-2 font-semibold text-[#1546ff]">
            Home
          </span>
          <span>Products</span>
          <span>Docs</span>
        </div>
      )}

      {index === 4 && (
        <div className="w-full space-y-2 rounded-lg bg-white p-3 text-[10px]">
          <div className="grid grid-cols-3 gap-2 border-b pb-2 font-semibold">
            <span>User</span>
            <span>Status</span>
            <span>Plan</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span>Sarah</span>
            <span className="text-[#079961]">Active</span>
            <span>Pro</span>
          </div>
        </div>
      )}

      {index === 5 && (
        <div className="w-full max-w-48 space-y-2 rounded-xl border border-[#e5eaf2] bg-white p-3">
          <div className="h-2 w-20 rounded bg-[#17213c]" />
          <div className="rounded-md border border-[#dbe2ed] px-2 py-1.5 text-[10px] text-[#8d97a8]">
            Email address
          </div>
          <div className="rounded-md bg-[#1546ff] py-1.5 text-center text-[10px] text-white">
            Sign in
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#defbe9] px-5 py-2 text-xs font-bold sm:text-sm">
              <Layers3 size={17} className="text-[#08a76d]" />
              UI Components Starter Kit
            </div>

            <h1 className="max-w-[670px] text-[clamp(3.4rem,5.4vw,5.8rem)] font-black leading-[1.02] tracking-[-0.065em]">
              Build beautiful
              <br />
              interfaces <span className="marker-underline italic">faster</span>
              <br />
              with Uikit.
            </h1>

            <p className="mt-9 max-w-[560px] text-base leading-8 text-[#53617c] sm:text-lg">
              A modern collection of reusable UI components and ready-to-use
              starter packs. Build polished, responsive interfaces without
              starting from scratch.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#components"
                className="inline-flex items-center gap-3 rounded-xl bg-[#1546ff] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#0033dc] hover:shadow-lg"
              >
                Browse components
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-[#cdd5e2] bg-white px-6 py-4 text-sm font-bold transition-colors hover:bg-[#f3f6ff]"
              >
                <PlayCircle size={19} />
                How it works
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#4d5d76]">
              {["Reusable", "Responsive", "Easy to customize"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-[#08b977]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <HeroVisual />
        </section>

        <section
          id="features"
          className="mx-auto grid max-w-[1440px] gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`flex min-h-36 gap-4 rounded-[22px] p-6 ${feature.background}`}
              >
                <Icon
                  size={29}
                  strokeWidth={1.9}
                  className={`shrink-0 ${feature.color}`}
                />

                <div>
                  <h2 className="font-bold tracking-tight">{feature.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#53617c]">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </section>

        <section
          id="components"
          className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1546ff]">
                Explore the library
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] sm:text-4xl">
                Browse by component category
              </h2>
              <p className="mt-3 text-[#617089]">
                Every great interface starts with the right building blocks.
              </p>
            </div>

            <span className="rounded-full bg-[#eafaf1] px-4 py-2 text-xs font-semibold text-[#11875c]">
              Library in development
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group rounded-[22px] border border-[#e4e8ef] bg-white p-3 transition-all hover:-translate-y-1 hover:border-[#b5c7ff] hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <CategoryPreview index={index} />

                  <div className="px-2 pb-2 pt-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold">{category.title}</h3>
                      <Icon size={18} className="text-[#1546ff]" />
                    </div>

                    <p className="mt-2 min-h-12 text-xs leading-relaxed text-[#62708a]">
                      {category.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="starter-kits"
          className="mx-auto max-w-[1344px] scroll-mt-24 px-5 pb-20 sm:px-8"
        >
          <div className="grid gap-8 overflow-hidden rounded-[30px] bg-[#eef4ff] p-8 md:grid-cols-2 md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#d9f9e7] px-4 py-2 text-xs font-bold text-[#078653]">
                <Layers3 size={15} />
                Coming next
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Starter kits for your next project.
              </h2>

              <p className="mt-4 max-w-md leading-7 text-[#596985]">
                Complete sets of reusable components for dashboards, SaaS
                products, landing pages and web applications.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm rotate-2 rounded-2xl border border-[#dce5f5] bg-white p-5 shadow-xl shadow-blue-500/10">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-bold">Dashboard Starter</span>
                  <LayoutGrid size={18} className="text-[#1546ff]" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#eef4ff] p-4">
                    <p className="text-xs text-[#66748b]">Users</p>
                    <p className="mt-2 text-2xl font-black">1,284</p>
                  </div>
                  <div className="rounded-xl bg-[#e8fbef] p-4">
                    <p className="text-xs text-[#66748b]">Projects</p>
                    <p className="mt-2 text-2xl font-black">48</p>
                  </div>
                </div>

                <div className="mt-4 flex h-20 items-end gap-2 rounded-xl bg-[#f6f8fc] p-4">
                  {[35, 55, 40, 76, 63, 92, 72, 100].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-[#1546ff]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto max-w-[1344px] scroll-mt-24 px-5 pb-24 sm:px-8"
        >
          <h2 className="text-3xl font-black tracking-tight">How it works</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Find a component", "Browse the library."],
              ["02", "Customize it", "Adjust its appearance and behavior."],
              ["03", "Copy the code", "Bring it into your own project."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-[#e6eaf0] bg-white p-6"
              >
                <span className="text-sm font-black text-[#1546ff]">
                  {number}
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-[#62708a]">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e9ebef] px-5 py-8 text-center text-sm text-[#738097]">
        Uikit · Built with Next.js and Tailwind CSS
      </footer>
    </div>
  );
}
