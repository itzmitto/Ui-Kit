"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/starter-kits", label: "Starter Kits" },
  { href: "/playground", label: "Playground" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9ecf2] bg-[#fffdf9]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Cutkit homepage">
          <span className="grid size-10 place-items-center rounded-[14px] bg-[#1546ff] text-[29px] font-black leading-none text-white shadow-[0_8px_18px_rgba(21,70,255,.15)]">C</span>
          <span className="text-[25px] font-black tracking-[-0.06em]">Cutkit</span>
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-8 lg:flex">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`text-sm font-semibold transition-colors hover:text-[#1546ff] ${active ? "text-[#1546ff]" : "text-[#17213c]"}`}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/playground" className="rounded-xl border border-[#d6dce7] bg-white px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#f1f5ff]">Playground</Link>
          <Link href="/components" className="inline-flex items-center gap-2 rounded-xl bg-[#1546ff] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0033dd]">Explore library <ArrowRight size={16} /></Link>
        </div>

        <button type="button" aria-label={menuOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="rounded-xl border border-[#d6dce7] bg-white p-2.5 lg:hidden">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobiele navigatie" className="flex flex-col gap-1 border-t border-[#e9ecf2] bg-white px-5 py-4 lg:hidden">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-[#eff4ff]">{label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
