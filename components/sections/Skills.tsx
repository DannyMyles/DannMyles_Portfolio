import { skills, coreStack } from "@/data/skills";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function Skills() {
  return (
    <SectionContainer
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for"
      description="Comfortable owning a feature from interface to database — ERPNext/Frappe and Python on the backend, Node.js APIs, and React or Angular on the front end."
    >
      <AnimatedGroup as="ul" className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {coreStack.map(({ name, note }) => (
          <AnimatedItem
            as="li"
            key={name}
            className="group rounded-2xl border border-border bg-surface p-4 text-center transition-colors hover:border-accent"
          >
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="mt-1 text-xs text-foreground/50 group-hover:text-accent">{note}</p>
          </AnimatedItem>
        ))}
      </AnimatedGroup>

      <p className="mt-12 mb-6 text-sm font-semibold tracking-wide text-foreground/60 uppercase">
        Also comfortable with
      </p>
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
