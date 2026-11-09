import type { ReactNode } from "react";
import styles from "./sample-button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

type SampleButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: number;
  disabled?: boolean;
  onClick?: () => void;
};

// Voorbeeld voor het Component Lab. Je bouwt je echte UI-kits zelf.
export function SampleButton({
  children,
  variant = "primary",
  size = "md",
  radius = 12,
  disabled = false,
  onClick,
}: SampleButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      style={{ borderRadius: radius }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
