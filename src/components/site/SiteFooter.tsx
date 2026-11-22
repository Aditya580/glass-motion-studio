import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, COURSES, NAV, SERVICE_GROUPS } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-sm text-sm text-navy-muted">
            HR Consultancy, Compliance Partner and Practical HR Training Institute — helping businesses stay compliant and
            helping people build HR careers.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-navy-foreground">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber">Services & Courses</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            {SERVICE_GROUPS.map((g) => (
              <li key={g.id}>
                <Link to="/services" hash={g.id} className="hover:text-navy-foreground">{g.title}</Link>
              </li>
            ))}
            {COURSES.slice(0, 3).map((c) => (
              <li key={c.slug}>
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="hover:text-navy-foreground">{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-amber" /><a href={`tel:+91${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-amber" /><a href={`mailto:${CONTACT.email}`} className="break-all">{CONTACT.email}</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-amber" />{CONTACT.location}</li>
            <li>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-navy-muted/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-navy-muted">
          © {new Date().getFullYear()} RK Associate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
