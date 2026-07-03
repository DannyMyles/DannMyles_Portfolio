import { profile } from "@/data/profile";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { StatCounter } from "@/components/ui/StatCounter";

export function About() {
  return (
    <SectionContainer
      id="about"
      eyebrow="About"
      title="A full-stack engineer who ships"
      description={profile.summary}
    >
      <AnimatedGroup as="ul" className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {profile.stats.map((stat) => (
          <AnimatedItem as="li" key={stat.label}>
            <StatCounter value={stat.value} label={stat.label} />
          </AnimatedItem>
        ))}
      </AnimatedGroup>

      <AnimatedGroup as="ul" className="mt-12 grid gap-4 sm:grid-cols-3">
        {profile.highlights.map((highlight) => (
          <AnimatedItem
            as="li"
            key={highlight}
            className="rounded-2xl border border-border bg-surface p-6 text-sm leading-6 text-foreground/80"
          >
            {highlight}
          </AnimatedItem>
        ))}
      </AnimatedGroup>
    </SectionContainer>
  );
}
