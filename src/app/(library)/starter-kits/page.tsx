"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  LayoutTemplate,
  Search,
} from "lucide-react";
import { starterKits } from "@/lib/starter-kits";

type KitFilter = "All" | "Components" | "Templates";

const colors = {
  blue: { background: "bg-[#e9f1ff]", accent: "bg-[#2454f4]" },
  mint: { background: "bg-[#e5f9ee]", accent: "bg-[#18a778]" },
  peach: { background: "bg-[#fff0e6]", accent: "bg-[#f29a57]" },
  yellow: { background: "bg-[#fff7dc]", accent: "bg-[#e6b633]" },
};

export default function StarterKitsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<KitFilter>("All");

  // Filter de kits op de zoektekst en gekozen categorie.
  const visibleKits = useMemo(() => {
    const search = query.trim().toLowerCase();

    return starterKits.filter((kit) => {
      const categoryMatches = filter === "All" || kit.category === filter;
      const textMatches = `${kit.title} ${kit.description} ${kit.tags.join(" ")}`
        .toLowerCase()
        .includes(search);

      return categoryMatches && textMatches;
    });
  }, [query, filter]);

  return (
    <main className="mx-auto max-w-[1450px] px-5 pb-24 pt-10 sm:px-8 lg:px-12">
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-[#68768e]">
        <Link href="/" className="hover:text-[#2454f4]">Home</Link>
        <span>/</span>
        <span className="font-semibold text-[#17233b]">Starter Kits</span>
      </nav>

      {/* Hero: alleen een layout, geen voorgemaakte UI-kit. */}
      <header className="relative overflow-hidden rounded-[30px] border border-[#e4eaf2] bg-[#f3f7ff] p-8 sm:p-12 lg:p-16">
        <div aria-hidden="true" className="absolute -right-24 -top-36 size-80 rounded-full bg-[#d5f9e6]" />
        <div aria-hidden="true" className="absolute -bottom-36 right-20 size-72 rounded-full bg-[#bcd8ff]" />
        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1552c6] shadow-sm">
            <Layers3 size={15} /> UI COMPONENT LIBRARY
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-[-0.06em] text-[#14213b] sm:text-6xl">
            Starter Kits<span className="text-[#2454f4]">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#596a84]">
            Kies een collectie, bekijk jouw HTML-componenten live en kopieer de Tailwind-code.
            Elke kit krijgt automatisch zijn eigen pagina.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-[#4a607c]">
            <span className="rounded-full bg-white px-3 py-2">HTML + Tailwind</span>
            <span className="rounded-full bg-white px-3 py-2">Live preview</span>
            <span className="rounded-full bg-white px-3 py-2">Copy & paste</span>
          </div>
        </div>
      </header>

      <section className="mt-12" aria-label="Starter Kits zoeken en filteren">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#14213b] sm:text-3xl">Ontdek de kits</h2>
            <p className="mt-2 text-sm text-[#6a7991]">Klik op een kit om de voorbeelden en code te bekijken.</p>
          </div>
          <span className="rounded-full bg-[#e8f8ef] px-4 py-2 text-sm font-bold text-[#15805a]">
            {visibleKits.length} van {starterKits.length} kits
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#e5eaf1] py-5">
          <div className="flex flex-wrap gap-2">
            {([
              ["All", "Alle kits"],
              ["Components", "Componenten"],
              ["Templates", "Templates"],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                aria-pressed={filter === value}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  filter === value
                    ? "bg-[#2454f4] text-white"
                    : "border border-[#dce4ee] bg-white text-[#55647c] hover:bg-[#edf3ff]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <label className="flex w-full items-center gap-3 rounded-xl border border-[#dce4ee] bg-white px-4 py-3 focus-within:border-[#2454f4] sm:w-72">
            <Search size={17} className="text-[#7d8ba0]" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Zoek een kit..."
              className="w-full min-w-0 bg-transparent text-sm text-[#17233b] outline-none placeholder:text-[#97a2b3]"
            />
          </label>
        </div>
      </section>

      {visibleKits.length === 0 ? (
        <div className="mt-7 rounded-3xl border border-dashed border-[#cfd8e7] bg-white p-14 text-center">
          <Search size={30} className="mx-auto text-[#8394b1]" />
          <h3 className="mt-4 text-xl font-bold">Geen kits gevonden</h3>
          <p className="mt-2 text-sm text-[#63718a]">Probeer een andere zoekterm.</p>
          <button
            type="button"
            onClick={() => { setQuery(""); setFilter("All"); }}
            className="mt-5 text-sm font-bold text-[#2454f4] hover:underline"
          >
            Wis filters
          </button>
        </div>
      ) : (
        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleKits.map((kit) => {
            const palette = colors[kit.accent];
            const Icon = kit.category === "Templates" ? LayoutTemplate : Layers3;

            return (
              <Link
                key={kit.slug}
                href={`/starter-kits/${kit.slug}`}
                className="group overflow-hidden rounded-[24px] border border-[#e4e9f1] bg-white p-4 transition-all hover:-translate-y-1 hover:border-[#c2d1ff] hover:shadow-[0_18px_38px_rgba(25,48,92,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2454f4]"
              >
                <div className={`relative flex h-44 items-center justify-center overflow-hidden rounded-[18px] ${palette.background}`}>
                  <div className="absolute -right-12 -top-14 size-48 rounded-full bg-white/50" />
                  <div className="relative w-[75%] rounded-xl border border-white bg-white p-4 shadow-[0_12px_35px_rgba(18,37,70,0.12)]">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`grid size-9 place-items-center rounded-lg ${palette.accent} text-white`}>
                        <Icon size={18} />
                      </div>
                      <Code2 size={17} className="text-[#9aa8ba]" />
                    </div>
                    <div className="mb-2 h-2.5 w-2/3 rounded-full bg-[#243651]" />
                    <div className="mb-4 h-2 w-4/5 rounded-full bg-[#e1e7ef]" />
                    <div className="flex gap-2">
                      <div className={`h-7 w-20 rounded-md ${palette.accent}`} />
                      <div className="h-7 w-16 rounded-md border border-[#e0e6ef]" />
                    </div>
                  </div>
                </div>

                <div className="px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black tracking-tight text-[#14213b]">{kit.title}</h3>
                    <ArrowUpRight size={20} className="shrink-0 text-[#2454f4] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#65748a]">{kit.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#edf0f5] pt-4">
                    <span className="text-xs font-semibold text-[#5d7088]">{kit.examples.length} voorbeeld{kit.examples.length === 1 ? "" : "en"}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2454f4]">
                      Bekijk kit <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
