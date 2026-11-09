import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Filter, Layers3, Search, SlidersHorizontal } from "lucide-react";
import { PreviewSlot } from "@/components/cutkit/preview-slot";

const categories = [
  { name: "Buttons", note: "Varianten, maten en states", href: "/components/buttons" },
  { name: "Cards", note: "Content en layout", href: null },
  { name: "Forms", note: "Input en validatie", href: null },
  { name: "Navigation", note: "Navbars, sidebars en tabs", href: null },
  { name: "Tables", note: "Data en overzichten", href: null },
  { name: "Modals", note: "Dialogen en overlays", href: null },
  { name: "Tabs", note: "Interactieve tabbladen", href: null },
  { name: "Badges", note: "Labels en statussen", href: null },
  { name: "Alerts", note: "Meldingen en feedback", href: null },
  { name: "Authentication", note: "Login- en signup-schermen", href: null },
];

export default function ComponentsPage() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-[1500px] gap-8 overflow-hidden px-5 pb-12 pt-14 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#dcfae9] px-4 py-2 text-xs font-bold"><Layers3 size={16} className="text-[#06a766]" /> COMPONENT LIBRARY</span>
          <h1 className="mt-6 text-[clamp(3rem,5vw,5.25rem)] font-black leading-[1.03] tracking-[-.065em]">Browse <span className="relative inline-block">components<span aria-hidden className="absolute bottom-[-8px] left-0 h-[6px] w-full -rotate-2 rounded-full bg-[#72edac]" /></span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#596781]">Alle plekken voor jouw Buttons, Cards, Forms en andere UI-kits. De layout staat klaar. De componenten vul jij zelf in.</p>
          <div className="mt-7 flex flex-wrap gap-5 text-xs font-semibold text-[#4e5c74]">
            {["React + TypeScript", "Tailwind CSS", "Eigen UI-componenten"].map((item) => <span className="flex items-center gap-2" key={item}><Check size={16} className="text-[#09a969]" />{item}</span>)}
          </div>
        </div>
        <div aria-hidden className="relative hidden min-h-60 lg:block">
          <div className="absolute inset-2 rounded-3xl" style={{ backgroundImage: "linear-gradient(#dfe6ef88 1px,transparent 1px),linear-gradient(90deg,#dfe6ef88 1px,transparent 1px)", backgroundSize: "25px 25px" }} />
          <div className="absolute bottom-0 left-7 size-44 rounded-[40%_60%_60%_40%] bg-[#7ccafa]" />
          <div className="absolute right-9 top-5 size-40 rotate-12 rounded-[32%_68%_41%_59%] bg-[#ffbb70]" />
          <div className="absolute left-[17%] top-[13%] flex w-56 -rotate-6 items-center justify-between rounded-2xl border border-[#e4e9f0] bg-white p-4 shadow-xl"><span className="h-8 w-20 rounded-lg bg-[#1546ff]" /><span className="h-8 w-16 rounded-lg bg-[#eef2f8]" /><Check size={20} className="text-[#0ea76d]" /></div>
          <div className="absolute bottom-5 right-5 flex w-64 rotate-3 items-center gap-4 rounded-2xl border border-[#e4e9f0] bg-white p-5 shadow-xl"><span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#d9f9e7] text-[#0a965f]"><Layers3 size={25} /></span><div className="space-y-2"><div className="h-3 w-32 rounded bg-[#273452]"/><div className="h-2 w-24 rounded bg-[#d6ddea]"/></div></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-6 px-5 sm:px-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:px-12">
        <aside className="self-start rounded-[22px] border border-[#e2e7ef] bg-white p-5 lg:sticky lg:top-24">
          <div className="mb-5 flex items-center gap-2 font-extrabold"><Filter size={18} className="text-[#1546ff]" /> Filter-layout</div>
          {[{ title: "Framework", values: ["React", "Next.js", "HTML", "Vue"] }, { title: "Type", values: ["Component", "Pattern", "Block"] }, { title: "Status", values: ["Zelf gebouwd", "Nog te bouwen"] }].map((group) => (
            <div key={group.title} className="border-t border-[#edf0f4] py-5">
              <div className="mb-4 flex items-center justify-between text-sm font-bold">{group.title}<ChevronDown size={16} /></div>
              <div className="space-y-3">{group.values.map((value) => <label key={value} className="flex items-center gap-2 text-sm text-[#65728a]"><input disabled type="checkbox" className="size-4 accent-[#1546ff]" />{value}</label>)}</div>
            </div>
          ))}
          <p className="rounded-xl bg-[#f2f6ff] p-3 text-xs leading-5 text-[#61728c]">Filters zijn voorlopig alleen visueel. Je voegt hun werking later toe.</p>
        </aside>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3 rounded-[20px] border border-[#e2e7ef] bg-white p-4">
            <div className="flex min-w-56 flex-1 items-center gap-3 rounded-xl border border-[#e0e6f0] bg-[#f9fbff] px-4 py-3 text-sm text-[#8a97aa]"><Search size={17} /> Zoeken voeg je later toe</div>
            <span className="rounded-xl bg-[#e8eeff] px-4 py-3 text-xs font-bold text-[#1546ff]">All</span>
            <span className="rounded-xl border border-[#e1e7f0] px-4 py-3 text-xs font-semibold">React</span>
            <span className="rounded-xl border border-[#e1e7f0] px-4 py-3 text-xs font-semibold">Tailwind</span>
            <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-[#73809b]"><SlidersHorizontal size={17} /> Filter UI</span>
          </div>
          <div className="mt-7 flex items-center justify-between gap-4"><div><h2 className="text-2xl font-black tracking-tight">Component categories</h2><p className="mt-1 text-sm text-[#71809b]">Vul elke preview later met je eigen component.</p></div><span className="rounded-full bg-[#e9faef] px-3 py-1 text-xs font-bold text-[#0b9560]">{categories.length} layoutplekken</span></div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map(({ name, note, href }) => <article key={name} className="min-w-0 rounded-[22px] border border-[#e1e7ee] bg-white p-3 transition-shadow hover:shadow-[0_10px_35px_rgba(19,44,83,.07)]">
              <PreviewSlot compact title={`${name} preview`} description="Jouw ontwerp komt hier" />
              <div className="flex items-end justify-between gap-3 px-2 pb-2 pt-4"><div><h3 className="text-lg font-extrabold">{name}</h3><p className="mt-1 text-xs text-[#6b7890]">{note}</p></div>{href ? <Link href={href} aria-label={`${name} layout openen`} className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#1546ff] text-white hover:bg-[#0033dc]"><ArrowRight size={18} /></Link> : <span className="rounded-lg bg-[#f2f5f8] px-2 py-1 text-[10px] font-bold text-[#7b889b]">Later</span>}</div>
            </article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
