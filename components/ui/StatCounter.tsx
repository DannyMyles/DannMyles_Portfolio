"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function StatCounter({ value, label }: { value: string; label: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (numeric === null || prefersReducedMotion || !inView) return;

    const duration = 900;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * (numeric as number)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, prefersReducedMotion]);

  const shown = numeric === null ? value : `${prefersReducedMotion ? numeric : display}${suffix}`;

  return (
    <div className="text-center sm:text-left">
      <p ref={ref} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {shown}
      </p>
      <p className="mt-1 text-sm text-foreground/60">{label}</p>
    </div>
  );
}
