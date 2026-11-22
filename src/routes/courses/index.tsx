import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Icon3D } from "@/components/site/Icon3D";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { COURSES, icons } from "@/lib/site";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "HR Courses — 15-Day Practical HR Training | RK Associate" },
      { name: "description", content: "Practical HR courses: 15-day HR training, PF & ESIC, payroll, recruitment, labour law, HR generalist and POSH, with certificates." },
      { property: "og:title", content: "HR Courses — 15-Day Practical HR Training | RK Associate" },
      { property: "og:description", content: "Practical HR courses: 15-day HR training, PF & ESIC, payroll, recruitment, labour law, HR generalist and POSH, with certificates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <PageHero
        eyebrow="HR training institute"
        title={<>Practical HR courses that get you <span className="text-gradient">job-ready</span></>}
        intro="Learn on real portals, real payrolls and real documents. Every course ends with an assessment and certificate."
        icon={icons.cap}
      />
      <section className="px-4">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <TiltCard className="flex flex-col p-6">
                <div className="flex items-start justify-between">
                  <Icon3D src={c.icon} className="h-24 w-24" delay={i} />
                  {c.featured && <span className="rounded-full bg-gradient-amber px-3 py-1 text-xs font-semibold text-amber-foreground">Featured</span>}
                </div>
                <h2 className="mt-4 text-xl font-semibold">{c.title}</h2>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{c.short}</p>
                <p className="mt-4 flex items-center gap-2 text-sm font-medium"><Clock className="h-4 w-4 text-primary" /> {c.duration}</p>
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View course <ArrowRight className="h-4 w-4" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
