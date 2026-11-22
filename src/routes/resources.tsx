import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Icon3D } from "@/components/site/Icon3D";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { FAQS, icons, RESOURCE_CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — PF, ESIC, Labour Law & GST Updates | RK Associate" },
      { name: "description", content: "Knowledge centre with PF, ESIC, labour law and GST updates, HR articles, templates and FAQs." },
      { property: "og:title", content: "Resources — PF, ESIC, Labour Law & GST Updates | RK Associate" },
      { property: "og:description", content: "Knowledge centre with PF, ESIC, labour law and GST updates, HR articles, templates and FAQs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resources,
});

function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge centre"
        title={<>Updates, guides & <span className="text-gradient">HR templates</span></>}
        intro="Stay current on PF, ESIC, labour law and tax changes, with practical articles and ready-to-use HR formats."
        icon={icons.folder}
      />
      <section className="px-4">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CATEGORIES.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <TiltCard className="p-6">
                <Icon3D src={r.icon} className="h-24 w-24" delay={i} />
                <h2 className="mt-4 text-xl font-semibold">{r.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">Coming soon</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center text-3xl font-semibold">Frequently asked questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="glass group rounded-2xl p-5">
                <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
