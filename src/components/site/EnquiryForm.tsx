import { useState, type FormEvent, type ReactNode } from "react";
import { Briefcase, GraduationCap, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { buildMailto, buildWhatsApp, formatEnquiry, type EnquiryField } from "@/lib/enquiry";
import { COURSES, SERVICE_GROUPS } from "@/lib/site";
import { cn } from "@/lib/utils";

export type EnquiryType = "business" | "training";

const fieldClass =
  "w-full rounded-2xl border border-input bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-hidden transition focus:border-primary focus:bg-card focus:ring-4 focus:ring-primary/15";

function Field({ label, children, required }: { label: string; children: ReactNode; required?: boolean }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      <span>
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

type Props = { defaultType?: EnquiryType; defaultCourse?: string };

export function EnquiryForm({ defaultType = "business", defaultCourse }: Props) {
  const [type, setType] = useState<EnquiryType>(defaultType);
  const [v, setV] = useState<Record<string, string>>({ course: defaultCourse ?? COURSES[0]!.title });
  const set = (k: string) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [k]: e.target.value }));
  const val = (k: string) => v[k] ?? "";

  const fields = (): EnquiryField[] =>
    type === "business"
      ? [
          { label: "Company Name", value: val("company") },
          { label: "Contact Person", value: val("name") },
          { label: "Mobile Number", value: val("mobile") },
          { label: "Email", value: val("email") },
          { label: "Required Service", value: val("service") },
          { label: "Message", value: val("message") },
        ]
      : [
          { label: "Name", value: val("name") },
          { label: "Mobile Number", value: val("mobile") },
          { label: "Email", value: val("email") },
          { label: "Qualification", value: val("qualification") },
          { label: "Course Interested", value: val("course") },
          { label: "Preferred Batch", value: val("batch") },
        ];

  const title = type === "business" ? "Business Enquiry" : "HR Training Enquiry";

  const validate = () => {
    if (!val("name").trim()) return "Please enter your name.";
    if (!/^[0-9+\s-]{10,15}$/.test(val("mobile").trim())) return "Please enter a valid mobile number.";
    if (type === "business" && !val("company").trim()) return "Please enter your company name.";
    return null;
  };

  const onEmail = (e: FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) return toast.error(err);
    window.location.href = buildMailto(`${title} — ${val("company") || val("name")}`, formatEnquiry(title, fields()));
    toast.success("Opening your email app with the enquiry ready to send.");
  };

  const onWhatsApp = () => {
    const err = validate();
    if (err) return toast.error(err);
    window.open(buildWhatsApp(formatEnquiry(title, fields())), "_blank", "noopener");
  };

  return (
    <form onSubmit={onEmail} className="glass-strong rounded-[2rem] p-6 md:p-8">
      <div className="grid grid-cols-2 gap-2 rounded-full bg-muted p-1.5" role="tablist">
        {(
          [
            ["business", "Business Services", Briefcase],
            ["training", "HR Training", GraduationCap],
          ] as const
        ).map(([key, label, Icon]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={type === key}
            onClick={() => setType(key)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
              type === key ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      <div key={type} className="mt-6 grid animate-in fade-in slide-in-from-bottom-2 gap-4 duration-500 sm:grid-cols-2">
        {type === "business" ? (
          <>
            <Field label="Company Name" required><input className={fieldClass} value={val("company")} onChange={set("company")} placeholder="Your company" /></Field>
            <Field label="Contact Person" required><input className={fieldClass} value={val("name")} onChange={set("name")} placeholder="Full name" /></Field>
            <Field label="Mobile Number" required><input className={fieldClass} inputMode="tel" value={val("mobile")} onChange={set("mobile")} placeholder="10-digit mobile" /></Field>
            <Field label="Email"><input type="email" className={fieldClass} value={val("email")} onChange={set("email")} placeholder="you@company.com" /></Field>
            <div className="sm:col-span-2">
              <Field label="Required Service">
                <select className={fieldClass} value={val("service")} onChange={set("service")}>
                  <option value="">Select a service</option>
                  {SERVICE_GROUPS.map((g) => (
                    <optgroup key={g.id} label={g.title}>
                      {g.items.map((i) => <option key={i.name}>{i.name}</option>)}
                    </optgroup>
                  ))}
                </select>
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Message"><textarea rows={4} className={fieldClass} value={val("message")} onChange={set("message")} placeholder="Tell us about your team size and needs" /></Field>
            </div>
          </>
        ) : (
          <>
            <Field label="Name" required><input className={fieldClass} value={val("name")} onChange={set("name")} placeholder="Full name" /></Field>
            <Field label="Mobile Number" required><input className={fieldClass} inputMode="tel" value={val("mobile")} onChange={set("mobile")} placeholder="10-digit mobile" /></Field>
            <Field label="Email"><input type="email" className={fieldClass} value={val("email")} onChange={set("email")} placeholder="you@email.com" /></Field>
            <Field label="Qualification"><input className={fieldClass} value={val("qualification")} onChange={set("qualification")} placeholder="e.g. MBA HR, B.Com" /></Field>
            <Field label="Course Interested">
              <select className={fieldClass} value={val("course")} onChange={set("course")}>
                {COURSES.map((c) => <option key={c.slug}>{c.title}</option>)}
              </select>
            </Field>
            <Field label="Preferred Batch">
              <select className={fieldClass} value={val("batch")} onChange={set("batch")}>
                <option value="">Any batch</option>
                <option>Weekday batch</option>
                <option>Weekend batch</option>
              </select>
            </Field>
          </>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="hero" size="xl" className="flex-1">
          <Mail /> Send by Email
        </Button>
        <Button type="button" variant="whatsapp" size="xl" className="flex-1" onClick={onWhatsApp}>
          <MessageCircle /> Send on WhatsApp
        </Button>
      </div>
    </form>
  );
}
