import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Briefcase, GraduationCap, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <span className="flex items-center gap-2 text-navy-muted">
            <MapPin className="h-3.5 w-3.5 text-amber" /> {CONTACT.location}
          </span>
          <div className="flex items-center gap-6">
            <a href={`tel:+91${CONTACT.phone}`} className="flex items-center gap-2 hover:text-amber">
              <Phone className="h-3.5 w-3.5 text-amber" /> {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-amber">
              <Mail className="h-3.5 w-3.5 text-amber" /> {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
      <div className="px-3 pt-3">
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 md:px-6",
            scrolled ? "glass-strong" : "glass",
          )}
        >
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "bg-gradient-primary text-primary-foreground! shadow-glow" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-2 xl:flex">
            <Button asChild variant="glass" size="sm" className="h-9 px-4">
              <Link to="/contact" search={{ type: "business" }}>
                <Briefcase /> Business Enquiry
              </Link>
            </Button>
            <Button asChild variant="hero" size="sm" className="h-9 px-4">
              <Link to="/contact" search={{ type: "training" }}>
                <GraduationCap /> Join HR Training
              </Link>
            </Button>
          </div>
          <button
            className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="glass-strong mx-auto mt-2 max-w-7xl animate-in fade-in slide-in-from-top-2 rounded-3xl p-4 lg:hidden">
            <ul className="grid gap-1">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: n.to === "/" }}
                    className="block rounded-2xl px-4 py-3 font-medium hover:bg-accent"
                    activeProps={{ className: "bg-accent text-primary" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Button asChild variant="glass" size="xl">
                <Link to="/contact" search={{ type: "business" }} onClick={() => setOpen(false)}>
                  <Briefcase /> Business Enquiry
                </Link>
              </Button>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ type: "training" }} onClick={() => setOpen(false)}>
                  <GraduationCap /> Join HR Training
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
