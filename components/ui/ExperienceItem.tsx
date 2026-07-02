import type { Experience } from "@/data/experience";

export function ExperienceItem({ entry, isLast }: { entry: Experience; isLast: boolean }) {
  return (
    <div className="relative flex gap-6 pb-10">
      <div className="flex flex-col items-center">
        <span className="mt-1.5 size-3 shrink-0 rounded-full border-2 border-accent bg-background" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />}
      </div>

      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
          <span className="font-mono text-sm text-foreground/50">
            {entry.startDate} – {entry.endDate}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-foreground/60">
          {[entry.company, entry.employmentType, entry.locationType].filter(Boolean).join(" · ")}
        </p>
        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm leading-6 text-foreground/70">
              <span aria-hidden="true" className="text-accent">
                –
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
