"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Check, Code2, Copy, Eye, Layers3 } from "lucide-react";
import { getStarterKit } from "@/lib/starter-kits";

// Alleen voor de geïsoleerde live preview gebruiken we de Tailwind Browser CDN.
// De bezoekers kopiëren normaal de losse HTML met Tailwind-classes.
function makePreviewDocument(html: string) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="flex min-h-screen items-start justify-center bg-white p-5 sm:p-8">
${html}
</body>
</html>`;
}

export default function KitDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const kit = getStarterKit(slug);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "one" | "all" | "error">("idle");

  if (!kit) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-3xl font-black">Deze kit bestaat niet</h1>
        <Link href="/starter-kits" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#2454f4]">
          <ArrowLeft size={17} /> Naar alle kits
        </Link>
      </main>
    );
  }

  const active = kit.examples.find((example) => example.id === selectedId) ?? kit.examples[0];

  async function copyText(value: string, kind: "one" | "all") {
    try {
      await navigator.clipboard.writeText(value);
      setCopyState(kind);
    } catch {
      setCopyState("error");
    }
  }

  function combinedHtml() {
    const content = kit!.examples
      .map((example) => `<!-- ${example.title} -->\n${example.html.trim()}`)
      .join("\n\n");
    return makePreviewDocument(content);
  }

  return (
    <main className="mx-auto max-w-[1500px] px-5 pb-20 pt-10 text-[#14213b] sm:px-8 lg:px-12">
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-[#68768e]">
        <Link href="/starter-kits" className="hover:text-[#2454f4]">Starter Kits</Link>
        <span>/</span>
        <span className="font-semibold text-[#14213b]">{kit.title}</span>
      </nav>

      <header className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e4f9eb] px-4 py-2 text-xs font-bold text-[#13865a]">
            <Layers3 size={15} /> HTML + Tailwind
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            {kit.title}<span className="text-[#2454f4]">.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-[#61718a]">{kit.description}</p>
        </div>
        <button
          type="button"
          disabled={kit.examples.length === 0}
          onClick={() => copyText(combinedHtml(), "all")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#2454f4] px-5 py-3 text-sm font-bold text-white hover:bg-[#113bd1] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copyState === "all" ? <Check size={17} /> : <Copy size={17} />}
          {copyState === "all" ? "Gekopieerd" : "Kopieer volledige kit"}
        </button>
      </header>

      <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_370px]">
        <aside className="self-start rounded-2xl border border-[#e1e7f0] bg-white p-4 lg:sticky lg:top-6">
          <div className="mb-4 flex items-center justify-between px-2">
            <h2 className="font-bold">Voorbeelden</h2>
            <span className="rounded-lg bg-[#eef3ff] px-2 py-1 text-xs font-bold text-[#2454f4]">{kit.examples.length}</span>
          </div>
          {kit.examples.length ? (
            <div className="space-y-2">
              {kit.examples.map((example) => (
                <button
                  key={example.id}
                  type="button"
                  onClick={() => { setSelectedId(example.id); setCopyState("idle"); }}
                  aria-pressed={active?.id === example.id}
                  className={`w-full rounded-xl p-3 text-left text-sm transition-colors ${
                    active?.id === example.id
                      ? "bg-[#eaf0ff] font-bold text-[#2454f4]"
                      : "text-[#52647d] hover:bg-[#f5f7fb]"
                  }`}
                >
                  <span className="block">{example.title}</span>
                  <span className="mt-1 block text-xs font-normal opacity-75">{example.description}</span>
                </button>
              ))}
            </div>
          ) : <p className="p-3 text-sm text-[#6e7c91]">Nog geen voorbeelden toegevoegd.</p>}
        </aside>

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e1e7f0] bg-white">
          <div className="flex items-center justify-between border-b border-[#e1e7f0] px-5 py-4">
            <h2 className="inline-flex items-center gap-2 font-bold"><Eye size={18} className="text-[#2454f4]" /> Live preview</h2>
            <span className="rounded-full bg-[#e3faed] px-3 py-1 text-xs font-bold text-[#10865c]">Preview</span>
          </div>
          <div className="min-h-[420px] bg-[#f5f8fc] p-4 sm:p-6">
            {active ? (
              <iframe
                key={active.id}
                title={`${active.title} preview`}
                srcDoc={makePreviewDocument(active.html)}
                sandbox="allow-scripts"
                referrerPolicy="no-referrer"
                className="h-[420px] w-full rounded-xl border border-[#e1e7f0] bg-white"
              />
            ) : (
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#cad5e5] bg-white p-7 text-center">
                <Layers3 size={32} className="text-[#92a5c4]" />
                <h3 className="mt-3 font-bold">Deze kit is nog leeg</h3>
                <p className="mt-2 max-w-sm text-sm text-[#6c7c92]">
                  Voeg een HTML-voorbeeld toe in src/lib/starter-kits.ts.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e1e7f0] bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-[#e1e7f0] px-5 py-4">
            <h2 className="inline-flex items-center gap-2 font-bold"><Code2 size={18} className="text-[#2454f4]" /> HTML + Tailwind</h2>
            <span className="rounded-lg bg-[#edf3ff] px-2.5 py-1 text-xs font-bold text-[#2454f4]">HTML</span>
          </div>
          <div className="p-4">
            <p className="mb-3 text-sm text-[#64748b]">Kopieer de code direct naar je eigen project.</p>
            <div className="overflow-hidden rounded-xl bg-[#1d293d]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-xs text-[#b9c9e3]">component.html</span>
                <button
                  type="button"
                  disabled={!active}
                  onClick={() => active && copyText(active.html.trim(), "one")}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/20 disabled:opacity-40"
                >
                  {copyState === "one" ? <Check size={14} /> : <Copy size={14} />}
                  {copyState === "one" ? "Gekopieerd" : "Copy"}
                </button>
              </div>
              <pre className="max-h-[480px] min-h-[300px] overflow-auto p-4 text-xs leading-6 text-[#d9e6fc]"><code>{active?.html.trim() ?? "<!-- Nog geen HTML toegevoegd -->"}</code></pre>
            </div>
            <p aria-live="polite" className="mt-3 text-xs text-[#66768d]">
              {copyState === "error" ? "Kopiëren mislukt. Controleer je browserrechten." : "De code gebruikt Tailwind CSS-classes."}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
