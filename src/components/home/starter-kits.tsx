import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const starters = [
  {
    label: "01 / SAAS",
    title: "SaaS Starter",
    description: "A landing page, app shell and account flows.",
    background: "bg-[#eaf5ff]",
    preview: "saas",
  },
  {
    label: "02 / PRODUCT",
    title: "Dashboard Starter",
    description: "A clean structure for tools and analytics.",
    background: "bg-[#ecf9f0]",
    preview: "dashboard",
  },
  {
    label: "03 / WEBSITE",
    title: "Landing Page Starter",
    description: "A flexible layout for presenting a product.",
    background: "bg-[#fff1e5]",
    preview: "landing",
  },
] as const;

function StarterPreview({ variant }: { variant: "saas" | "dashboard" | "landing" }) {
  return (
    <div className="relative flex h-[190px] items-end overflow-hidden rounded-[18px] border border-white/70 bg-white/65 p-4 shadow-sm">
      <div className="absolute right-[-10px] top-[-22px] size-36 rounded-full bg-white/60" />
      <div className="relative w-full overflow-hidden rounded-xl border border-[#e2e8f1] bg-white shadow-[0_12px_28px_rgba(27,48,79,0.12)]">
        <div className="flex h-6 items-center gap-1 border-b border-[#edf0f5] px-3"><span className="size-1.5 rounded-full bg-[#ff8b83]" /><span className="size-1.5 rounded-full bg-[#f5c45e]" /><span className="size-1.5 rounded-full bg-[#70d9aa]" /></div>
        <div className="flex h-[106px] gap-3 p-3">
          {variant === "dashboard" ? (
            <><div className="w-[24%] space-y-2 rounded-md bg-[#eff4ff] p-2"><div className="h-2 rounded bg-[#1552f6]" /><div className="h-2 rounded bg-[#cdd9ed]" /><div className="h-2 rounded bg-[#cdd9ed]" /></div><div className="flex-1"><div className="mb-2 h-3 w-2/3 rounded bg-[#1d2b49]" /><div className="flex h-[60px] items-end gap-2 rounded-lg bg-[#f4f7fc] p-2">{[45, 75, 55, 95, 70].map((height, i) => <span key={i} className="flex-1 rounded-t bg-[#1552f6]" style={{ height: `${height}%` }} />)}</div></div></>
          ) : (
            <><div className="flex-1 space-y-2 pt-2"><div className="h-3 w-[85%] rounded bg-[#1d2b49]" /><div className="h-3 w-[65%] rounded bg-[#1d2b49]" /><div className="mt-2 h-2 w-[90%] rounded bg-[#dce4ee]" /><div className="h-2 w-[75%] rounded bg-[#dce4ee]" /><div className="mt-3 h-5 w-[52%] rounded bg-[#1552f6]" /></div><div className={`w-[38%] rounded-lg ${variant === "saas" ? "bg-[#bde8d2]" : "bg-[#9bcff7]"}`} /></>
          )}
        </div>
      </div>
    </div>
  );
}

export function HomeStarterKits() {
return (
<section id="starter-kits" className="border-y border-[#e9edf2] bg-[#f7f9fc] py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-12">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1552f6]">START FROM A FOUNDATION</p><h2 className="text-3xl font-extrabold tracking-[-0.055em] sm:text-4xl">Starter kits, your rules<span className="text-[#1552f6]">.</span></h2><p className="mt-3 text-sm leading-6 text-[#657189] sm:text-base">Ready for your future page collections and UI templates.</p></div><Link href="/starter-kits" className="inline-flex items-center gap-2 text-sm font-bold text-[#1552f6] hover:underline">Browse starter kits <ArrowRight size={17} /></Link></div>
            <div className="grid gap-5 md:grid-cols-3">
              {starters.map((item) => (
                <Link key={item.title} href="/starter-kits" className="group rounded-[24px] border border-[#e5e9ef] bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(29,65,126,0.08)]">
                  <div className={`rounded-[18px] p-3 ${item.background}`}><StarterPreview variant={item.preview} /></div>
                  <div className="px-2 pb-2 pt-6"><p className="text-[11px] font-bold tracking-[0.12em] text-[#1552f6]">{item.label}</p><div className="mt-2 flex items-center justify-between gap-2"><h3 className="text-lg font-extrabold tracking-tight">{item.title}</h3><ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div><p className="mt-2 text-sm leading-6 text-[#627089]">{item.description}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
);
}
