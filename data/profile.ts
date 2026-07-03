import { yearsSince } from "@/lib/dates";

const CAREER_START_DATE = "2022-06-01";

export const profile = {
  fullName: "Muhadi Dancun",
  preferredName: "Danny",
  title: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "ERPNext & Frappe Developer",
    "Python Backend Engineer",
    "React & Angular Engineer",
    "Node.js Developer",
  ],
  tagline:
    "I build production ERPNext/Frappe systems in Python, APIs in Node.js, and interfaces in React and Angular — the full stack a real business runs on.",
  summary:
    "I'm a full-stack developer who's equally at home customizing a live ERPNext/Frappe system in Python and building the React or Angular interface on top of it. Since 2022 I've shipped production UI, rebuilt ERP business logic, and designed a feature-flag workflow that cut release time by 60% — across banking, healthcare, and energy-sector environments where getting it right matters.",
  email: "muhadiwawire@gmail.com",
  phone: "+254 758 269 725",
  phoneHref: "+254758269725",
  whatsapp: "https://wa.me/254758269725",
  location: "Nairobi, Kenya",
  photo: "/images/me.jpg",
  careerStartDate: CAREER_START_DATE,
  yearsExperience: yearsSince(CAREER_START_DATE),
  socials: {
    github: "https://github.com/DannyMyles",
    linkedin: "https://www.linkedin.com/in/muhadi-dancun-a0a6b8198/",
    twitter: "https://twitter.com/DannyMyles9",
  },
  highlights: [
    "Designed a feature-flag release workflow that cut time-to-ship by 60% and eliminated recurring QA bottlenecks.",
    "Customize a live ERP system's HR, CRM, and admin logic in Python/Frappe — business-critical work most frontend-first developers never touch.",
    "Ship production software end-to-end: React.js/Angular interfaces, Node.js/Express APIs, and the MongoDB/MariaDB data layers underneath.",
  ],
  stats: [
    { value: `${yearsSince(CAREER_START_DATE)}+`, label: "Years in production" },
    { value: "4", label: "Products shipped" },
    { value: "60%", label: "Faster release cycles" },
    { value: "3", label: "Industries served" },
  ],
} as const;
