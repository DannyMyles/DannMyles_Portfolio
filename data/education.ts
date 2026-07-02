export interface Education {
  credential: string;
  institution: string;
  period: string;
  detail?: string;
}

export const education: Education[] = [
  {
    credential: "Certificate in Software Development",
    institution: "Moringa School",
    period: "Jul 2021 – Feb 2022",
    detail: "Full-Stack Development, specializing in Python-Django and JavaScript frameworks.",
  },
  {
    credential: "Diploma in Information Technology",
    institution: "KCA University",
    period: "2019",
  },
];
