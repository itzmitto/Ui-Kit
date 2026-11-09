import Link from "next/link";
import { Brand } from "./site-header";
import { navigation } from "./navigation";

export function SiteFooter() {
return (
<footer className="border-t border-[#e9edf2] bg-[#fffdfa]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between xl:px-12"><div className="flex items-center gap-3"><Brand /><span className="hidden text-xs text-[#8894a5] sm:inline">A home for your components.</span></div><nav aria-label="Footer navigatie" className="flex flex-wrap gap-5 text-xs font-semibold text-[#5d6b82]">{navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-[#1552f6]">{item.label}</Link>)}</nav></div>
      </footer>
);
}
