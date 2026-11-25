import { cn } from "@/lib/utils";
import emblem from "@/assets/brand/rk-logo-emblem.png.asset.json";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-3">
      <img src={emblem.url} alt="RK Associate logo" width={44} height={41} className="h-11 w-auto shrink-0" />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-semibold tracking-wide",
            tone === "dark" ? "text-navy-foreground" : "text-foreground",
          )}
        >
          RK Associate
        </span>
        <span
          className={cn(
            "mt-1 block text-[10px] font-medium uppercase tracking-[0.22em]",
            tone === "dark" ? "text-navy-muted" : "text-muted-foreground",
          )}
        >
          HR · Compliance · Training
        </span>
      </span>
    </span>
  );
}
