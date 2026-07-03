import { profile } from "@/data/profile";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CopyButton } from "@/components/ui/CopyButton";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <SectionContainer
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="I'm open to full-time roles, contract work, and freelance projects. Reach out and I'll get back to you soon."
      className="pb-28"
    >
      <AnimatedGroup className="grid gap-12 lg:grid-cols-5">
        <AnimatedItem as="div" className="lg:col-span-2">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium text-foreground/50">Email</dt>
              <dd className="flex items-center gap-2">
                <a href={`mailto:${profile.email}`} className="font-medium text-accent hover:underline">
                  {profile.email}
                </a>
                <CopyButton value={profile.email} label="email address" />
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground/50">Phone</dt>
              <dd className="flex items-center gap-2">
                <a href={`tel:${profile.phoneHref}`} className="font-medium text-accent hover:underline">
                  {profile.phone}
                </a>
                <CopyButton value={profile.phone} label="phone number" />
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground/50">WhatsApp</dt>
              <dd>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  Message me directly
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground/50">Location</dt>
              <dd className="font-medium text-foreground">{profile.location}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-foreground/50">Find me online</p>
            <SocialLinks />
          </div>
        </AnimatedItem>

        <AnimatedItem as="div" className="lg:col-span-3">
          <ContactForm />
        </AnimatedItem>
      </AnimatedGroup>
    </SectionContainer>
  );
}
