import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { GA_ID, SITE_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.fullName} — ${profile.title}`;
const description = `${profile.title} in ${profile.location} building production web apps with React, Next.js, Node.js, and Python/ERPNext. View projects, experience, and get in touch.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${profile.fullName}`,
  },
  description,
  keywords: [
    "Full-Stack Developer",
    "ERPNext Developer",
    "Frappe Developer",
    "Python Developer",
    "Node.js Developer",
    "React Developer",
    "Angular Developer",
    "Next.js",
    "Nairobi",
    "Kenya",
    "ERPNext",
    "Frappe",
  ],
  authors: [{ name: profile.fullName, url: SITE_URL }],
  creator: profile.fullName,
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description,
    siteName: `${profile.fullName} Portfolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.preferredName,
  jobTitle: profile.title,
  description: profile.summary,
  url: SITE_URL,
  image: `${SITE_URL}${profile.photo}`,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.twitter],
  knowsAbout: [
    "ERPNext",
    "Frappe Framework",
    "Python",
    "Node.js",
    "React.js",
    "Angular",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "MariaDB",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          <div id="top" />
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
