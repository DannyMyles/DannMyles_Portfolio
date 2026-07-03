export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CoreSkill {
  name: string;
  note: string;
}

export const coreStack: CoreSkill[] = [
  { name: "ERPNext / Frappe", note: "Business systems & ERP" },
  { name: "Python", note: "Backend & automation" },
  { name: "Node.js", note: "APIs & services" },
  { name: "React.js", note: "Interfaces" },
  { name: "Angular", note: "Enterprise frontends" },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React.js", "Angular", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "ERPNext/Frappe", "Node.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MariaDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Practices & Tools",
    items: ["Git/GitHub", "Agile/Scrum", "Feature-flag rollouts", "FHIR/EHR integration"],
  },
];
