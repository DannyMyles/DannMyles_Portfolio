import { experience } from "@/data/experience";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { ExperienceItem } from "@/components/ui/ExperienceItem";

export function Experience() {
  return (
    <SectionContainer
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description={`${experience.length} roles since 2022 — from React internships to owning ERPNext system customizations in production.`}
    >
      <AnimatedGroup as="ul">
        {experience.map((entry, index) => (
          <AnimatedItem as="li" key={`${entry.company}-${entry.role}-${entry.startDate}`}>
            <ExperienceItem entry={entry} isLast={index === experience.length - 1} />
          </AnimatedItem>
        ))}
      </AnimatedGroup>
    </SectionContainer>
  );
}
