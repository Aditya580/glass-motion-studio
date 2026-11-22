import { cn } from "@/lib/utils";

type Icon3DProps = {
  src: string;
  alt?: string;
  className?: string;
  /** Seconds to offset the float loop so neighbours don't bob in sync. */
  delay?: number;
  slow?: boolean;
};

/** Floating 3D-rendered icon that pops forward inside a TiltCard. */
export function Icon3D({ src, alt = "", className, delay = 0, slow }: Icon3DProps) {
  return (
    <div className={cn("relative [transform:translateZ(50px)]", className)}>
      <span
        aria-hidden
        className="absolute inset-x-[18%] bottom-[2%] h-[10%] rounded-full bg-primary/25 blur-md"
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        className={cn(
          "relative h-full w-full select-none object-contain drop-icon",
          slow ? "animate-float-slow" : "animate-float",
        )}
        style={{ animationDelay: `${-delay}s` }}
      />
    </div>
  );
}
