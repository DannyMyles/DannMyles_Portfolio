export interface Experience {
  role: string;
  company: string;
  employmentType: string;
  location: string;
  locationType: string;
  startDate: string;
  endDate: string;
  stack: string[];
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Business Support Systems Engineer",
    company: "Jaguar Petroleum",
    employmentType: "Full-time",
    location: "Nairobi, Kenya",
    locationType: "On-site",
    startDate: "Feb 2025",
    endDate: "Present",
    stack: ["Python", "ERPNext", "Frappe", "Agile"],
    bullets: [
      "Design and customize ERPNext (Frappe/Python) system logic across HR, CRM, and administrative modules to support day-to-day business operations.",
      "Build and maintain data pipelines connecting administrative workflows to core ERPNext records, keeping departmental data consistent and current.",
      "Work directly with internal stakeholders to translate operational requirements into ERPNext customizations and configuration changes.",
    ],
  },
  {
    role: "Software Developer",
    company: "Jaguar Petroleum",
    employmentType: "Full-time",
    location: "Nairobi, Kenya",
    locationType: "On-site",
    startDate: "Aug 2024",
    endDate: "Feb 2025",
    stack: ["React.js", "Next.js", "Express.js", "MongoDB"],
    bullets: [
      "Built responsive, production front-end interfaces in React.js and Next.js, with a focus on performance and usability.",
      "Implemented reusable component and state-management patterns to keep the UI maintainable as functionality expanded.",
      "Worked with backend services (Express.js, MongoDB) to wire front-end views to live application data.",
    ],
  },
  {
    role: "Software Developer",
    company: "Nathan Digital",
    employmentType: "Contract",
    location: "Nairobi, Kenya",
    locationType: "Remote",
    startDate: "Jan 2024",
    endDate: "Jun 2025",
    stack: ["Node.js", "Vue.js"],
    bullets: [
      "Designed and deployed a feature-flag release workflow (Node.js, Vue.js) to decouple deployment from release and enable safer, incremental rollouts.",
      "Reduced QA bottlenecks and cut time-to-ship by 60% by integrating flag-based toggling into the existing delivery process.",
      "Delivered this work as a contract engagement running alongside a full-time role, coordinating around both teams' release cycles.",
    ],
  },
  {
    role: "MEAN Stack Developer",
    company: "Epicle Solutions Private Limited",
    employmentType: "Full-time",
    location: "Nairobi, Kenya",
    locationType: "On-site",
    startDate: "Jun 2023",
    endDate: "Jun 2024",
    stack: ["MongoDB", "Express.js", "Angular", "Node.js"],
    bullets: [
      "Contributed to FHIR-standard integration work enabling interoperable communication between Electronic Health Record (EHR) systems.",
      "Built and maintained MEAN-stack interfaces and services supporting the data exchange.",
      "Worked within the data-handling expectations typical of healthcare environments, given the sensitivity of the records involved.",
    ],
  },
  {
    role: "Software Engineer (Internship)",
    company: "I&M Bank Ltd",
    employmentType: "Internship",
    location: "Nairobi, Kenya",
    locationType: "Hybrid",
    startDate: "Sep 2022",
    endDate: "Feb 2023",
    stack: ["JavaScript", "React.js"],
    bullets: [
      "Collaborated with in-house web designers to translate UI/UX designs into responsive, production-ready React.js interfaces.",
      "Worked within an Agile/Scrum team — sprint planning, daily stand-ups, and sprint reviews — shipping features on a predictable cadence.",
      "Worked within the code-quality and review standards expected in a regulated banking environment.",
    ],
  },
  {
    role: "React Developer (Internship)",
    company: "Plateaumed Limited",
    employmentType: "Internship",
    location: "Lagos, Nigeria",
    locationType: "Remote",
    startDate: "Jun 2022",
    endDate: "Aug 2022",
    stack: ["JavaScript", "React.js"],
    bullets: [
      "Built reusable React.js components adopted across multiple views, reducing duplicate UI code.",
      "Contributed to database design decisions, coordinating closely with backend engineers on a fully distributed team.",
      "Delivered production-ready features on a fully remote, cross-border engineering team.",
    ],
  },
];
