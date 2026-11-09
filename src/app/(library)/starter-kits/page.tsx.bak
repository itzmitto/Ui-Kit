import { ArrowRight, Check, Cloud, Layers3, LayoutDashboard, Monitor, Package, Smartphone, Store, BookOpen, type LucideIcon } from "lucide-react";
import { PreviewSlot } from "@/components/cutkit/preview-slot";

type Kit = { name: string; type: string; description: string; Icon: LucideIcon; theme: string };

const kits: Kit[] = [
  { name: "SaaS Starter", type: "SaaS", description: "Marketing, app, billing en accountpagina's.", Icon: Cloud, theme: "bg-[#e9f6ff]" },
  { name: "Dashboard Starter", type: "Dashboard", description: "Analytics, tabellen, grafieken en beheer.", Icon: LayoutDashboard, theme: "bg-[#eaf9ef]" },
  { name: "Landing Page", type: "Marketing", description: "Hero, features, reviews en contact.", Icon: Monitor, theme: "bg-[#fff4e9]" },
  { name: "Commerce Starter", type: "Shop", description: "Producten, collectie, winkelwagen en checkout.", Icon: Store, theme: "bg-[#fff0eb]" },
  { name: "Docs Starter", type: "Documentatie", description: "Handleidingen, voorbeelden en zoekfunctie.", Icon: BookOpen, theme: "bg-[#f0f2ff]" },
  { name: "App Starter", type: "Webapp", description: "Een basis voor tools en accountinterfaces.", Icon: Smartphone, theme: "bg-[#e7fbfa]" },
];

export default function StarterKitsPage() {
  return (
    <main className="mx-auto max-w-[1500px] px-5 pt-14 sm:px-8 lg:px-12">
      <section className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="py-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#dffae9] px-4 py-2 text-xs font-bold"><Layers3 size={16} className="text-[#0ea669]"/> STARTER KITS</span>
          <h1 className="mt-6 text-[clamp(3.5rem,5.5vw,6rem)] font-black leading-[1.02] tracking-[-.065em]">Starter <span className="relative inline-block">Kits<span aria-hidden className="absolute -bottom-2 left-0 h-1.5 w-full -rotate-2 rounded bg-[#7cf0b1]"/></span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#607087]">Voor elk starter pack is alvast een aantrekkelijke layout gereserveerd. Jij gaat later zelf de UI-kits en onderliggende code toevoegen.</p>
          <div className="mt-7 flex flex-wrap gap-5 text-xs font-bold text-[#4a5971]">{["Eigen templates", "Herbruikbare pagina's", "React + Tailwind"].map((item) => <span key={item} className="flex items-center gap-2"><Check size={16} className="text-[#10ab70]"/>{item}</span>)}</div>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-[#f8faff] p-6 sm:p-9">
          <div aria-hidden className="absolute -right-8 top-4 size-56 rounded-[40%] bg-[#b1f3d2] opacity-70"/>
          <div aria-hidden className="absolute -bottom-12 right-20 size-60 rounded-[36%] bg-[#8dcffd] opacity-70"/>
          <div className="relative grid gap-4 sm:grid-cols-2"><div><span className="rounded-full bg-[#ddf9e9] px-3 py-1 text-[11px] font-bold text-[#087a4f]">Featured layout</span><h2 className="mt-5 text-3xl font-black">SaaS Starter</h2><p className="mt-3 text-sm leading-7 text-[#66748c]">Grote teaserpositie zoals in je screenshot.</p><div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#1546ff]"><Package size={16}/> Nog te vullen</div></div><PreviewSlot compact title="SaaS preview" description="Jouw starter kit mockup" className="min-h-52 bg-white" /></div>
        </div>
      </section>

      <div className="mt-11 flex flex-wrap items-center gap-3 border-y border-[#e5eaf1] py-5"><span className="mr-2 text-sm font-extrabold">Filter by use case:</span>{["All kits", "SaaS", "Dashboard", "Landing Page", "E-commerce", "App", "Auth"].map((name, index) => <span key={name} className={`rounded-full px-4 py-2 text-xs font-bold ${index === 0 ? "bg-[#1546ff] text-white" : "border border-[#dce3ed] bg-white text-[#5e6e85]"}`}>{name}</span>)}<span className="ml-auto text-xs font-semibold text-[#8a97a8]">Filterwerking voeg je later toe</span></div>

      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {kits.map(({ name, type, description, Icon, theme }) => <article key={name} className="overflow-hidden rounded-[24px] border border-[#e1e7ef] bg-white p-4 shadow-[0_5px_20px_rgba(18,37,73,.025)]">
          <div className={`rounded-[18px] p-4 ${theme}`}><PreviewSlot compact title={`${name} preview`} description="Hier plaats je later jouw template" className="min-h-48 bg-white/80"/></div>
          <div className="px-2 pb-2 pt-5"><div className="flex items-center justify-between gap-3"><h3 className="text-xl font-black tracking-tight">{name}</h3><Icon size={21} className="text-[#1546ff]"/></div><p className="mt-2 min-h-11 text-sm leading-6 text-[#63718b]">{description}</p><div className="mt-5 flex items-center justify-between border-t border-[#edf0f5] pt-4"><span className="rounded-full bg-[#e5faee] px-3 py-1 text-[11px] font-bold text-[#168158]">{type}</span><span className="flex items-center gap-1 text-xs font-bold text-[#92a0b4]">Template later <ArrowRight size={15}/></span></div></div>
        </article>)}
      </section>
    </main>
  );
}
