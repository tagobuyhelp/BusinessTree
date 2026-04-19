"use client";

import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    mass: 0.2
  });

  if (reduceMotion) return null;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ scaleX }}
      />
    </LazyMotion>
  );
}
