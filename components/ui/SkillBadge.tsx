export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition-transform hover:scale-105 hover:border-accent hover:text-accent">
      {label}
    </span>
  );
}
