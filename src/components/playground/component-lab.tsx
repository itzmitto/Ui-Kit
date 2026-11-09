"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  Layers3,
  Monitor,
  MousePointer2,
  PanelLeft,
  RotateCcw,
  Search,
  Settings2,
  Smartphone,
  Tablet,
  WandSparkles,
} from "lucide-react";
import { SampleButton, type ButtonSize, type ButtonVariant } from "./sample-button";
import { sampleButtonCss, sampleButtonTsx } from "./sample-sources";
import styles from "./playground.module.css";

type CategoryId = "buttons" | "cards" | "forms" | "navigation" | "modals" | "alerts";
type Device = "desktop" | "tablet" | "mobile";
type CodeTab = "usage" | "component" | "css";

const categories: {
  id: CategoryId;
  label: string;
  description: string;
  file: string;
}[] = [
  { id: "buttons", label: "Buttons", description: "Klikbare acties", file: "src/components/ui/button.tsx" },
  { id: "cards", label: "Cards", description: "Contentblokken", file: "src/components/ui/card.tsx" },
  { id: "forms", label: "Forms", description: "Velden en validatie", file: "src/components/ui/form.tsx" },
  { id: "navigation", label: "Navigation", description: "Menu's en tabs", file: "src/components/ui/navigation.tsx" },
  { id: "modals", label: "Modals", description: "Dialogen", file: "src/components/ui/modal.tsx" },
  { id: "alerts", label: "Alerts", description: "Meldingen", file: "src/components/ui/alert.tsx" },
];

const deviceWidths: Record<Device, string> = {
  desktop: "100%",
  tablet: "640px",
  mobile: "340px",
};

const codeTabs: { id: CodeTab; label: string }[] = [
  { id: "usage", label: "Gebruik" },
  { id: "component", label: "TSX" },
  { id: "css", label: "CSS" },
];

export function ComponentLab() {
  const [category, setCategory] = useState<CategoryId>("buttons");
  const [search, setSearch] = useState("");
  const [device, setDevice] = useState<Device>("desktop");
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [size, setSize] = useState<ButtonSize>("md");
  const [radius, setRadius] = useState(12);
  const [disabled, setDisabled] = useState(false);
  const [codeTab, setCodeTab] = useState<CodeTab>("usage");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const [notice, setNotice] = useState("");

  const activeCategory = categories.find((item) => item.id === category)!;
  const visibleCategories = categories.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()),
  );

  const usageCode = `import { SampleButton } from "@/components/playground/sample-button";\n\n<SampleButton\n  variant="${variant}"\n  size="${size}"\n  radius={${radius}}\n  disabled={${disabled}}\n  onClick={() => console.log("Clicked!")}\n>\n  Test button\n</SampleButton>`;

  const emptyCode = `// Bouw jouw ${activeCategory.label}-component in:\n// ${activeCategory.file}\n\n// Importeer daarna je component in:\n// src/components/playground/component-lab.tsx\n\n// Vervang de lege preview door jouw eigen component.`;

  const displayedCode = category !== "buttons"
    ? emptyCode
    : codeTab === "usage"
      ? usageCode
      : codeTab === "component"
        ? sampleButtonTsx
        : sampleButtonCss;

  function resetSettings() {
    setDevice("desktop");
    setVariant("primary");
    setSize("md");
    setRadius(12);
    setDisabled(false);
    setNotice("");
    setCopyStatus("idle");
    setCodeTab("usage");
  }

  async function copyCurrentCode() {
    try {
      await navigator.clipboard.writeText(displayedCode);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-[1580px] px-4 pb-20 pt-9 text-[#101a38] sm:px-8 lg:px-10">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#71809a]">
        <Link href="/components" className="inline-flex items-center gap-1 hover:text-[#1546ff]">
          <ArrowLeft size={14} /> Components
        </Link>
        <ChevronRight size={14} />
        <span className="text-[#101a38]">Component Lab</span>
      </div>

      <section className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ddf9e8] px-4 py-2 text-xs font-bold text-[#087b56]">
            <WandSparkles size={15} /> TESTOMGEVING
          </div>
          <h1 className="text-4xl font-black tracking-[-0.055em] sm:text-5xl">Component Lab<span className="text-[#1546ff]">.</span></h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64738c] sm:text-base">
            Test de opmaak van je eigen componenten. Links kies je een soort UI, in het midden zie je de preview en rechts pas je instellingen en code aan.
          </p>
        </div>
        <button
          type="button"
          onClick={resetSettings}
          className="inline-flex items-center gap-2 rounded-xl border border-[#d9e1ec] bg-white px-4 py-3 text-sm font-bold transition hover:bg-[#f2f6ff]"
        >
          <RotateCcw size={16} /> Reset test
        </button>
      </section>

      <section className="grid items-start gap-4 lg:grid-cols-[220px_minmax(0,1fr)] 2xl:grid-cols-[220px_minmax(0,1fr)_365px]">
        {/* Linker kolom: kies welk component je wilt oefenen. */}
        <aside className="rounded-[22px] border border-[#e1e6ee] bg-white p-4 shadow-[0_5px_22px_#1b335009]">
          <div className="mb-4 flex items-center gap-2 font-extrabold"><Layers3 size={18} className="text-[#1546ff]" /> Componenten</div>
          <label className="mb-5 flex items-center gap-2 rounded-xl border border-[#dee5ef] bg-[#f9fbff] px-3 py-2.5">
            <Search size={16} className="shrink-0 text-[#8997aa]" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Zoek een type..."
              className="min-w-0 w-full bg-transparent text-xs outline-none placeholder:text-[#9aa6b8]"
              aria-label="Zoek componenttypen"
            />
          </label>
          <nav aria-label="Componenttypen" className="space-y-1">
            {visibleCategories.map((item) => {
              const isActive = item.id === category;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => { setCategory(item.id); setNotice(""); setCopyStatus("idle"); }}
                  aria-pressed={isActive}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                    isActive ? "bg-[#e9efff] text-[#1546ff]" : "text-[#63718a] hover:bg-[#f6f8fc] hover:text-[#182340]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === "buttons" ? (
                    <span className="rounded-md bg-[#d9f9e7] px-2 py-1 text-[10px] font-bold text-[#087953]">Demo</span>
                  ) : (
                    <span className="size-1.5 rounded-full bg-[#c2ccd9]" />
                  )}
                </button>
              );
            })}
            {visibleCategories.length === 0 && (
              <p className="px-3 py-4 text-xs text-[#8190a5]">Geen categorie gevonden.</p>
            )}
          </nav>
          <div className="mt-6 rounded-xl border border-[#e0f4e8] bg-[#f0fcf5] p-4">
            <p className="text-xs font-extrabold text-[#126649]">Van jou, niet van een UI-library</p>
            <p className="mt-2 text-xs leading-5 text-[#537465]">Alleen Buttons heeft nu één testvoorbeeld. De rest vul jij zelf in.</p>
          </div>
        </aside>

        {/* Middelste kolom: live demo en preview canvas. */}
        <section className="min-w-0 overflow-hidden rounded-[22px] border border-[#e1e6ee] bg-white shadow-[0_5px_22px_#1b335009]" aria-label="Live componentpreview">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9edf3] p-4 sm:px-5">
            <div className="flex items-center gap-2 text-sm font-extrabold">
              <span className="size-2.5 rounded-full bg-[#20d37b]" /> Preview
              <span className="ml-2 rounded-full bg-[#f1f5fb] px-2.5 py-1 text-[10px] font-semibold text-[#697b94]">{activeCategory.label}</span>
            </div>
            <div className="flex items-center gap-1 rounded-xl border border-[#e2e7ef] bg-[#f9fbff] p-1" aria-label="Previewformaat">
              {([
                ["desktop", Monitor, "Desktop"],
                ["tablet", Tablet, "Tablet"],
                ["mobile", Smartphone, "Mobiel"],
              ] as const).map(([value, Icon, label]) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => setDevice(value)}
                  aria-label={label}
                  title={label}
                  aria-pressed={device === value}
                  className={`grid size-9 place-items-center rounded-lg transition ${device === value ? "bg-[#1546ff] text-white" : "text-[#7b8ba3] hover:bg-white"}`}
                >
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>

          <div className={`${styles.canvas} min-h-[465px] overflow-x-auto px-4 py-10 sm:px-6 sm:py-14`}>
            <div className={styles.previewSurface} style={{ width: deviceWidths[device], minWidth: device === "mobile" ? 260 : undefined }}>
              {category === "buttons" ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center gap-6 p-6 text-center sm:min-h-[350px]">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#e6faef] px-3 py-1.5 text-[11px] font-bold text-[#13865c]">
                    <MousePointer2 size={13} /> Werkend testvoorbeeld
                  </div>
                  <SampleButton
                    variant={variant}
                    size={size}
                    radius={radius}
                    disabled={disabled}
                    onClick={() => setNotice("De onClick van jouw testbutton werkt!")}
                  >
                    Test button <ChevronRight size={16} />
                  </SampleButton>
                  <p className="max-w-xs text-xs leading-6 text-[#8190a6]">Verander rechts de variant, grootte en afronding. Klik op de knop om de interactie te testen.</p>
                  <p className="min-h-5 text-xs font-semibold text-[#088657]" role="status" aria-live="polite">{notice}</p>
                </div>
              ) : (
                <div className="flex min-h-[350px] flex-col items-center justify-center px-6 py-12 text-center">
                  <div className="mb-5 grid size-16 place-items-center rounded-2xl border border-dashed border-[#aabdf3] bg-[#eaf1ff] text-[#1546ff]"><PanelLeft size={26} /></div>
                  <h2 className="text-xl font-black">Jouw {activeCategory.label} komen hier</h2>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#77869e]">Dit is bewust nog leeg. Maak een eigen component en importeer die op deze plek.</p>
                  <code className="mt-5 max-w-full break-all rounded-lg bg-[#f2f5fa] px-3 py-2 text-[11px] text-[#4d6386]">{activeCategory.file}</code>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e9edf3] px-5 py-4 text-xs text-[#718098]">
            <span>{device === "desktop" ? "Desktop" : device === "tablet" ? "Tablet · 640px" : "Mobiel · 340px"} · live voorbeeld</span>
            <span className="inline-flex items-center gap-1.5 text-[#0b9461]"><Check size={14} /> Lokale testomgeving</span>
          </div>
        </section>

        {/* Rechter kolom: instellingen + werkende copy-codeknop. */}
        <aside className="min-w-0 space-y-4 lg:col-start-2 2xl:col-auto">
          <div className="rounded-[22px] border border-[#e1e6ee] bg-white p-5 shadow-[0_5px_22px_#1b335009]">
            <h2 className="flex items-center gap-2 text-base font-black"><Settings2 size={19} className="text-[#1546ff]" /> Instellingen</h2>
            <p className="mt-2 text-xs leading-6 text-[#78879c]">{category === "buttons" ? "Deze instellingen veranderen de button direct." : "Zodra je dit component zelf bouwt, kun je hier je eigen instellingen koppelen."}</p>
            {category === "buttons" ? (
              <div className="mt-5 space-y-5">
                <label className="block text-xs font-bold">
                  Variant
                  <select value={variant} onChange={(event) => { setVariant(event.target.value as ButtonVariant); setNotice(""); }} className="mt-2 block w-full rounded-xl border border-[#dce4f0] bg-[#f9fbff] px-3 py-3 text-sm font-medium outline-[#1546ff]">
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="outline">Outline</option>
                  </select>
                </label>
                <div>
                  <span className="mb-2 block text-xs font-bold">Grootte</span>
                  <div className="grid grid-cols-3 gap-1 rounded-xl border border-[#e0e6f0] bg-[#f5f7fb] p-1">
                    {(["sm", "md", "lg"] as const).map((value) => (
                      <button type="button" key={value} onClick={() => setSize(value)} aria-pressed={size === value} className={`rounded-lg py-2 text-xs font-bold transition ${size === value ? "bg-[#1546ff] text-white" : "text-[#66758d] hover:bg-white"}`}>
                        {{ sm: "Small", md: "Medium", lg: "Large" }[value]}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="block text-xs font-bold">
                  <span className="flex justify-between"><span>Afgeronde hoeken</span><span className="font-mono text-[#1546ff]">{radius}px</span></span>
                  <input type="range" min={0} max={28} step={2} value={radius} onChange={(event) => setRadius(Number(event.target.value))} className="mt-3 w-full accent-[#1546ff]" />
                </label>
                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[#e3e8f0] px-3 py-3 text-xs font-bold">
                  Disabled
                  <input type="checkbox" checked={disabled} onChange={(event) => { setDisabled(event.target.checked); setNotice(""); }} className="size-4 accent-[#1546ff]" />
                </label>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-dashed border-[#ccd7e9] bg-[#f9fbff] p-4 text-xs leading-6 text-[#78879b]">
                Props, varianten en tokens komen hier zodra jij je {activeCategory.label}-component hebt gemaakt.
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-[22px] border border-[#23344f] bg-[#1d2a40] text-white shadow-[0_12px_30px_#1b335018]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-4">
              <span className="inline-flex items-center gap-2 text-sm font-bold"><Code2 size={17} className="text-[#88c7ff]" /> Code</span>
              <button type="button" onClick={copyCurrentCode} className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-[#d8e9ff] hover:bg-white/10">
                {copyStatus === "copied" ? <Check size={14} /> : <Copy size={14} />}
                {copyStatus === "copied" ? "Gekopieerd" : copyStatus === "error" ? "Niet gelukt" : "Kopieer code"}
              </button>
            </div>
            <div className="flex gap-1 border-b border-white/10 px-3 py-2" aria-label="Codeformaat">
              {codeTabs.map((tab) => (
                <button key={tab.id} type="button" onClick={() => { setCodeTab(tab.id); setCopyStatus("idle"); }} aria-pressed={codeTab === tab.id} className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${codeTab === tab.id ? "bg-[#324968] text-white" : "text-[#9aafc9] hover:bg-white/5"}`}>{tab.label}</button>
              ))}
            </div>
            <pre className={`${styles.codeScroll} max-h-80 overflow-auto p-4 font-mono text-[11px] leading-6 text-[#adddf6]`}><code>{displayedCode}</code></pre>
            <div className="border-t border-white/10 px-4 py-3 text-[11px] leading-5 text-[#a3b6d0]">
              {category === "buttons" ? "Demo-code. Voor hergebruik heb je ook sample-button.module.css nodig." : "Deze code is een startinstructie. Jij vult de echte component in."}
            </div>
          </div>
          <Link href="/components/buttons" className="flex items-center justify-between rounded-xl border border-[#dce5f0] bg-[#eef4ff] px-4 py-3 text-xs font-bold text-[#1546ff] hover:bg-[#e4edff]">Bekijk de Buttons-layout <ExternalLink size={15} /></Link>
        </aside>
      </section>

      <section className="mt-6 rounded-[22px] border border-[#e1e6ee] bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-black">Design tokens</h2>
            <p className="mt-1 text-xs text-[#78879c]">Kleuren en standaardafstanden voor je eigen UI-kit.</p>
          </div>
          <div className="flex items-center gap-2">
            {["#1546ff", "#b5f5d4", "#ffb15c", "#fffdf9", "#111936"].map((color) => (
              <span key={color} title={color} className="size-9 rounded-lg border border-[#dce3ec]" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
