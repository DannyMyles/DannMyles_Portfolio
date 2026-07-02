import { skills } from "@/data/skills";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function Skills() {
  return (
    <SectionContainer
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for"
      description="A working stack spanning modern frontend frameworks, backend services, and the databases and practices that hold production systems together."
    >
      <AnimatedGroup as="ul" className="grid gap-8 sm:grid-cols-2">
        {skills.map(({ category, items }) => (
          <AnimatedItem as="li" key={category}>
            <h3 className="text-sm font-semibold tracking-wide text-foreground/60 uppercase">
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <SkillBadge key={item} label={item} />
              ))}
            </div>
          </AnimatedItem>
        ))}
      </AnimatedGroup>
    </SectionContainer>
  );
}
