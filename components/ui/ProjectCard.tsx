"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-foreground/70">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground/60"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {link.label}
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
