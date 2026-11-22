import { cn } from "@/lib/utils";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
        RK
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-amber ring-2 ring-background" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-display text-lg font-semibold", tone === "dark" && "text-navy-foreground")}>
          RK Associate
        </span>
        <span className={cn("block text-[10px] uppercase tracking-[0.2em]", tone === "dark" ? "text-navy-muted" : "text-muted-foreground")}>
          HR · Compliance · Training
        </span>
      </span>
    </span>
  );
}
