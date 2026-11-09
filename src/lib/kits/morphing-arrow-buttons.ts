import type { KitExample } from "../starter-kits";

/**
 * MORPHING ARROW BUTTONS | UI-KIT
 *
 * Referentie: 08 – Morphing Arrow Button (Next / Continue / Explore More).
 * Elke rij uit de referentie heeft 2 varianten:
 *   - Default: ruststand, transformeert bij hover of keyboard focus.
 *   - Hover: dezelfde button, maar met de eindstijl altijd zichtbaar.
 *
 * Geen React of extra CSS nodig in de kitcode: alleen HTML + Tailwind v4.
 * We gebruiken de SVG-pijl inline, zodat bezoekers alleen HTML hoeven te kopiëren.
 * Icon-inspiratie: https://lucide.dev/icons/arrow-right (gratis, ISC/MIT).
 *
 * ZELF UITBREIDEN:
 * 1. Kopieer een object onderaan dit bestand.
 * 2. Kies een nieuwe unieke id en title.
 * 3. Pas de HTML-generator aan of schrijf je eigen html: `...` string.
 */

// Dit SVG-fragment wordt letterlijk opgenomen in de gekopieerde HTML.
const arrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M5 12h14m-6-6 6 6-6 6" />
</svg>`;

/**
 * 01 / 02 – NEXT
 * Donkere pil, los omlijnde arrow-disc. Bij hover ontstaat een groene
 * lichtgevende disc met drie lichtstrepen vanuit de pil.
 */
function nextButton(hoverState: boolean): string {
  const glow = hoverState
    ? "opacity-95"
    : "opacity-0 group-hover:opacity-95 group-focus-visible:opacity-95";
  const border = hoverState
    ? "border-[#11f5ab] shadow-[inset_0_0_14px_#20ffc52b]"
    : "border-white/10 group-hover:border-[#11f5ab] group-hover:shadow-[inset_0_0_14px_#20ffc52b] group-focus-visible:border-[#11f5ab]";
  const orb = hoverState
    ? "border-[#a8ffdd] bg-[linear-gradient(135deg,#b5ffe6,#37eec4)] text-[#061b20] shadow-[0_0_25px_#00ffa9b3]"
    : "border-white/85 bg-[#151b23] text-white group-hover:border-[#a8ffdd] group-hover:bg-[linear-gradient(135deg,#b5ffe6,#37eec4)] group-hover:text-[#061b20] group-hover:shadow-[0_0_25px_#00ffa9b3] group-focus-visible:bg-[#80ffd6] group-focus-visible:text-[#061b20]";
  const streaks = hoverState
    ? "translate-x-2 scale-x-100 opacity-100"
    : "translate-x-0 scale-x-50 opacity-0 group-hover:translate-x-2 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:opacity-100";

  return `
<button type="button" aria-label="Next"
  class="group relative isolate inline-flex h-[76px] w-[240px] max-w-full
         items-center rounded-full bg-[#11151d] text-white
         shadow-[0_13px_24px_#10182736] transition-transform duration-500
         hover:-translate-y-0.5 focus-visible:outline-2
         focus-visible:outline-offset-4 focus-visible:outline-emerald-400
         active:scale-[0.98]">

  <!-- Outer neon glow -->
  <span aria-hidden="true"
    class="pointer-events-none absolute -inset-1 -z-10 rounded-full
           bg-[#23f6b7]/60 blur-xl transition-opacity duration-500 ${glow}"></span>

  <!-- Main dark pill + luminous outline -->
  <span aria-hidden="true"
    class="pointer-events-none absolute inset-0 rounded-full border-2
           bg-[linear-gradient(180deg,#222730_0%,#0d1119_75%)]
           transition-all duration-500 ${border}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute inset-x-8 top-[3px] h-[28px]
           rounded-full bg-linear-to-b from-white/10 to-transparent"></span>

  <!-- Liquid bridge: de cirkel lijkt uit te rekken richting de button -->
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[28px] top-[12px] h-[52px] w-[104px]
           rounded-[70%_30%_30%_70%] bg-[radial-gradient(ellipse_at_right,#8effdf_0%,#2ae8b2_39%,transparent_75%)]
           blur-[2px] transition-all duration-500 ${glow}"></span>

  <!-- Green motion streaks slide into the arrow disc -->
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[58px] top-[27px] h-[3px]
           w-[74px] origin-right -rotate-6 rounded-full
           bg-linear-to-r from-transparent via-[#16e7ba] to-[#95ffe4]
           blur-[0.5px] transition-all duration-500 ${streaks}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[57px] top-[36px] h-[6px]
           w-[86px] origin-right rounded-full
           bg-linear-to-r from-transparent via-[#23efbe] to-[#9effda]
           blur-[1px] transition-all duration-500 delay-75 ${streaks}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[58px] top-[46px] h-[3px]
           w-[74px] origin-right rotate-6 rounded-full
           bg-linear-to-r from-transparent via-[#16e7ba] to-[#95ffe4]
           blur-[0.5px] transition-all duration-500 delay-100 ${streaks}"></span>

  <span class="relative z-10 ml-11 text-[21px] font-semibold tracking-tight">Next</span>
  <span aria-hidden="true"
    class="absolute right-[7px] top-1/2 z-10 grid size-[62px] -translate-y-1/2
           place-items-center rounded-full border-[1.5px]
           transition-all duration-500 ${orb}">${arrowSvg}</span>
</button>`;
}

/**
 * 03 / 04 – CONTINUE
 * Witte pil met donkere pijl. Hover maakt de pil elektrisch blauw,
 * met een felblauwe cirkel en bewegende blauwe lichtstrepen.
 */
function continueButton(hoverState: boolean): string {
  const body = hoverState
    ? "border-[#4ddfff] bg-[linear-gradient(100deg,#0560f5,#037bff_60%,#0099ff)] text-white shadow-[0_7px_25px_#009dff70]"
    : "border-[#e5e7ed] bg-[linear-gradient(180deg,#ffffff,#f7f8fb)] text-[#141924] shadow-[0_11px_20px_#25314a1c] group-hover:border-[#4ddfff] group-hover:bg-[linear-gradient(100deg,#0560f5,#037bff_60%,#0099ff)] group-hover:text-white group-hover:shadow-[0_7px_25px_#009dff70] group-focus-visible:border-[#4ddfff]";
  const glow = hoverState
    ? "opacity-80"
    : "opacity-0 group-hover:opacity-80 group-focus-visible:opacity-80";
  const orb = hoverState
    ? "border-[#8effff] bg-[linear-gradient(135deg,#0572ff,#00c9ff)] text-white shadow-[0_0_17px_#75eeff]"
    : "border-transparent bg-transparent text-[#121821] group-hover:border-[#8effff] group-hover:bg-[linear-gradient(135deg,#0572ff,#00c9ff)] group-hover:text-white group-hover:shadow-[0_0_17px_#75eeff] group-focus-visible:bg-[#078dff] group-focus-visible:text-white";
  const streaks = hoverState
    ? "translate-x-2 opacity-100"
    : "translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 group-focus-visible:opacity-100";

  return `
<button type="button" aria-label="Continue"
  class="group relative isolate inline-flex h-[69px] w-[242px] max-w-full
         items-center rounded-full border text-[19px] font-semibold
         transition-all duration-500 hover:-translate-y-0.5
         focus-visible:outline-2 focus-visible:outline-offset-4
         focus-visible:outline-blue-500 active:scale-[0.98] ${body}">

  <!-- Cyan blue halo -->
  <span aria-hidden="true"
    class="pointer-events-none absolute -inset-1 -z-10 rounded-full
           bg-[#19aaff]/70 blur-lg transition-opacity duration-500 ${glow}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute inset-x-7 top-[4px] h-[22px]
           rounded-full bg-linear-to-b from-white/25 to-transparent"></span>

  <!-- Liquid blue bridge between the pill and the arrow disc -->
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[28px] top-[10px] h-[50px] w-[100px]
           rounded-[70%_30%_30%_70%] bg-[radial-gradient(ellipse_at_right,#61efff_0%,#048bff_45%,transparent_76%)]
           blur-[2px] transition-all duration-500 ${glow}"></span>

  <!-- Blue energy lines, shown only in the energized state -->
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[58px] top-[21px] h-[3px] w-[75px]
           -rotate-6 rounded-full bg-linear-to-r from-transparent to-cyan-200/90
           transition-all duration-500 ${streaks}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[60px] top-[32px] h-[6px] w-[85px]
           rounded-full bg-linear-to-r from-transparent to-cyan-100/90
           blur-[0.7px] transition-all duration-500 delay-75 ${streaks}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[58px] top-[43px] h-[3px] w-[75px]
           rotate-6 rounded-full bg-linear-to-r from-transparent to-cyan-200/90
           transition-all duration-500 delay-100 ${streaks}"></span>

  <span class="relative z-10 ml-9 tracking-tight">Continue</span>
  <span aria-hidden="true"
    class="absolute right-[5px] top-1/2 z-10 grid size-[58px]
           -translate-y-1/2 place-items-center rounded-full border-[1.5px]
           transition-all duration-500 ${orb}">${arrowSvg}</span>
</button>`;
}

/**
 * 05 / 06 – EXPLORE MORE
 * Zwarte pil. Hover maakt een paars-roze-oranje energiekanaal,
 * met een ronde neonpijl aan de rechterkant.
 */
function exploreButton(hoverState: boolean): string {
  const frame = hoverState
    ? "border-[#9f45ff] shadow-[0_0_22px_#fe3ac277,0_11px_24px_#171a2e30]"
    : "border-transparent shadow-[0_10px_25px_#15203333] group-hover:border-[#9f45ff] group-hover:shadow-[0_0_22px_#fe3ac277,0_11px_24px_#171a2e30] group-focus-visible:border-[#9f45ff]";
  const glow = hoverState
    ? "opacity-95"
    : "opacity-0 group-hover:opacity-95 group-focus-visible:opacity-95";
  const color = hoverState
    ? "opacity-100"
    : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100";
  const orb = hoverState
    ? "border-[#ffd7a3] bg-[linear-gradient(120deg,#fa2aef_0%,#ff4698_58%,#ffb44c_100%)] text-white shadow-[0_0_24px_#ff52ad]"
    : "border-transparent bg-transparent text-white group-hover:border-[#ffd7a3] group-hover:bg-[linear-gradient(120deg,#fa2aef_0%,#ff4698_58%,#ffb44c_100%)] group-hover:shadow-[0_0_24px_#ff52ad] group-focus-visible:bg-[#fe43ac]";
  const streak = hoverState
    ? "translate-x-2 opacity-100"
    : "translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 group-focus-visible:opacity-100";

  return `
<button type="button" aria-label="Explore More"
  class="group relative isolate inline-flex h-[68px] w-[268px] max-w-full
         items-center rounded-full border-2 bg-[#11151d] text-white
         transition-all duration-500 hover:-translate-y-0.5
         focus-visible:outline-2 focus-visible:outline-offset-4
         focus-visible:outline-fuchsia-500 active:scale-[0.98] ${frame}">

  <!-- Pink, violet and orange outer glow -->
  <span aria-hidden="true"
    class="pointer-events-none absolute -inset-[5px] -z-10 rounded-full
           bg-[linear-gradient(100deg,#164eff,#c421f3_52%,#fe4aaf_77%,#ffac49)]
           blur-lg transition-opacity duration-500 ${glow}"></span>

  <!-- Main black body. Gradient activates on hover. -->
  <span aria-hidden="true"
    class="pointer-events-none absolute inset-0 rounded-full
           bg-[linear-gradient(110deg,#1d222b,#0d111a_70%)]"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute inset-0 rounded-full
           bg-[linear-gradient(100deg,#041433_10%,#291075_42%,#c815ec_70%,#ff7b61_92%)]
           transition-opacity duration-500 ${color}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute inset-x-7 top-[3px] h-[25px]
           rounded-full bg-linear-to-b from-white/15 to-transparent"></span>

  <!-- Liquid magenta/orange bridge to the neon arrow disc -->
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[25px] top-[9px] h-[50px] w-[106px]
           rounded-[70%_30%_30%_70%] bg-[radial-gradient(ellipse_at_right,#ffcf85_0%,#ff3ab7_45%,transparent_77%)]
           blur-[2px] transition-all duration-500 ${glow}"></span>

  <!-- Fiery lines connecting the arrow to the pill -->
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[51px] top-[19px] h-[3px] w-[58px]
           -rotate-8 rounded-full bg-linear-to-r from-transparent to-[#ffb660]
           transition-all duration-500 ${streak}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[53px] top-[30px] h-[5px] w-[67px]
           rounded-full bg-linear-to-r from-transparent via-[#ff44b9] to-[#ffd389]
           blur-[0.6px] transition-all duration-500 delay-75 ${streak}"></span>
  <span aria-hidden="true"
    class="pointer-events-none absolute right-[51px] top-[41px] h-[3px] w-[58px]
           rotate-8 rounded-full bg-linear-to-r from-transparent to-[#ff5ab5]
           transition-all duration-500 delay-100 ${streak}"></span>

  <span class="relative z-10 ml-8 text-[18px] font-semibold tracking-tight">
    Explore More
  </span>
  <span aria-hidden="true"
    class="absolute right-[4px] top-1/2 z-10 grid size-[58px]
           -translate-y-1/2 place-items-center rounded-full border-[1.5px]
           transition-all duration-500 ${orb}">${arrowSvg}</span>
</button>`;
}

// Zes aparte, kopieerbare voorbeelden. De 'Hover' items tonen de
// geanimeerde eindtoestand al in rust (zoals de twee kolommen in de afbeelding).
export const morphingArrowButtons: KitExample[] = [
  {
    id: "morph-next-default",
    title: "Morphing Arrow - Next (Default)",
    description: "Dark pill with outlined arrow. Hover for neon green morph.",
    html: nextButton(false),
  },
  {
    id: "morph-next-hover",
    title: "Morphing Arrow - Next (Hover)",
    description: "Neon mint arrow with green streaks, always visible.",
    html: nextButton(true),
  },
  {
    id: "morph-continue-default",
    title: "Morphing Arrow - Continue (Default)",
    description: "Soft white pill. Hover for bright electric-blue morph.",
    html: continueButton(false),
  },
  {
    id: "morph-continue-hover",
    title: "Morphing Arrow - Continue (Hover)",
    description: "Electric-blue pill with circular cyan arrow.",
    html: continueButton(true),
  },
  {
    id: "morph-explore-default",
    title: "Morphing Arrow - Explore More (Default)",
    description: "Dark pill that morphs into magenta, violet and orange.",
    html: exploreButton(false),
  },
  {
    id: "morph-explore-hover",
    title: "Morphing Arrow - Explore More (Hover)",
    description: "Active violet-magenta gradient and glowing arrow disc.",
    html: exploreButton(true),
  },
];
