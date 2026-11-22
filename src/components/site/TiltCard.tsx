import { useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  variant?: "light" | "dark";
};

/** Glass card that tilts in 3D toward the pointer, with a moving glare. */
export function TiltCard({ children, className, max = 10, variant = "light" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(0)`;
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div className="icon-stage h-full">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className={cn(
          "icon-tilt group relative h-full overflow-hidden rounded-3xl",
          variant === "light" ? "glass" : "glass-dark",
          className,
        )}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--gx,50%) var(--gy,50%), oklch(1 0 0 / 0.35), transparent 45%)",
          }}
        />
        <div className="relative h-full [transform-style:preserve-3d]">{children}</div>
      </div>
    </div>
  );
}
