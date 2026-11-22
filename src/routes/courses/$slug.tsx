import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Award, CalendarDays, CheckCircle2, IndianRupee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COURSES } from "@/lib/site";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = COURSES.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.course.title} — RK Associate` : "Course — RK Associate";
    const description = loaderData?.course.overview ?? "Practical HR course by RK Associate.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CourseDetail,
});

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal className="glass rounded-3xl p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{i}</li>
        ))}
      </ul>
    </Reveal>
  );
}

function CourseDetail() {
  const { course } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={course.duration} title={course.title} intro={course.overview} icon={course.icon}>
        <Button asChild variant="hero" size="xl">
          <Link to="/contact" search={{ type: "training", course: course.title }}>Enroll now</Link>
        </Button>
      </PageHero>
      <section className="px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CalendarDays, label: "Duration", value: course.duration },
              { icon: Users, label: "Batches", value: course.batches.join(" · ") },
              { icon: Award, label: "Certificate", value: course.certificate },
              { icon: IndianRupee, label: "Fees", value: course.fees },
            ].map((f) => (
              <Reveal key={f.label} className="glass-strong rounded-3xl p-5">
                <f.icon className="h-6 w-6 text-primary" />
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{f.label}</p>
                <p className="mt-1 font-semibold">{f.value}</p>
              </Reveal>
            ))}
          </div>
          {course.dayPlan && (
            <Reveal className="mt-10">
              <h2 className="text-3xl font-semibold">Day-wise plan</h2>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {course.dayPlan.map((d) => (
                  <li key={d.day} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary font-display font-semibold text-primary-foreground">{d.day}</span>
                    <span className="font-medium">{d.topic}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <List title="Who can join" items={course.whoCanJoin} />
            <List title="Modules" items={course.modules} />
            <List title="Practical work" items={course.practical} />
            <List title="Assignments" items={course.assignments} />
          </div>
        </div>
      </section>
    </>
  );
}
