import { Code2, Layers3 } from "lucide-react";

type PreviewSlotProps = {
  title: string;
  description?: string;
  className?: string;
  compact?: boolean;
};

/** Alleen een lege layoutplek. Voeg hier later je EIGEN component toe. */
export function PreviewSlot({ title, description = "Hier komt jouw eigen UI-component.", className = "", compact = false }: PreviewSlotProps) {
  return (
    <div className={`relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[18px] border border-dashed border-[#cbd8e8] bg-[#f8faff] text-center ${compact ? "min-h-36 p-4" : "min-h-72 p-8"} ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(#dfe7f244 1px,transparent 1px),linear-gradient(90deg,#dfe7f244 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
      <span className="relative mb-3 grid size-12 place-items-center rounded-2xl border border-[#dfe7f3] bg-white text-[#1546ff] shadow-sm">
        {compact ? <Layers3 size={21} /> : <Code2 size={24} />}
      </span>
      <strong className="relative text-sm font-bold text-[#17213c]">{title}</strong>
      <p className="relative mt-1 max-w-xs text-xs leading-relaxed text-[#718099]">{description}</p>
    </div>
  );
}
