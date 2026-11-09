import { FileCode2, Grid2X2, Layers3, MousePointer2 } from "lucide-react";

const features = [
  {
    title: "Made to explore",
    description: "A clear place to browse every component you create.",
    icon: Grid2X2,
    background: "bg-[#edf4ff]",
    iconColor: "text-[#1552f6]",
  },
  {
    title: "Preview the details",
    description: "Give each component its own preview and documentation.",
    icon: MousePointer2,
    background: "bg-[#eaf9ef]",
    iconColor: "text-[#079c68]",
  },
  {
    title: "Show the code",
    description: "Keep examples readable and easy to copy later.",
    icon: FileCode2,
    background: "bg-[#fff2e4]",
    iconColor: "text-[#e88628]",
  },
  {
    title: "Build your own kits",
    description: "Group your components into complete starter layouts.",
    icon: Layers3,
    background: "bg-[#f2f0ff]",
    iconColor: "text-[#6f65cb]",
  },
];

export function HomeFeatures() {
return (
<section aria-label="Waarom Uikit" className="mx-auto grid max-w-[1440px] gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 xl:px-12">
          {features.map(({ title, description, icon: Icon, background, iconColor }) => (
            <article key={title} className={`flex min-h-40 gap-4 rounded-[22px] p-6 ${background}`}>
              <span className="shrink-0"><Icon size={29} strokeWidth={1.8} className={iconColor} /></span>
              <div><h2 className="text-[15px] font-extrabold tracking-tight">{title}</h2><p className="mt-2 text-[13px] leading-6 text-[#56647b]">{description}</p></div>
            </article>
          ))}
        </section>
);
}
