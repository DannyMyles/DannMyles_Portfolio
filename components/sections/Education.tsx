import { education } from "@/data/education";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";

export function Education() {
  return (
    <SectionContainer id="education" eyebrow="Education" title="Foundations">
      <AnimatedGroup as="ul" className="grid gap-4 sm:grid-cols-2">
        {education.map((entry) => (
          <AnimatedItem
            as="li"
            key={entry.credential}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <p className="font-mono text-sm text-foreground/50">{entry.period}</p>
            <h3 className="mt-2 text-base font-semibold text-foreground">{entry.credential}</h3>
            <p className="mt-1 text-sm font-medium text-foreground/60">{entry.institution}</p>
            {entry.detail && (
              <p className="mt-3 text-sm leading-6 text-foreground/70">{entry.detail}</p>
            )}
          </AnimatedItem>
        ))}
      </AnimatedGroup>
    </SectionContainer>
  );
}
