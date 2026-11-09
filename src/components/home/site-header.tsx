import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { navigation } from "./navigation";

export function Brand() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-3" aria-label="Uikit home">
      <span className="relative grid size-10 place-items-center overflow-hidden rounded-[13px] bg-[#1552f6] text-xl font-black text-white shadow-[0_8px_18px_rgba(21,82,246,0.15)]">
        U
        <span className="absolute -right-2 -top-2 size-5 rounded-full bg-[#8ef0bf]" />
      </span>
      <span className="text-[23px] font-extrabold tracking-[-0.075em] text-[#111a35]">
        Uikit<span className="text-[#1552f6]">.</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8eaf0] bg-[#fffdfa]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 xl:px-12">
        <Brand />

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-[#34415d] transition-colors hover:text-[#1552f6]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/playground"
            className="rounded-xl border border-[#d8dfeb] bg-white px-4 py-2.5 text-sm font-semibold text-[#19243e] transition-colors hover:border-[#1552f6]"
          >
            Playground
          </Link>
          <Link
            href="/components"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1552f6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0b3ed2]"
          >
            Explore library <ArrowUpRight size={17} />
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#d9e0eb] bg-white text-[#15213d] [&::-webkit-details-marker]:hidden" aria-label="Open navigatiemenu">
            <Menu size={21} aria-hidden="true" />
          </summary>
          <nav aria-label="Mobiele navigatie" className="absolute right-0 top-12 z-50 flex w-56 flex-col gap-1 rounded-2xl border border-[#e3e7ee] bg-white p-2 shadow-xl">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-lg px-4 py-3 text-sm font-semibold hover:bg-[#eef4ff]">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
