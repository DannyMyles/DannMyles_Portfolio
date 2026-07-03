"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { RotatingText } from "@/components/ui/RotatingText";
import { fadeInUp, reducedMotionFade, staggerContainer, reducedMotionStagger } from "@/lib/motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const container = prefersReducedMotion ? reducedMotionStagger : staggerContainer;
  const item = prefersReducedMotion ? reducedMotionFade : fadeInUp;

  return (
    <section
      aria-label="Introduction"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 md:flex-row md:items-center md:justify-between"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-xl text-center md:text-left"
      >
        <motion.div variants={item} className="mb-4 flex justify-center md:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/70">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm font-medium tracking-wide text-accent"
        >
          Hi, I&apos;m {profile.preferredName} — <RotatingText words={profile.roles} />
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {profile.fullName}
        </motion.h1>
        <motion.p variants={item} className="mt-6 text-lg leading-8 text-foreground/70">
          {profile.tagline}
        </motion.p>
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="ghost">
            Get in Touch
          </Button>
        </motion.div>
        <motion.div variants={item} className="mt-8 flex justify-center md:justify-start">
          <SocialLinks />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative shrink-0"
      >
        <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent/20 blur-3xl" />
        <div className="size-40 overflow-hidden rounded-full border-2 border-border sm:size-52">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.fullName}`}
            width={208}
            height={208}
            priority
            className="size-full object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
