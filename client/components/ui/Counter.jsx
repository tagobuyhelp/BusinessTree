"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from "framer-motion";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

function parseTarget(input) {
  if (typeof input === "number") return { value: input, prefix: "", suffix: "", decimals: 0 };
  const raw = String(input ?? "");
  const match = raw.match(/^\s*([^0-9+-]*)([+-]?\d+(?:\.\d+)?)(.*)\s*$/);
  if (!match) return { value: 0, prefix: "", suffix: "", decimals: 0 };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { value: Number(num), prefix: prefix || "", suffix: suffix || "", decimals };
}

export function Counter({
  to,
  duration = 1.2,
  className,
  "aria-label": ariaLabel
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const parsed = useMemo(() => parseTarget(to), [to]);
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useMotionValueEvent(motionValue, "change", (latest) => {
    const fixed = Number(latest).toFixed(parsed.decimals);
    setDisplay(fixed);
  });

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setDisplay(parsed.value.toFixed(parsed.decimals));
      return;
    }

    const controls = animate(motionValue, parsed.value, {
      duration,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [duration, inView, motionValue, parsed.decimals, parsed.value, reduceMotion]);

  return (
    <span
      ref={ref}
      className={cx("font-body tabular-nums", className)}
      aria-label={ariaLabel || `${parsed.prefix}${parsed.value}${parsed.suffix}`}
    >
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}

