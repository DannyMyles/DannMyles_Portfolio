import type { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 border-t border-border py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-foreground/70">{description}</p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
