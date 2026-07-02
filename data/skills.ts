export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "ERPNext/Frappe"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    category: "Practices & Tools",
    items: ["Git/GitHub", "Agile/Scrum", "Feature-flag rollouts", "FHIR/EHR integration"],
  },
];
