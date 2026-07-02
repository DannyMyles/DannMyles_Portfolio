import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-foreground">
            {profile.preferredName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-foreground/60">
            &copy; {year} {profile.fullName}. Built with Next.js.
          </p>
        </div>
        <SocialLinks />
        <a
          href="#top"
          className="text-sm font-medium text-foreground/60 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
