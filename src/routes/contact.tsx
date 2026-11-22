import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Icon3D } from "@/components/site/Icon3D";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, icons } from "@/lib/site";

type ContactSearch = { type?: "business" | "training"; course?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): ContactSearch => ({
    ...(s["type"] === "training" || s["type"] === "business" ? { type: s["type"] } : {}),
    ...(typeof s["course"] === "string" ? { course: s["course"] } : {}),
  }),
  head: () => ({
    meta: [
      { title: "Contact RK Associate — Business & HR Training Enquiry" },
      { name: "description", content: "Call, WhatsApp or email RK Associate in Mandideep, MP for HR services or to join HR training." },
      { property: "og:title", content: "Contact RK Associate — Business & HR Training Enquiry" },
      { property: "og:description", content: "Call, WhatsApp or email RK Associate in Mandideep, MP for HR services or to join HR training." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { type, course } = Route.useSearch();
  const items = [
    { icon: Phone, label: "Call us", value: CONTACT.phoneDisplay, href: `tel:+91${CONTACT.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phoneDisplay, href: `https://wa.me/${CONTACT.whatsapp}` },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: "Location", value: CONTACT.location, href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.mapQuery)}` },
  ];
  return (
    <section className="px-4 pb-8 pt-10 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <Icon3D src={icons.contact} className="h-32 w-32" />
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Let's <span className="text-gradient">talk HR</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">Need compliance support or want to join a course? Send an enquiry and we'll get back quickly.</p>
          <div className="mt-8 grid gap-3">
            {items.map((i) => (
              <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground"><i.icon className="h-5 w-5" /></span>
                <span><span className="block text-xs text-muted-foreground">{i.label}</span><span className="break-all font-semibold">{i.value}</span></span>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <EnquiryForm key={`${type}-${course}`} defaultType={type ?? "business"} {...(course ? { defaultCourse: course } : {})} />
        </Reveal>
      </div>
    </section>
  );
}
