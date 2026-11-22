import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Icon3D } from "@/components/site/Icon3D";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { icons, WHY_US } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RK Associate — HR Consultancy & Training, Mandideep" },
      { name: "description", content: "Who we are: an HR consultancy, compliance partner and practical HR training institute in Mandideep, Madhya Pradesh." },
      { property: "og:title", content: "About RK Associate — HR Consultancy & Training, Mandideep" },
      { property: "og:description", content: "Who we are: an HR consultancy, compliance partner and practical HR training institute in Mandideep, Madhya Pradesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  { title: "Our Mission", text: "Make HR and statutory compliance simple, accurate and stress-free for every business we serve.", icon: icons.shield },
  { title: "Our Vision", text: "Become Madhya Pradesh's most trusted HR partner and the go-to institute for practical HR careers.", icon: icons.growth },
  { title: "How We Work", text: "Hands-on, deadline-driven and transparent — we do the work and teach exactly what we do.", icon: icons.handshake },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Consultancy, compliance & <span className="text-gradient">training</span> under one roof</>}
        intro="RK Associate supports 150+ active clients with HR, compliance, payroll, recruitment and accounts — and trains new HR professionals with real, practical work."
        icon={icons.handshake}
      />
      <section className="px-4">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <TiltCard className="p-7">
                <Icon3D src={p.icon} className="h-28 w-28" delay={i} />
                <h2 className="mt-4 text-2xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-6 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 80} className="glass rounded-3xl p-6">
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
