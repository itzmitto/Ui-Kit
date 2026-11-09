import Link from "next/link";
import { ArrowRight, ChevronRight, Code2, Copy, Monitor, Settings2, Smartphone, Tablet } from "lucide-react";
import { PreviewSlot } from "@/components/cutkit/preview-slot";

const variants = ["Primary", "Secondary", "Outline", "Ghost", "Success", "Destructive"];

export default function ButtonsPage() {
  return (
    <main className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
      <section className="relative overflow-hidden pb-10 pt-14">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold text-[#68768f]">
          <Link href="/components" className="hover:text-[#1546ff]">Components</Link><ChevronRight size={15}/><span className="text-[#17213c]">Buttons</span>
        </nav>
        <div className="relative z-10 mt-6 max-w-3xl">
          <span className="inline-flex rounded-full bg-[#ddf9e8] px-4 py-2 text-xs font-bold text-[#078e59]">COMPONENT LAYOUT</span>
          <h1 className="mt-5 text-[clamp(3.5rem,6vw,5.8rem)] font-black leading-none tracking-[-.065em]">Buttons<span className="text-[#1546ff]">.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5e6c85]">Hier komt jouw eigen Button UI-kit. De live-preview, code-editor en configuratie staan alvast op hun plaats zoals in je referentie.</p>
        </div>
        <div aria-hidden className="pointer-events-none absolute -right-12 top-2 hidden size-72 rounded-[37%_63%_64%_36%] bg-[#dff9e9] lg:block" />
        <div aria-hidden className="pointer-events-none absolute right-14 top-20 hidden h-40 w-64 rotate-[-8deg] rounded-[28px] border border-[#e2e8f0] bg-white shadow-xl lg:block" />
      </section>

      <div className="flex flex-wrap gap-7 border-b border-[#e3e9f1] pb-4 text-sm font-bold">
        <span className="border-b-2 border-[#1546ff] pb-3 text-[#1546ff]">Preview</span><span className="pb-3 text-[#7a879c]">Code</span><span className="pb-3 text-[#7a879c]">Usage</span><span className="pb-3 text-[#7a879c]">Accessibility</span>
      </div>

      <section className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_1fr_.65fr]">
        <div className="overflow-hidden rounded-[22px] border border-[#e1e7f0] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e9edf4] px-5 py-4"><div className="flex items-center gap-2 text-sm font-extrabold"><span className="size-2.5 rounded-full bg-[#0fca6c]"/>Live preview</div><div className="flex gap-3 text-[#64738b]"><Monitor size={18}/><Tablet size={18}/><Smartphone size={18}/></div></div>
          <div className="p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#65748a]">Button variants</p>
            <div className="mb-5 flex flex-wrap gap-2">{variants.map((name) => <span key={name} className="rounded-full border border-[#e2e8f0] bg-[#f8faff] px-3 py-2 text-xs font-semibold text-[#63718a]">{name}</span>)}</div>
            <PreviewSlot title="Jouw Button-component" description="Plaats hier straks je eigen Button met verschillende varianten, maten en states." className="min-h-[280px]" />
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#eef1f5] pt-5"><PreviewSlot compact title="Icon buttons" /><PreviewSlot compact title="Loading states" /></div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[#24344f] bg-[#1c2940] text-[#e9f0ff] shadow-sm">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2 text-sm font-bold"><Code2 size={17} className="text-[#8cc8ff]"/>Button.tsx</div><span title="Wordt actief wanneer je eigen code is toegevoegd" className="flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs text-[#aab9d1]"><Copy size={14}/> Copy (later)</span></div>
          <div className="p-5 font-mono text-xs leading-7 sm:text-sm"><p className="text-[#7b97b6]">// Layout is klaar</p><p className="mt-4 text-[#92d9ff]">// Hier verschijnt jouw Button-code.</p><p className="mt-4 text-[#8c9db6]">// Jij bouwt zelf:</p><p className="text-[#f1c981]">// - varianten</p><p className="text-[#f1c981]">// - sizes</p><p className="text-[#f1c981]">// - loading / disabled</p><p className="text-[#f1c981]">// - iconen en toegankelijkheid</p><div className="mt-7 space-y-3 opacity-30">{["w-[75%]", "w-[95%]", "w-[63%]", "w-[85%]", "w-[50%]"].map((width) => <div key={width} className={`h-2 rounded bg-[#789ac4] ${width}`} />)}</div></div>
        </div>

        <aside className="rounded-[22px] border border-[#e1e7f0] bg-white p-5 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-black"><Settings2 size={20} className="text-[#1546ff]"/> Configure</h2>
          <p className="mt-2 text-xs leading-6 text-[#77859b]">Hier komen straks controls die jouw eigen Button aanpassen.</p>
          <div className="mt-6 space-y-5">
            {["Variant", "Size", "Icon position"].map((label) => <div key={label}><label className="mb-2 block text-xs font-bold">{label}</label><div className="flex h-11 items-center justify-between rounded-xl border border-[#e1e7f0] bg-[#f8faff] px-3 text-xs text-[#8b97aa]">Nog niet ingesteld <span>▾</span></div></div>)}
            {["Disabled", "Full width"].map((label) => <div key={label} className="flex items-center justify-between text-xs font-bold"><span>{label}</span><span className="h-6 w-11 rounded-full bg-[#e5eaf2] p-1"><span className="block size-4 rounded-full bg-white shadow"/></span></div>)}
            <div className="border-t border-[#e8ecf3] pt-5"><label className="block text-xs font-bold">Radius</label><div className="mt-3 h-1.5 rounded-full bg-[#e7edf5]"/></div>
          </div>
        </aside>
      </section>

      <section className="mt-14"><div className="mb-5 flex items-center justify-between"><h2 className="text-2xl font-black tracking-tight">Related component layouts</h2><Link href="/components" className="flex items-center gap-2 text-sm font-bold text-[#1546ff]">All components <ArrowRight size={17}/></Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Button Group", "CTA Banner", "Tabs", "Form Actions"].map((name, index) => <div key={name} className={`rounded-[20px] p-6 ${["bg-[#edf4ff]", "bg-[#e8f9ef]", "bg-[#fff3e5]", "bg-[#edf4ff]"][index]}`}><span className="text-lg font-black">{name}</span><p className="mt-2 text-xs text-[#60718a]">Layoutplek voor jouw volgende component.</p></div>)}</div></section>
    </main>
  );
}
