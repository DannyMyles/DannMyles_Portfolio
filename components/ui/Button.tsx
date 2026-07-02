"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"a"> {
  variant?: "primary" | "ghost";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  ghost: "border border-border text-foreground hover:border-accent hover:text-accent",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
