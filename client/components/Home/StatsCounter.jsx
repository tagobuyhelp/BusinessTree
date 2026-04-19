"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from "framer-motion";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

export function StatsCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.1,
  className,
  "aria-label": ariaLabel
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  const target = useMemo(() => {
    const num = Number(value);
    return Number.isFinite(num) ? num : 0;
  }, [value]);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setDisplayValue(target);
      return;
    }

    const controls = animate(motionValue, target, {
      duration,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [duration, inView, motionValue, reduceMotion, target]);

  return (
    <span
      ref={ref}
      className={cx("tabular-nums", className)}
      aria-label={ariaLabel || `${prefix}${target}${suffix}`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
