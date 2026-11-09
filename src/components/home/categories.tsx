import Link from "next/link";
import { ArrowRight, ArrowUpRight, FormInput, Layers3, LayoutDashboard, MousePointer2, PanelTop, Table2 } from "lucide-react";

const categories = [
  {
    title: "Buttons",
    description: "Actions, variants and states.",
    icon: MousePointer2,
    href: "/components/buttons",
  },
  {
    title: "Cards",
    description: "Content and flexible layouts.",
    icon: Layers3,
    href: "/components",
  },
  {
    title: "Forms",
    description: "Inputs, validation and more.",
    icon: FormInput,
    href: "/components",
  },
  {
    title: "Navigation",
    description: "Menus, headers and tabs.",
    icon: PanelTop,
    href: "/components",
  },
  {
    title: "Tables",
    description: "Structured data displays.",
    icon: Table2,
    href: "/components",
  },
  {
    title: "Dashboards",
    description: "Layouts and app sections.",
    icon: LayoutDashboard,
    href: "/components",
  },
];

function CategoryThumbnail({ index }: { index: number }) {
  return (
    <div className="flex h-[124px] items-center justify-center overflow-hidden rounded-[15px] bg-[#f6f8fb] p-4">
      {index === 0 && (
        <div className="flex flex-wrap justify-center gap-2 text-[10px] font-bold">
          <span className="rounded-lg bg-[#1552f6] px-3 py-2.5 text-white">Primary</span>
          <span className="rounded-lg border border-[#d9e0eb] bg-white px-3 py-2.5">Secondary</span>
          <span className="rounded-lg bg-[#c5f5db] px-3 py-2.5 text-[#067a4e]">Success</span>
        </div>
      )}
      {index === 1 && (
        <div className="flex w-full items-center gap-3 rounded-xl border border-[#e3e8f0] bg-white p-3 shadow-sm">
          <div className="size-14 shrink-0 rounded-lg bg-gradient-to-br from-[#7fcfff] via-[#c0ebed] to-[#d2e9dd]" />
          <div className="w-full space-y-2"><div className="h-2 w-3/4 rounded bg-[#273951]" /><div className="h-2 w-full rounded bg-[#dfe6ef]" /><div className="h-2 w-2/3 rounded bg-[#dfe6ef]" /></div>
        </div>
      )}
      {index === 2 && (
        <div className="w-full max-w-[220px] space-y-2"><div className="text-[10px] font-semibold">Email address</div><div className="flex items-center gap-2 rounded-lg border border-[#dbe2eb] bg-white p-3 text-[10px] text-[#8793a7]"><span className="size-2 rounded-full border border-[#a7b4c6]" />you@example.com</div></div>
      )}
      {index === 3 && (
        <div className="flex w-full items-center justify-between gap-2 rounded-xl border border-[#e3e8f0] bg-white p-2.5 text-[10px] font-semibold"><span className="rounded-lg bg-[#eaf0ff] px-2 py-2 text-[#1552f6]">Home</span><span>Product</span><span>Docs</span></div>
      )}
      {index === 4 && (
        <div className="w-full rounded-xl border border-[#e3e8f0] bg-white p-3 text-[9px]"><div className="grid grid-cols-3 gap-2 border-b border-[#e6eaf1] pb-2 font-bold"><span>Name</span><span>Status</span><span>Plan</span></div><div className="mt-3 grid grid-cols-3 gap-2"><span>Alex</span><span className="text-[#098b57]">Active</span><span>Pro</span></div></div>
      )}
      {index === 5 && (
        <div className="flex w-full max-w-[190px] gap-2 rounded-xl border border-[#e3e8f0] bg-white p-3 shadow-sm"><div className="w-1/4 space-y-2 border-r border-[#e3e8f0] pr-2"><div className="h-2 rounded bg-[#1552f6]" /><div className="h-2 rounded bg-[#dae2ee]" /><div className="h-2 rounded bg-[#dae2ee]" /></div><div className="flex-1 space-y-2"><div className="h-5 rounded bg-[#eaf0ff]" /><div className="flex items-end gap-1.5"><div className="h-5 flex-1 rounded-t bg-[#9ac5ff]" /><div className="h-8 flex-1 rounded-t bg-[#1552f6]" /><div className="h-6 flex-1 rounded-t bg-[#66b9ed]" /></div></div></div>
      )}
    </div>
  );
}

export function HomeCategories() {
return (
<section id="components" className="mx-auto max-w-[1440px] scroll-mt-28 px-5 py-24 sm:px-8 xl:px-12">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div><p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1552f6]">THE LIBRARY</p><h2 className="text-3xl font-extrabold tracking-[-0.055em] sm:text-4xl">Explore by category<span className="text-[#1552f6]">.</span></h2><p className="mt-3 text-sm leading-6 text-[#657189] sm:text-base">Choose a category, then fill it with components you build.</p></div>
            <Link href="/components" className="inline-flex items-center gap-2 text-sm font-bold text-[#1552f6] hover:underline">View all components <ArrowRight size={17} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map(({ title, description, icon: Icon, href }, index) => (
              <Link href={href} key={title} className="group rounded-[22px] border border-[#e6e9f0] bg-white p-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#bed0fa] hover:shadow-[0_14px_28px_rgba(29,65,126,0.09)]">
                <CategoryThumbnail index={index} />
                <div className="px-2 pb-2 pt-5"><div className="flex items-center justify-between gap-2"><h3 className="text-base font-extrabold tracking-tight">{title}</h3><Icon size={18} className="text-[#1552f6]" /></div><p className="mt-2 min-h-10 text-xs leading-5 text-[#657189]">{description}</p><div className="mt-4 flex items-center justify-between border-t border-[#edf0f4] pt-3 text-[11px] font-bold text-[#61708a]"><span>Explore category</span><ArrowUpRight size={15} className="text-[#1552f6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div></div>
              </Link>
            ))}
          </div>
        </section>
);
}
