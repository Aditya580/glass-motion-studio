import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Icon3D } from "./Icon3D";

type Props = { eyebrow: string; title: ReactNode; intro: string; icon: string; children?: ReactNode };

export function PageHero({ eyebrow, title, intro, icon, children }: Props) {
  return (
    <section className="relative px-4 pb-12 pt-10 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{intro}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
        <Reveal delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-6 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="glass relative aspect-square rounded-[2.5rem] p-10">
            <div className="absolute inset-4 animate-spin-slow rounded-full border border-dashed border-primary/25" />
            <Icon3D src={icon} className="h-full w-full" slow />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
