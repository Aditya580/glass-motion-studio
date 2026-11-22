import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Icon3D } from "@/components/site/Icon3D";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { icons, INDUSTRIES, TESTIMONIALS } from "@/lib/site";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Industries — 150+ Active Clients | RK Associate" },
      { name: "description", content: "RK Associate serves 150+ active clients across manufacturing, engineering, construction, IT, retail, logistics and SMEs." },
      { property: "og:title", content: "Clients & Industries — 150+ Active Clients | RK Associate" },
      { property: "og:description", content: "RK Associate serves 150+ active clients across manufacturing, engineering, construction, IT, retail, logistics and SMEs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Clients,
});

function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Clients & industries"
        title={<><span className="text-gradient">150+ active clients</span> trust RK Associate</>}
        intro="From factories in Mandideep to growing service businesses, we keep teams compliant and well-run."
        icon={icons.factory}
      />
      <section className="px-4">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((name, i) => (
            <Reveal key={name} delay={i * 60}>
              <TiltCard className="flex items-center gap-4 p-5" max={8}>
                <Icon3D src={icons.factory} className="h-16 w-16 shrink-0" delay={i} />
                <h2 className="font-display text-lg font-semibold">{name}</h2>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name} className="glass rounded-3xl p-6">
              <p>“{t.quote}”</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.org}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
