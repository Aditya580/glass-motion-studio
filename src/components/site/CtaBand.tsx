import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, icons } from "@/lib/site";
import { Icon3D } from "./Icon3D";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="px-4 pt-24">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-navy px-6 py-14 text-navy-foreground md:px-14">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/50 blur-3xl" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">Ready to simplify HR — or start your HR career?</h2>
            <p className="mt-4 max-w-xl text-navy-muted">
              Tell us what you need. We reply quickly on call, email or WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="amber" size="xl">
                <Link to="/contact" search={{ type: "business" }}>Enquire for Services <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ type: "training" }}>Join HR Training <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="navyGlass" size="xl">
                <a href={`tel:+91${CONTACT.phone}`}><Phone /> Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-xs justify-center">
            <Icon3D src={icons.contact} className="w-56" />
            <Icon3D src={icons.cap} className="absolute -left-4 bottom-0 w-24" delay={2} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
