import Link from "next/link";
import { ArrowRight, Check, Code2, Grid2X2, Layers3, Play, Search } from "lucide-react";

function HeroShowcase() {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[660px] sm:h-[510px]" aria-label="Voorbeeld van een componentenbibliotheek en een codepaneel">
      <div
        className="absolute inset-4 rounded-[34px] opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute left-[11%] top-[7%] size-[190px] rounded-[38%_62%_70%_30%] bg-[#dff8e9] sm:size-[265px]" />
      <div className="absolute bottom-[3%] left-[4%] size-[150px] rounded-[58%_42%_37%_63%] bg-[#93d8ff] sm:size-[215px]" />
      <div className="absolute right-0 top-[43%] h-[155px] w-[125px] rotate-12 rounded-[45%] bg-[#ffb462] sm:h-[210px] sm:w-[165px]" />

      {/* Code editor illustration */}
      <div className="absolute right-[4%] top-[7%] w-[76%] -rotate-[3deg] overflow-hidden rounded-[18px] border border-[#334054] bg-[#1e2a3f] shadow-[0_22px_50px_rgba(17,29,54,0.22)] sm:rounded-[22px]">
        <div className="flex h-10 items-center justify-between border-b border-white/10 px-4 sm:h-12">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#fa7773]" />
            <span className="size-2.5 rounded-full bg-[#ffcf67]" />
            <span className="size-2.5 rounded-full bg-[#53da93]" />
          </div>
          <span className="flex items-center gap-2 text-[10px] font-semibold text-[#c2cfe1] sm:text-xs">
            <Code2 size={13} /> component.tsx
          </span>
        </div>
        <div className="space-y-2 px-4 py-5 font-mono text-[9px] leading-4 sm:px-6 sm:py-7 sm:text-[12px] sm:leading-5">
          <div><span className="text-[#ca9af5]">export</span> <span className="text-[#82d6ff]">function</span> <span className="text-[#f0e39b]">MyComponent</span>() {'{'}</div>
          <div className="pl-4"><span className="text-[#ca9af5]">return</span> (</div>
          <div className="pl-8 text-[#7de0d8]">&lt;div className=<span className="text-[#f0e39b]">&quot;...&quot;</span>&gt;</div>
          <div className="pl-12 text-[#e7efff]">Your component here</div>
          <div className="pl-8 text-[#7de0d8]">&lt;/div&gt;</div>
          <div className="pl-4 text-[#e7efff]">);</div>
          <div className="text-[#e7efff]">{'}'}</div>
        </div>
      </div>

      {/* Component explorer illustration */}
      <div className="absolute bottom-[3%] left-[1%] w-[64%] -rotate-[2deg] overflow-hidden rounded-[18px] border border-[#e0e6ef] bg-white shadow-[0_16px_48px_rgba(41,59,90,0.15)] sm:rounded-[22px]">
        <div className="flex h-10 items-center gap-2 border-b border-[#edf0f5] px-3 text-[10px] font-bold sm:h-12 sm:px-4 sm:text-xs">
          <Grid2X2 size={14} className="text-[#1552f6]" /> Component library
        </div>
        <div className="grid min-h-[142px] grid-cols-[39%_61%] sm:min-h-[190px]">
          <div className="space-y-2 border-r border-[#edf0f5] bg-[#f8faff] p-2 sm:p-3">
            <div className="flex items-center gap-1 rounded-md border border-[#e7ebf2] bg-white px-2 py-2 text-[8px] text-[#8b98aa] sm:text-[10px]">
              <Search size={10} /> Search...
            </div>
            <div className="rounded-md bg-[#e9efff] px-2 py-2 text-[9px] font-semibold text-[#1552f6] sm:text-xs">All</div>
            <div className="px-2 text-[9px] text-[#65738a] sm:text-xs">Buttons</div>
            <div className="px-2 text-[9px] text-[#65738a] sm:text-xs">Cards</div>
            <div className="hidden px-2 text-xs text-[#65738a] sm:block">Forms</div>
          </div>
          <div className="space-y-3 p-3 sm:p-4">
            <div className="text-[10px] font-bold text-[#14203b] sm:text-xs">Preview area</div>
            <div className="grid grid-cols-2 gap-2 text-center text-[8px] font-semibold sm:text-[10px]">
              <span className="rounded-lg bg-[#1552f6] px-1 py-2 text-white">Primary</span>
              <span className="rounded-lg border border-[#dee4ee] px-1 py-2">Secondary</span>
              <span className="rounded-lg bg-[#c7f6da] px-1 py-2 text-[#067248]">Success</span>
              <span className="rounded-lg bg-[#f0f3f8] px-1 py-2">Outline</span>
            </div>
          </div>
        </div>
      </div>

      {/* Preview card */}
      <div className="absolute right-[0%] top-[45%] w-[52%] rotate-[2deg] overflow-hidden rounded-[17px] border border-[#e2e7ef] bg-white shadow-[0_18px_52px_rgba(41,59,90,0.18)] sm:rounded-[22px]">
        <div className="flex h-9 items-center gap-2 border-b border-[#edf0f5] px-3 text-[9px] font-bold sm:h-11 sm:px-4 sm:text-[11px]">
          <span className="size-2 rounded-full bg-[#11c76d]" /> Live preview
        </div>
        <div className="p-3 sm:p-5">
          <p className="text-sm font-extrabold leading-tight tracking-tight text-[#14203b] sm:text-xl">Your ideas,<br />your components.</p>
          <div className="mt-3 h-2 w-[75%] rounded-full bg-[#e7edf5]" />
          <div className="mt-2 h-2 w-[55%] rounded-full bg-[#e7edf5]" />
          <div className="mt-4 flex gap-2">
            <span className="rounded-lg bg-[#1552f6] px-3 py-2 text-[9px] font-bold text-white sm:text-[11px]">Preview</span>
            <span className="rounded-lg border border-[#dde4ef] px-3 py-2 text-[9px] font-semibold sm:text-[11px]">Code</span>
          </div>
        </div>
      </div>

      <div className="absolute right-[16%] top-[2%] rotate-6 rounded-xl bg-[#ffefda] px-3 py-2 text-[10px] font-extrabold text-[#5e4023] shadow-md sm:text-xs">
        Build it yourself ↗
      </div>
    </div>
  );
}

export function HomeHero() {
return (
<section className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:py-20 xl:px-12">
          <div className="max-w-[630px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#def8e8] px-4 py-2 text-xs font-bold text-[#195c46] sm:text-sm"><Layers3 size={17} /> UI component library & starter kits</div>
            <h1 className="text-[clamp(3.5rem,5.7vw,5.9rem)] font-extrabold leading-[1.04] tracking-[-0.077em]">
              Build better<br />interfaces.<br /><span className="relative inline-block text-[#1552f6]">Your way.<span className="absolute bottom-[-8px] left-[3%] h-[7px] w-[95%] -rotate-2 rounded-full bg-[#8af0b5]" aria-hidden="true" /></span>
            </h1>
            <p className="mt-9 max-w-[530px] text-base leading-8 text-[#59667d] sm:text-[17px]">
              A home for reusable components, thoughtfully designed layouts and starter kits. Explore the collection, inspect the code and create something of your own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/components" className="inline-flex items-center gap-3 rounded-xl bg-[#1552f6] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0b3ed2] hover:shadow-lg hover:shadow-blue-500/15">Browse components <ArrowRight size={18} /></Link>
              <Link href="/starter-kits" className="inline-flex items-center gap-2 rounded-xl border border-[#ced7e5] bg-white px-6 py-3.5 text-sm font-bold transition-colors hover:border-[#1552f6] hover:bg-[#f5f8ff]"><Play size={17} /> Explore starter kits</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#5c6b83]">
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#0cba76]" /> Your own components</span>
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#0cba76]" /> Responsive layouts</span>
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#0cba76]" /> Built with Next.js</span>
            </div>
          </div>
          <HeroShowcase />
        </section>
);
}
