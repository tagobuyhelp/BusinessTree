"use client";

import React, { useEffect, useMemo, useState } from "react";
import { LazyMotion, domAnimation, m, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

function isFinePointerDesktop() {
  if (typeof window === "undefined") return false;
  const fine = window.matchMedia?.("(pointer: fine)")?.matches;
  const wide = window.matchMedia?.("(min-width: 1024px)")?.matches;
  return Boolean(fine && wide);
}

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const size = useMotionValue(12);
  const opacity = useMotionValue(0);

  const x = useTransform([mouseX, size], ([mx, s]) => mx - s / 2);
  const y = useTransform([mouseY, size], ([my, s]) => my - s / 2);

  const springX = useSpring(x, { stiffness: 900, damping: 55, mass: 0.15 });
  const springY = useSpring(y, { stiffness: 900, damping: 55, mass: 0.15 });
  const springSize = useSpring(size, { stiffness: 700, damping: 50, mass: 0.15 });
  const springOpacity = useSpring(opacity, { stiffness: 400, damping: 40, mass: 0.2 });

  const interactiveSelector = useMemo(
    () =>
      [
        "a",
        "button",
        "[role='button']",
        "article[tabindex='0']",
        "[data-cursor='hover']"
      ].join(","),
    []
  );

  useEffect(() => {
    if (reduceMotion) return;
    setEnabled(isFinePointerDesktop());

    const onResize = () => setEnabled(isFinePointerDesktop());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      opacity.set(1);
    };

    const onLeave = () => opacity.set(0);

    const onOver = (e) => {
      const target = e.target?.closest?.(interactiveSelector);
      if (!target) return;
      size.set(34);
    };

    const onOut = (e) => {
      const from = e.target?.closest?.(interactiveSelector);
      const to = e.relatedTarget?.closest?.(interactiveSelector);
      if (!from) return;
      if (to) return;
      size.set(12);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", onLeave);
    document.addEventListener("pointerover", onOver, true);
    document.addEventListener("pointerout", onOut, true);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("pointerover", onOver, true);
      document.removeEventListener("pointerout", onOut, true);
    };
  }, [enabled, interactiveSelector, mouseX, mouseY, opacity, size]);

  if (!enabled || reduceMotion) return null;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] rounded-full border border-accent bg-accent opacity-20 mix-blend-multiply"
        style={{
          x: springX,
          y: springY,
          width: springSize,
          height: springSize,
          opacity: springOpacity
        }}
      />
    </LazyMotion>
  );
}
