"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeInUp,
  reducedMotionFade,
  reducedMotionStagger,
  staggerContainer,
} from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "li";
}

export function AnimatedGroup({ children, className, as = "div" }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={prefersReducedMotion ? reducedMotionStagger : staggerContainer}
    >
      {children}
    </Component>
  );
}

export function AnimatedItem({ children, className, as = "div" }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={prefersReducedMotion ? reducedMotionFade : fadeInUp}
    >
      {children}
    </Component>
  );
}
