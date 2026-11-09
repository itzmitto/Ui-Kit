"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Check, Code2, Copy, Eye, Layers3 } from "lucide-react";

import { getStarterKit } from "@/lib/starter-kits";

// Bouwt een volledig HTML-document voor de preview.
// Tailwind Browser CDN wordt alleen voor het testen gebruikt.
function createHtmlDocument(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <title>UI Kit Preview</title>
</head>
<body class="min-h-screen bg-white p-6">
  ${content}
</body>
</html>`;
}

export default function StarterKitDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const kit = getStarterKit(slug);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState("");

  // Bestaat deze Starter Kit niet?
  if (!kit) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">Starter Kit not found</h1>

        <p className="mt-4 text-[#64748b]">
          This starter kit does not exist yet.
        </p>

        <Link
          href="/starter-kits"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1546ff] px-6 py-3 font-semibold text-white"
        >
          <ArrowLeft size={18} />
          Back to Starter Kits
        </Link>
      </main>
    );
  }

  const activeExample = kit.examples[selectedIndex] ?? kit.examples[0];

  // Kopieert de gekozen HTML + Tailwind-code.
  async function copyCode(code: string, type: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(type);
    } catch {
      setCopied("error");
    }
  }

  // Alle voorbeelden combineren tot één HTML-bestand.
  function getCompleteKitCode() {
    if (!kit) return "";

    const content = kit.examples
      .map((example) => {
        return `<!-- ${example.title} -->\n${example.html}`;
      })
      .join("\n\n");

    return createHtmlDocument(content);
  }

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#111936]">
      <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-[#64748b]">
          <Link
            href="/starter-kits"
            className="transition-colors hover:text-[#1546ff]"
          >
            Starter Kits
          </Link>

          <span>/</span>
          <span className="font-semibold text-[#111936]">{kit.title}</span>
        </div>

        {/* Page header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#defbe9] px-4 py-2 text-xs font-bold text-[#087a50]">
              <Layers3 size={15} />
              HTML + Tailwind CSS
            </div>

            <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              {kit.title}
              <span className="text-[#1546ff]">.</span>
            </h1>

            <p className="mt-4 max-w-xl text-[#64748b]">{kit.description}</p>
          </div>

          <button
            type="button"
            disabled={kit.examples.length === 0}
            onClick={() => copyCode(getCompleteKitCode(), "all")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1546ff] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0033dc] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {copied === "all" ? <Check size={18} /> : <Copy size={18} />}

            {copied === "all" ? "Copied!" : "Copy Complete Kit"}
          </button>
        </div>

        {/* Main kit workspace */}
        <div className="grid gap-5 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)_380px]">
          {/* Left: UI component list */}
          <aside className="self-start rounded-2xl border border-[#e4e9f1] bg-white p-4 lg:sticky lg:top-6">
            <div className="mb-5 flex items-center justify-between px-2">
              <h2 className="font-bold">Components</h2>
              <span className="rounded-lg bg-[#eff4ff] px-2 py-1 text-xs font-semibold text-[#1546ff]">
                {kit.examples.length}
              </span>
            </div>

            {kit.examples.length > 0 ? (
              <div className="space-y-2">
                {kit.examples.map((example, index) => (
                  <button
                    key={example.id}
                    type="button"
                    onClick={() => {
                      setSelectedIndex(index);
                      setCopied("");
                    }}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                      activeExample?.id === example.id
                        ? "bg-[#eaf0ff] font-bold text-[#1546ff]"
                        : "text-[#52617a] hover:bg-[#f5f7fb]"
                    }`}
                  >
                    <span className="block">{example.title}</span>
                    <span className="mt-1 block text-xs font-normal opacity-70">
                      {example.description}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-[#f7f9fc] p-4 text-sm text-[#64748b]">
                No components added yet.
              </div>
            )}
          </aside>

          {/* Center: Live preview */}
          <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e4e9f1] bg-white">
            <div className="flex items-center justify-between border-b border-[#e4e9f1] px-5 py-4">
              <div className="flex items-center gap-2 font-bold">
                <Eye size={18} className="text-[#1546ff]" />
                Live Preview
              </div>

              <span className="rounded-full bg-[#e8faf0] px-3 py-1 text-xs font-semibold text-[#078653]">
                Preview
              </span>
            </div>

            <div className="preview-grid min-h-[430px] p-4 sm:p-6">
              {activeExample ? (
                <iframe
                  key={activeExample.id}
                  title={`${activeExample.title} preview`}
                  srcDoc={createHtmlDocument(activeExample.html)}
                  sandbox="allow-scripts"
                  className="h-[400px] w-full rounded-xl border border-[#e5e9f0] bg-white shadow-sm"
                />
              ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#cbd5e1] bg-white/80 p-8 text-center">
                  <Layers3 size={40} className="mb-4 text-[#94a3b8]" />

                  <h3 className="text-xl font-bold">No components yet</h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#64748b]">
                    Add your own HTML and Tailwind component to
                    src/lib/starter-kits.ts.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Right: HTML + Tailwind code */}
          <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e4e9f1] bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-[#e4e9f1] px-5 py-4">
              <div className="flex items-center gap-2 font-bold">
                <Code2 size={18} className="text-[#1546ff]" />
                Source Code
              </div>

              <span className="rounded-lg bg-[#eff4ff] px-3 py-1 text-xs font-semibold text-[#1546ff]">
                HTML
              </span>
            </div>

            <div className="p-4">
              <p className="mb-4 text-sm text-[#64748b]">
                HTML with Tailwind CSS classes.
              </p>

              <div className="overflow-hidden rounded-xl bg-[#172338]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="text-xs text-[#c7d6ef]">component.html</span>

                  <button
                    type="button"
                    disabled={!activeExample}
                    onClick={() =>
                      copyCode(activeExample?.html ?? "", "component")
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20 disabled:opacity-40"
                  >
                    {copied === "component" ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} />
                    )}

                    {copied === "component" ? "Copied!" : "Copy"}
                  </button>
                </div>

                <pre className="max-h-[500px] min-h-[300px] overflow-auto p-5 font-mono text-xs leading-6 text-[#dbeafe]">
                  <code>
                    {activeExample?.html.trim() ??
                      "<!-- No code available yet -->"}
                  </code>
                </pre>
              </div>

              <p aria-live="polite" className="mt-4 text-xs text-[#64748b]">
                {copied === "error"
                  ? "Copy failed. Check browser permissions."
                  : "Copy this code into a project using Tailwind CSS."}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
