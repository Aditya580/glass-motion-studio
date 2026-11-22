import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/CountUp";
import { CtaBand } from "@/components/site/CtaBand";
import { Icon3D } from "@/components/site/Icon3D";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TiltCard } from "@/components/site/TiltCard";
import { art, CONTACT, COURSES, icons, INDUSTRIES, SERVICE_GROUPS, STATS, TESTIMONIALS, WHY_US } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RK Associate — HR Consultancy, Compliance & Practical HR Training" },
      {
        name: "description",
        content:
          "One partner for PF, ESIC, labour law, payroll, recruitment and a 15-day practical HR course. Based in Mandideep, Madhya Pradesh.",
      },
      { property: "og:title", content: "RK Associate — HR Consultancy, Compliance & Training" },
      { property: "og:description", content: "HR consultancy, compliance partner and practical HR training institute in Mandideep, MP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const featured = COURSES[0]!;

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedCourse />
      <WhyUs />
      <Industries />
      <Testimonials />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 md:pt-16">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5 text-amber" />
            HR Consultancy · Compliance Partner · Training Institute
          </span>
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.04] md:text-7xl">
            HR made <span className="text-gradient">simple,</span>
            <br />
            compliant & career-ready.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            RK Associate handles your PF, ESIC, labour law, payroll and hiring — and trains the next generation of HR
            professionals with a practical 15-day course.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact" search={{ type: "business" }}>Enquire for Services <ArrowUpRight /></Link>
            </Button>
            <Button asChild variant="amber" size="xl">
              <Link to="/contact" search={{ type: "training" }}>Join HR Training <ArrowUpRight /></Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={`tel:+91${CONTACT.phone}`}><Phone /> Contact Us</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[icons.shield, icons.payroll, icons.recruit, icons.tax].map((src) => (
                <span key={src} className="glass-strong flex h-11 w-11 items-center justify-center rounded-full p-1.5">
                  <img src={src} alt="" className="h-full w-full object-contain" />
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="font-display text-foreground">150+ active clients</strong>
              <br /> across Madhya Pradesh trust us
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-10 rounded-full bg-gradient-primary opacity-40 blur-3xl" />
          <div className="glass relative aspect-square rounded-full p-6">
            <div className="absolute inset-3 animate-spin-slow rounded-full border-2 border-dashed border-primary/20" />
            <img src={art.heroTeam} alt="HR team with growth chart and documents" className="relative h-full w-full animate-float-slow object-contain drop-icon" />
          </div>
          <Icon3D src={icons.shield} className="absolute -left-2 top-6 w-24 md:w-28" delay={1} />
          <Icon3D src={icons.payroll} className="absolute -right-2 top-1/3 w-20 md:w-24" delay={3} />
          <Icon3D src={icons.cap} className="absolute bottom-4 left-6 w-20 md:w-24" delay={2} />

          <div className="glass-strong absolute -right-2 bottom-10 flex animate-float items-center gap-3 rounded-2xl px-4 py-3 md:right-0" style={{ animationDelay: "-2s" }}>
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <div className="text-xs">
              <p className="font-semibold">PF & ESIC filed</p>
              <p className="text-muted-foreground">On time, every month</p>
            </div>
          </div>
          <div className="glass-strong absolute left-0 top-1/2 hidden animate-float rounded-2xl px-4 py-3 md:block" style={{ animationDelay: "-4s" }}>
            <p className="font-display text-2xl font-semibold text-primary">15 days</p>
            <p className="text-xs text-muted-foreground">to job-ready HR</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-4">
      <Reveal className="glass-strong mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-[2rem] p-6 md:grid-cols-4 md:p-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-semibold text-primary md:text-5xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Services() {
  return (
    <section className="px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title={<>Every HR need, <span className="text-gradient">one trusted partner</span></>}
          intro="From statutory compliance to payroll, hiring and taxation — we run the HR back-office so you can run the business."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_GROUPS.map((g, i) => (
            <Reveal key={g.id} delay={i * 100}>
              <TiltCard className="p-6">
                <Icon3D src={g.icon} className="h-32 w-32" delay={i} />
                <h3 className="mt-4 text-xl font-semibold">{g.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.tagline}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {g.items.slice(0, 4).map((it) => (
                    <li key={it.name} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {it.name}
                    </li>
                  ))}
                </ul>
                <Link to="/services" hash={g.id} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCourse() {
  return (
    <section className="px-4 pt-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-navy px-6 py-14 text-navy-foreground md:px-12 md:py-20">
        <div className="absolute -left-20 top-10 h-80 w-80 animate-blob rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 animate-blob rounded-full bg-amber/20 blur-3xl" style={{ animationDelay: "-8s" }} />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Featured course"
              title={<>Learn HR from start to end in <span className="text-amber">15 days</span></>}
              intro={featured.overview}
            />
            <Reveal delay={100} className="mt-8 flex flex-wrap gap-2">
              {featured.modules.map((m) => (
                <span key={m} className="glass-dark rounded-full px-3.5 py-1.5 text-sm">{m}</span>
              ))}
            </Reveal>
            <Reveal delay={200} className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="amber" size="xl">
                <Link to="/courses/$slug" params={{ slug: featured.slug }}>View 15-day plan <ArrowRight /></Link>
              </Button>
              <Button asChild variant="navyGlass" size="xl">
                <Link to="/contact" search={{ type: "training", course: featured.title }}>Book a seat</Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={150} className="relative">
            <div className="glass-dark relative mx-auto max-w-md rounded-[2rem] p-6">
              <img src={art.trainee} alt="HR trainee with laptop and certificate" className="mx-auto h-72 animate-float-slow object-contain drop-icon" />
              <div className="mt-4 grid grid-cols-5 gap-2">
                {featured.dayPlan!.map((d) => (
                  <div
                    key={d.day}
                    title={d.topic}
                    className="group/day flex aspect-square flex-col items-center justify-center rounded-xl bg-navy-foreground/5 text-center ring-1 ring-navy-muted/15 transition hover:bg-primary hover:ring-primary"
                  >
                    <span className="text-[10px] uppercase text-navy-muted group-hover/day:text-navy-foreground">Day</span>
                    <span className="font-display text-lg font-semibold">{d.day}</span>
                  </div>
                ))}
              </div>
            </div>
            <Icon3D src={icons.certificate} className="absolute -right-2 -top-6 w-28" delay={1} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why RK Associate" title={<>Practical expertise, <span className="text-gradient">real results</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <TiltCard className="p-6 text-center">
                <Icon3D src={w.icon} className="mx-auto h-28 w-28" delay={i * 1.5} />
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const row = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="pt-24">
      <SectionHeading eyebrow="Industries we serve" title="Trusted across sectors" className="px-4" />
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 py-2">
          {row.map((name, i) => (
            <div key={`${name}-${i}`} className="glass flex items-center gap-3 rounded-full px-6 py-3">
              <img src={icons.factory} alt="" className="h-8 w-8 object-contain" />
              <span className="whitespace-nowrap font-display font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/clients" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          See our clients <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" title="What clients & trainees say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <TiltCard className="flex flex-col p-7" max={6}>
                <Quote className="h-8 w-8 text-amber" />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed">“{t.quote}”</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.org}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
