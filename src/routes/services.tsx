import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Icon3D } from "@/components/site/Icon3D";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { icons, SERVICE_GROUPS } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PF, ESIC, Payroll, Recruitment & GST | RK Associate" },
      { name: "description", content: "PF & ESIC compliance, labour law, POSH, payroll, recruitment, accounting, GST and TDS services for businesses in Madhya Pradesh." },
      { property: "og:title", content: "Services — PF, ESIC, Payroll, Recruitment & GST | RK Associate" },
      { property: "og:description", content: "PF & ESIC compliance, labour law, POSH, payroll, recruitment, accounting, GST and TDS services for businesses in Madhya Pradesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>HR, compliance & accounts — <span className="text-gradient">done right</span></>}
        intro="Pick a single service or hand over your entire HR back-office. Every service is handled by practitioners who file and process every month."
        icon={icons.payroll}
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact" search={{ type: "business" }}>Get a quote <ArrowRight /></Link>
        </Button>
      </PageHero>
      {SERVICE_GROUPS.map((g, gi) => (
        <section key={g.id} id={g.id} className="scroll-mt-28 px-4 pt-16">
          <div className="mx-auto max-w-7xl">
            <Reveal className="flex items-center gap-4">
              <Icon3D src={g.icon} className="h-20 w-20 shrink-0" delay={gi} />
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">{g.title}</h2>
                <p className="text-muted-foreground">{g.tagline}</p>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it, i) => (
                <Reveal key={it.name} delay={i * 70}>
                  <TiltCard className="p-6" max={7}>
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="mt-3 text-lg font-semibold">{it.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
