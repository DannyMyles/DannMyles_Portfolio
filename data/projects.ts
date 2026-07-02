export interface Project {
  slug: string;
  title: string;
  description: string;
  links: { label: string; url: string }[];
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "nexagen",
    title: "NexaGen Solutions & ERP",
    description:
      "Marketing site and the live ERPNext/Frappe-based ERP+POS product for a Nairobi ERP implementation consultancy — unified finance, HR, and operations management, Kenya eTIMS tax compliance, and M-Pesa integration for East African clients.",
    links: [
      { label: "Marketing site", url: "https://nexagensolutions.com/" },
      { label: "ERP product", url: "https://erp.nexagensolutions.com/" },
    ],
    tags: ["ERPNext", "Frappe", "Python", "eTIMS", "M-Pesa"],
    featured: true,
  },
  {
    slug: "istc",
    title: "International Safety Training Centre",
    description:
      "Website for a Nairobi-based professional safety-training and certification organization — occupational safety, fire safety, and first-aid course catalogs plus safety audits, serving 38,000+ professionals trained.",
    links: [{ label: "Visit site", url: "https://www.istc.co.ke/" }],
    tags: ["Web", "Course catalog", "Compliance"],
  },
  {
    slug: "source-of-adventure",
    title: "Source of Adventure",
    description:
      "Adventure and fitness lifestyle booking platform — guided tours, fitness classes, corporate events, gift cards, gallery, and newsletter signup.",
    links: [{ label: "Visit site", url: "https://sos-six-bay.vercel.app/" }],
    tags: ["Next.js", "React", "Booking"],
  },
  {
    slug: "marksila254",
    title: "Marksila254 Fitness",
    description:
      "Personal-trainer marketing and booking site for a Nairobi-based coach — one-on-one training, group classes, nutrition coaching, testimonials, and scheduling for 500+ clients.",
    links: [{ label: "Visit site", url: "https://fitness-three-pearl.vercel.app/" }],
    tags: ["Next.js", "Booking", "Marketing"],
  },
];
