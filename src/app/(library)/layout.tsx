import type { ReactNode } from "react";
import { SiteHeader } from "@/components/cutkit/site-header";

export default function LibraryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fffdf9] text-[#111936]">
      <SiteHeader />
      {children}
      <footer className="mt-20 border-t border-[#e8ebf1]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-[#69778e] sm:px-8 lg:px-12">
          <span><strong className="text-[#111936]">Cutkit</strong> · UI Components Library</span>
          <span>Layouts klaar. Componenten maak jij zelf.</span>
        </div>
      </footer>
    </div>
  );
}
