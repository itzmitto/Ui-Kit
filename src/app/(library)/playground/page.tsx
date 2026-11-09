import type { Metadata } from "next";
import { ComponentLab } from "@/components/playground/component-lab";

export const metadata: Metadata = {
  title: "Component Lab | Uikit",
  description: "Testpagina voor je eigen UI-componenten met live preview en CSS.",
};

export default function PlaygroundPage() {
  return <ComponentLab />;
}
