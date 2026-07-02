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
      "A full ERP+POS product, not just a landing page: unified finance, HR, and operations management built on ERPNext/Frappe, with Kenya eTIMS tax compliance and M-Pesa integration for East African clients — plus the marketing site for the consultancy behind it.",
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
      "Course catalog and site for a safety-training organization that's certified 38,000+ professionals in occupational safety, fire safety, and first aid across Kenya, alongside its safety-audit services.",
    links: [{ label: "Visit site", url: "https://www.istc.co.ke/" }],
    tags: ["Web", "Course catalog", "Compliance"],
  },
  {
    slug: "source-of-adventure",
    title: "Source of Adventure",
    description:
      "Full booking platform for an adventure and fitness lifestyle brand — tours, classes, corporate events, and gift cards, built end-to-end in Next.js.",
    links: [{ label: "Visit site", url: "https://sos-six-bay.vercel.app/" }],
    tags: ["Next.js", "React", "Booking"],
  },
  {
    slug: "marksila254",
    title: "Marksila254 Fitness",
    description:
      "Marketing and booking site for a Nairobi personal trainer with 500+ clients — training packages, nutrition coaching, testimonials, and scheduling in one place.",
    links: [{ label: "Visit site", url: "https://fitness-three-pearl.vercel.app/" }],
    tags: ["Next.js", "Booking", "Marketing"],
  },
];
