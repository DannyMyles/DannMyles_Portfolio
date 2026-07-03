import { profile } from "@/data/profile";

const icons = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.83c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.5 8.75h3.9V21H3.5V8.75Zm6.79 0h3.74v1.68h.05c.52-.98 1.8-2.02 3.7-2.02 3.95 0 4.68 2.6 4.68 5.98V21h-3.9v-5.86c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-3.9V8.75Z" />
  ),
  twitter: (
    <path d="M18.9 2H22l-7.2 8.23L23.3 22H16.9l-5-6.53L6.1 22H3l7.7-8.8L2.7 2h6.6l4.5 5.97L18.9 2Zm-1.1 18.17h1.72L7.3 3.75H5.45l12.35 16.42Z" />
  ),
  email: (
    <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm1.8.5 7.2 5.4L19.2 6H4.8Zm14.7 1.3-6.93 5.2a1.5 1.5 0 0 1-1.74 0L4.5 7.3v11.2h15V7.3Z" />
  ),
  whatsapp: (
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm0 1.8c2.13 0 4.13.83 5.64 2.34a7.93 7.93 0 0 1 2.33 5.63c0 4.39-3.57 7.96-7.97 7.96a7.97 7.97 0 0 1-4.06-1.11l-.29-.17-3.14.82.84-3.06-.19-.31a7.9 7.9 0 0 1-1.22-4.24c0-4.4 3.58-7.96 8.06-7.96Zm-4.42 4.5c-.16 0-.42.06-.64.31-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.13.16 1.7 2.6 4.14 3.65 2.03.87 2.44.7 2.88.66.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.2-.48-.4-.4-.54-.41-.14-.01-.3-.01-.46-.01Z" />
  ),
};

const links = [
  { key: "github" as const, href: profile.socials.github, label: "GitHub profile" },
  { key: "linkedin" as const, href: profile.socials.linkedin, label: "LinkedIn profile" },
  { key: "twitter" as const, href: profile.socials.twitter, label: "X (Twitter) profile" },
  { key: "whatsapp" as const, href: profile.whatsapp, label: "Chat on WhatsApp" },
  { key: "email" as const, href: `mailto:${profile.email}`, label: "Send an email" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a
            href={href}
            target={key === "email" ? undefined : "_blank"}
            rel={key === "email" ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4.5"
            >
              {icons[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
