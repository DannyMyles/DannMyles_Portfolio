import { projects } from "@/data/projects";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <SectionContainer
      id="projects"
      eyebrow="Projects"
      title="Things I've shipped"
      description="Real products, live in production, serving real businesses — not tutorial clones. From a full ERP rollout to booking platforms running real client operations."
    >
      <AnimatedGroup as="ul" className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <AnimatedItem as="li" key={project.slug} className={project.featured ? "sm:col-span-2" : ""}>
            <ProjectCard project={project} />
          </AnimatedItem>
        ))}
      </AnimatedGroup>
    </SectionContainer>
  );
}
