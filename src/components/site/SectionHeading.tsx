import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "center", tone = "light", className }: Props) {
  return (
    <Reveal className={cn(align === "center" ? "mx-auto text-center" : "", "max-w-3xl", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
          tone === "light" ? "glass text-primary" : "glass-dark text-navy-muted",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-5 text-3xl font-semibold leading-tight md:text-5xl",
          tone === "light" ? "text-foreground" : "text-navy-foreground",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4 text-base md:text-lg", tone === "light" ? "text-muted-foreground" : "text-navy-muted")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
