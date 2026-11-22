import shield from "@/assets/3d/icon-shield.webp.asset.json";
import payroll from "@/assets/3d/icon-payroll.webp.asset.json";
import recruit from "@/assets/3d/icon-recruit.webp.asset.json";
import tax from "@/assets/3d/icon-tax.webp.asset.json";
import cap from "@/assets/3d/icon-cap.webp.asset.json";
import certificate from "@/assets/3d/icon-certificate.webp.asset.json";
import handshake from "@/assets/3d/icon-handshake.webp.asset.json";
import growth from "@/assets/3d/icon-growth.webp.asset.json";
import folder from "@/assets/3d/icon-folder.webp.asset.json";
import factory from "@/assets/3d/icon-factory.webp.asset.json";
import contact from "@/assets/3d/icon-contact.webp.asset.json";
import heroTeam from "@/assets/3d/hero-team.webp.asset.json";
import trainee from "@/assets/3d/trainee.webp.asset.json";

export const icons = {
  shield: shield.url,
  payroll: payroll.url,
  recruit: recruit.url,
  tax: tax.url,
  cap: cap.url,
  certificate: certificate.url,
  handshake: handshake.url,
  growth: growth.url,
  folder: folder.url,
  factory: factory.url,
  contact: contact.url,
} as const;

export const art = { heroTeam: heroTeam.url, trainee: trainee.url } as const;

export const CONTACT = {
  phone: "8103519944",
  phoneDisplay: "+91 81035 19944",
  whatsapp: "918103519944",
  email: "adityashrivastav022@gmail.com",
  location: "Mandideep, Madhya Pradesh",
  mapQuery: "Mandideep, Madhya Pradesh, India",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "HR Courses" },
  { to: "/resources", label: "Resources" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact Us" },
] as const;

export type ServiceGroup = {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  items: { name: string; desc: string }[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "compliance",
    title: "HR & Compliance",
    tagline: "Stay inspection-ready, every month.",
    icon: icons.shield,
    items: [
      { name: "PF Compliance", desc: "Registration, monthly ECR, UAN, KYC, claims and EPFO correspondence." },
      { name: "ESIC Compliance", desc: "Employer & employee registration, monthly contributions and returns." },
      { name: "Labour Law & Compliance", desc: "Registers, licences and filings under central & state labour laws." },
      { name: "POSH Compliance", desc: "IC constitution, policy drafting, awareness sessions and annual reports." },
      { name: "Labour Welfare", desc: "Labour Welfare Fund contributions and welfare scheme management." },
      { name: "Statutory Compliance", desc: "End-to-end compliance calendar, audits and statutory documentation." },
    ],
  },
  {
    id: "payroll",
    title: "Payroll & HR Operations",
    tagline: "Accurate salaries. Clean records.",
    icon: icons.payroll,
    items: [
      { name: "Payroll Management", desc: "Monthly payroll, payslips, deductions and full & final settlements." },
      { name: "Employee Onboarding", desc: "Offer letters, joining kits, documentation and induction." },
      { name: "HR Documentation", desc: "Appointment letters, records, registers and employee files." },
      { name: "HR Policy & Process", desc: "Handbooks, SOPs and policies tailored to your business." },
      { name: "Attendance & Leave", desc: "Attendance tracking, leave rules and monthly reconciliation." },
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    tagline: "The right people, faster.",
    icon: icons.recruit,
    items: [
      { name: "Recruitment & Staffing", desc: "Sourcing, screening and placement for every level." },
      { name: "Bulk Hiring", desc: "High-volume hiring drives for plants, sites and operations." },
      { name: "Executive Hiring", desc: "Discreet search for senior and leadership roles." },
      { name: "Recruitment Consultancy", desc: "Hiring process design, JDs and interview frameworks." },
      { name: "HR Intern / Fresher Hiring", desc: "Trained HR freshers and interns ready to contribute." },
    ],
  },
  {
    id: "accounts",
    title: "Accounts & Taxation",
    tagline: "Books and taxes, handled.",
    icon: icons.tax,
    items: [
      { name: "Accounting & Bookkeeping", desc: "Day-to-day books, ledgers and monthly MIS." },
      { name: "GST Services", desc: "Registration, monthly/quarterly returns and reconciliation." },
      { name: "Professional Tax", desc: "PT registration, payments and returns." },
      { name: "TDS", desc: "TDS deduction, deposits, returns and Form 16/16A." },
      { name: "Taxation Compliance", desc: "Income tax filings and year-round tax compliance." },
    ],
  },
];

export type Course = {
  slug: string;
  title: string;
  short: string;
  duration: string;
  icon: string;
  featured?: boolean;
  overview: string;
  whoCanJoin: string[];
  modules: string[];
  practical: string[];
  assignments: string[];
  certificate: string;
  fees: string;
  batches: string[];
  dayPlan?: { day: number; topic: string }[];
};

const FEE_TBC = "Contact us for current fees";

export const COURSES: Course[] = [
  {
    slug: "hr-practical-training",
    title: "HR Practical Training",
    short: "Learn HR from start to end in 15 practical days.",
    duration: "15 Days",
    icon: icons.cap,
    featured: true,
    overview:
      "A hands-on programme that takes you through the complete HR cycle — from hiring and onboarding to PF, ESIC, payroll, labour laws and POSH — using real formats, portals and case work.",
    whoCanJoin: ["HR freshers & graduates", "MBA / BBA students", "Working professionals moving into HR", "Small business owners"],
    modules: ["PF & ESIC", "Recruitment", "Payroll", "Labour Laws", "Employee Onboarding", "HR Documentation", "POSH", "HR Policies", "Practical Assignments"],
    practical: ["Live EPFO & ESIC portal walkthroughs", "Prepare a real monthly payroll", "Draft offer & appointment letters"],
    assignments: ["Salary structure workbook", "Onboarding checklist", "Final HR case study"],
    certificate: "RK Associate certificate of completion after the Day 15 assessment.",
    fees: FEE_TBC,
    batches: ["Weekday batch", "Weekend batch", "Offline at Mandideep"],
    dayPlan: [
      { day: 1, topic: "HR Fundamentals" },
      { day: 2, topic: "Recruitment & JD" },
      { day: 3, topic: "Employee Onboarding" },
      { day: 4, topic: "PF Basics" },
      { day: 5, topic: "EPFO Practical" },
      { day: 6, topic: "ESIC Basics" },
      { day: 7, topic: "ESIC Practical" },
      { day: 8, topic: "Payroll" },
      { day: 9, topic: "Salary Structure" },
      { day: 10, topic: "Labour Laws" },
      { day: 11, topic: "POSH" },
      { day: 12, topic: "HR Policies" },
      { day: 13, topic: "L&D" },
      { day: 14, topic: "Practical Assignment" },
      { day: 15, topic: "Assessment & Certification" },
    ],
  },
  {
    slug: "pf-esic-practical",
    title: "PF & ESIC Practical Course",
    short: "Master EPFO and ESIC portals with real filings.",
    duration: "Short course",
    icon: icons.shield,
    overview: "Everything an HR executive needs to run PF and ESIC compliance confidently — registrations, monthly returns, claims and corrections.",
    whoCanJoin: ["HR & admin executives", "Accounts staff handling compliance", "HR freshers"],
    modules: ["PF & ESIC applicability", "UAN & KYC", "Monthly ECR filing", "ESIC contributions", "Claims & transfers", "Inspections & notices"],
    practical: ["Portal-based ECR filing", "ESIC monthly contribution", "Claim settlement walkthrough"],
    assignments: ["Prepare a month's PF & ESIC challan"],
    certificate: "Certificate of completion.",
    fees: FEE_TBC,
    batches: ["Weekday batch", "Weekend batch"],
  },
  {
    slug: "payroll-compensation",
    title: "Payroll & Compensation",
    short: "Build salary structures and run payroll end-to-end.",
    duration: "Short course",
    icon: icons.payroll,
    overview: "Learn to design CTC structures, calculate statutory deductions and process payroll accurately every month.",
    whoCanJoin: ["HR & payroll executives", "Accounts professionals", "HR freshers"],
    modules: ["CTC & salary structure", "Statutory deductions", "Payroll processing", "Full & final settlement", "Bonus & gratuity"],
    practical: ["Run a 20-employee payroll in Excel"],
    assignments: ["Salary structure design", "F&F calculation"],
    certificate: "Certificate of completion.",
    fees: FEE_TBC,
    batches: ["Weekday batch", "Weekend batch"],
  },
  {
    slug: "recruitment-talent-acquisition",
    title: "Recruitment & Talent Acquisition",
    short: "Source, screen and close candidates like a pro.",
    duration: "Short course",
    icon: icons.recruit,
    overview: "A practical guide to the full hiring funnel — JDs, sourcing, screening, interviews and offer closure.",
    whoCanJoin: ["Aspiring recruiters", "HR freshers", "Hiring managers"],
    modules: ["Writing JDs", "Sourcing on job portals", "Screening & interviews", "Offer & joining", "Hiring metrics"],
    practical: ["Live sourcing exercise", "Mock interviews"],
    assignments: ["Hiring plan for a sample role"],
    certificate: "Certificate of completion.",
    fees: FEE_TBC,
    batches: ["Weekday batch", "Weekend batch"],
  },
  {
    slug: "labour-law-compliance",
    title: "Labour Law & Compliance",
    short: "Understand the laws every HR must know.",
    duration: "Short course",
    icon: icons.handshake,
    overview: "Key central and state labour laws, registers, returns and inspection handling, explained with real cases.",
    whoCanJoin: ["HR & compliance executives", "Factory & site admins", "Business owners"],
    modules: ["Factories & Shops Act", "Minimum Wages & Payment of Wages", "Bonus & Gratuity", "Contract Labour", "Registers & returns"],
    practical: ["Prepare statutory registers"],
    assignments: ["Compliance calendar for a factory"],
    certificate: "Certificate of completion.",
    fees: FEE_TBC,
    batches: ["Weekend batch"],
  },
  {
    slug: "hr-generalist-training",
    title: "HR Generalist Training",
    short: "Become the all-round HR every company needs.",
    duration: "Short course",
    icon: icons.growth,
    overview: "Cover the generalist role end-to-end: hiring, onboarding, engagement, performance, policies and exits.",
    whoCanJoin: ["HR freshers", "HR executives seeking growth"],
    modules: ["HR operations", "Employee engagement", "Performance management", "HR policies", "Exit management"],
    practical: ["Design an engagement calendar"],
    assignments: ["HR generalist case study"],
    certificate: "Certificate of completion.",
    fees: FEE_TBC,
    batches: ["Weekday batch", "Weekend batch"],
  },
  {
    slug: "posh-training",
    title: "POSH Training",
    short: "Build a safe workplace under the POSH Act.",
    duration: "Short course",
    icon: icons.certificate,
    overview: "Understand the POSH Act, set up an Internal Committee and handle complaints with fairness and confidentiality.",
    whoCanJoin: ["HR professionals", "IC members", "Managers & business owners"],
    modules: ["POSH Act basics", "Internal Committee", "Complaint handling", "Inquiry process", "Annual reporting"],
    practical: ["Mock inquiry"],
    assignments: ["Draft a POSH policy"],
    certificate: "Certificate of completion.",
    fees: FEE_TBC,
    batches: ["On request for organisations"],
  },
];

export const INDUSTRIES = [
  "Manufacturing",
  "Engineering",
  "Construction",
  "IT / Services",
  "Retail",
  "Logistics",
  "Small & Medium Businesses",
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Active clients" },
  { value: 4, suffix: "", label: "Service practices" },
  { value: 7, suffix: "", label: "Industries served" },
  { value: 15, suffix: "-day", label: "Practical HR course" },
] as const;

export const WHY_US = [
  { title: "One partner, three roles", desc: "HR consultancy, compliance partner and training institute under one roof.", icon: icons.handshake },
  { title: "Compliance-first", desc: "PF, ESIC, labour law and POSH handled on time, every time.", icon: icons.shield },
  { title: "Practical, not theory", desc: "Our trainers run real payrolls and filings — and teach exactly that.", icon: icons.cap },
  { title: "Built for growing teams", desc: "From 10-person shops to large plants across Madhya Pradesh.", icon: icons.growth },
];

export const TESTIMONIALS = [
  { quote: "Our PF and ESIC filings used to be a monthly headache. RK Associate made it predictable and on time.", name: "Plant HR Head", org: "Manufacturing unit, Mandideep" },
  { quote: "The 15-day course gave me real portal experience. I got my first HR job within a month.", name: "HR Trainee", org: "15-Day HR Practical Training" },
  { quote: "They handled our bulk hiring drive and onboarding paperwork end-to-end.", name: "Operations Manager", org: "Logistics company" },
];

export const RESOURCE_CATEGORIES = [
  { id: "pf", title: "PF Updates", desc: "EPFO circulars, contribution changes and deadlines.", icon: icons.shield },
  { id: "esic", title: "ESIC Updates", desc: "Coverage limits, contribution rates and notices.", icon: icons.certificate },
  { id: "labour", title: "Labour Law Updates", desc: "Labour codes, wage revisions and state rules.", icon: icons.handshake },
  { id: "tax", title: "GST & Tax Updates", desc: "GST, TDS and professional tax changes.", icon: icons.tax },
  { id: "articles", title: "HR Articles", desc: "Practical guides for HR teams and freshers.", icon: icons.folder },
  { id: "templates", title: "HR Templates", desc: "Offer letters, policies, checklists and registers.", icon: icons.payroll },
] as const;

export const FAQS = [
  { q: "Do you handle PF and ESIC for small companies?", a: "Yes. We manage registrations and monthly compliance for businesses of every size, including small teams." },
  { q: "Is the HR training suitable for freshers?", a: "Absolutely. The 15-day programme starts from HR fundamentals and builds up to real portal work and assignments." },
  { q: "Will I get a certificate?", a: "Yes, every course ends with an assessment and an RK Associate certificate of completion." },
  { q: "Do you offer weekend batches?", a: "Yes, weekday and weekend batches run regularly. Ask us for the next start date." },
  { q: "Which areas do you serve?", a: "We're based in Mandideep and work with businesses across Madhya Pradesh." },
];
