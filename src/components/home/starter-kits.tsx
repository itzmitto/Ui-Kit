import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Layers3 } from "lucide-react";

type PreviewVariant = "buttons" | "dashboard" | "landing";

const starters = [
  {
    label: "01 / COMPONENTS",
    title: "Buttons Starter",
    description: "Buttons, hover effects and reusable interactions.",
    href: "/starter-kits/buttons",
    background: "bg-[#eaf5ff]",
    preview: "buttons",
  },
  {
    label: "02 / APPLICATION",
    title: "Dashboard Starter",
    description: "A clean structure for dashboards and tools.",
    href: "/starter-kits",
    background: "bg-[#ecf9f0]",
    preview: "dashboard",
  },
  {
    label: "03 / WEBSITE",
    title: "Landing Page Starter",
    description: "Modern layouts for websites and products.",
    href: "/starter-kits",
    background: "bg-[#fff1e5]",
    preview: "landing",
  },
] as const;

function StarterPreview({ variant }: { variant: PreviewVariant }) {
  return (
    <div className="relative flex h-[190px] items-end overflow-hidden rounded-[18px] border border-white/70 bg-white/65 p-4 shadow-sm">
      <div className="absolute -right-5 -top-6 size-36 rounded-full bg-white/60" />

      <div className="relative w-full overflow-hidden rounded-xl border border-[#e2e8f1] bg-white shadow-[0_12px_28px_rgba(27,48,79,0.12)]">
        <div className="flex h-7 items-center gap-1.5 border-b border-[#edf0f5] px-3">
          <span className="size-2 rounded-full bg-[#ff8b83]" />
          <span className="size-2 rounded-full bg-[#f5c45e]" />
          <span className="size-2 rounded-full bg-[#70d9aa]" />
        </div>

        <div className="h-[110px] p-4">
          {variant === "buttons" && (
            <div className="flex h-full flex-col justify-center gap-3">
              <div className="h-2 w-1/3 rounded bg-[#dce4ee]" />

              <div className="flex gap-2">
                <div className="h-9 w-24 rounded-lg bg-[#1552f6]" />
                <div className="h-9 w-24 rounded-lg border border-[#dce4ee] bg-white" />
              </div>

              <div className="flex gap-2">
                <div className="h-6 w-20 rounded-full bg-[#bde8d2]" />
                <div className="h-6 w-16 rounded-full bg-[#ffe2b9]" />
              </div>
            </div>
          )}

          {variant === "dashboard" && (
            <div className="flex h-full gap-3">
              <div className="w-[24%] space-y-2 rounded-md bg-[#eff4ff] p-2">
                <div className="h-2 rounded bg-[#1552f6]" />
                <div className="h-2 rounded bg-[#cdd9ed]" />
                <div className="h-2 rounded bg-[#cdd9ed]" />
              </div>

              <div className="flex-1">
                <div className="mb-3 h-3 w-2/3 rounded bg-[#1d2b49]" />

                <div className="flex h-[60px] items-end gap-2 rounded-lg bg-[#f4f7fc] p-2">
                  {[45, 75, 55, 95, 70].map((height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t bg-[#1552f6]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {variant === "landing" && (
            <div className="flex h-full gap-3">
              <div className="flex-1 space-y-2 pt-2">
                <div className="h-3 w-[85%] rounded bg-[#1d2b49]" />
                <div className="h-3 w-[65%] rounded bg-[#1d2b49]" />
                <div className="mt-2 h-2 w-[90%] rounded bg-[#dce4ee]" />
                <div className="h-2 w-[75%] rounded bg-[#dce4ee]" />
                <div className="mt-3 h-5 w-[52%] rounded bg-[#1552f6]" />
              </div>

              <div className="w-[38%] rounded-lg bg-[#9bcff7]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function HomeStarterKits() {
  return (
    <section
      id="starter-kits"
      className="border-y border-[#e9edf2] bg-[#f7f9fc] py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-12">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1552f6]">
              START FROM A FOUNDATION
            </p>

            <h2 className="text-3xl font-extrabold tracking-[-0.055em] sm:text-4xl">
              Starter kits, your rules
              <span className="text-[#1552f6]">.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#657189] sm:text-base">
              Explore reusable UI collections with HTML and Tailwind CSS.
            </p>
          </div>

          <Link
            href="/starter-kits"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1552f6] hover:underline"
          >
            Browse starter kits
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {starters.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[24px] border border-[#e5e9ef] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfd0ff] hover:shadow-[0_16px_32px_rgba(29,65,126,0.08)]"
            >
              <div className={`rounded-[18px] p-3 ${item.background}`}>
                <StarterPreview variant={item.preview} />
              </div>

              <div className="px-2 pb-2 pt-6">
                <p className="text-[11px] font-bold tracking-[0.12em] text-[#1552f6]">
                  {item.label}
                </p>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <h3 className="text-lg font-extrabold tracking-tight">
                    {item.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <p className="mt-2 text-sm leading-6 text-[#627089]">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#edf0f5] pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#657189]">
                    <Code2 size={15} />
                    HTML + Tailwind
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1552f6]">
                    <Layers3 size={14} />
                    View kit
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
