"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

function Icon({ name, className, "aria-hidden": ariaHidden = true }) {
  return (
    <span
      className={cx("material-symbols-outlined select-none leading-none", className)}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}

export function ServiceCard({
  href,
  icon,
  title,
  description,
  backgroundImage,
  featured = false,
  badge,
  ctaLabel = "Learn more →",
  showCta = true,
  descriptionLines = 2,
  compact = false
}) {
  const reduceMotion = useReducedMotion();
  const clampClass = descriptionLines === 1 ? "line-clamp-1" : descriptionLines === 2 ? "line-clamp-2" : "";

  return (
    <LazyMotion features={domAnimation}>
      <Link
        href={href}
        className={cx(
          "group block h-full rounded-xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        )}
        aria-label={`${title}. ${ctaLabel}`}
      >
        <m.div
          className={cx(
            "relative flex h-full rounded-xl border",
            backgroundImage ? "border-green-100 bg-white/80 backdrop-blur" : "border-border bg-surface",
            backgroundImage && "overflow-hidden",
            compact ? "items-center gap-3 p-4 lg:flex-col lg:items-start lg:p-6" : "flex-col p-6",
            featured && "ring-1 ring-accent"
          )}
          whileHover={reduceMotion || compact ? undefined : { y: -6, scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 34 }}
        >
          {backgroundImage ? (
            <>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 overflow-hidden sm:w-1/2">
                <Image
                  src={backgroundImage}
                  alt=""
                  fill
                  className={cx(
                    "object-cover ",
                    "transition duration-300 ease-out",
                    "group-hover:opacity-[0.15] group-hover:scale-[1.05]",
                  )}
                  sizes="(min-width: 640px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            </>
          ) : null}

          {badge ? (
            <div className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-onAccent">
              {badge}
            </div>
          ) : null}

          <div className={cx("relative z-10 flex h-full flex-col", backgroundImage && "pr-14 sm:pr-20")}>
            <m.div
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-bg"
              whileHover={reduceMotion || compact ? undefined : { rotate: featured ? 6 : 4, scale: 1.05 }}
              transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 26 }}
            >
              <Icon name={icon} className="text-[24px] text-accent" />
            </m.div>

            <div className={cx(compact ? "min-w-0 flex-1 lg:w-full lg:flex-none" : "flex-1")}>
              <div className={cx("text-body font-semibold text-textPrimary", compact ? "lg:mt-4" : "mt-4")}>{title}</div>
              <div className={cx("text-small text-textSecondary", clampClass, compact ? "mt-1 lg:mt-2" : "mt-2")}>
                {description}
              </div>
            </div>

            {showCta ? (
              backgroundImage ? (
                <div
                  className={cx(
                    "mt-5 inline-flex h-10 w-fit items-center justify-center gap-2 rounded-lg border border-green-200 bg-white/70 px-4 text-small font-semibold text-textPrimary shadow-sm backdrop-blur",
                    "transition-colors duration-200 ease-out group-hover:bg-white"
                  )}
                >
                  <span>{ctaLabel}</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </div>
              ) : (
                <div
                  className={cx(
                    "inline-flex items-center gap-2 text-small font-medium text-accent",
                    compact ? "ml-auto lg:ml-0 lg:mt-5" : "mt-5"
                  )}
                >
                  <span>{ctaLabel}</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </div>
              )
            ) : null}
          </div>
        </m.div>
      </Link>
    </LazyMotion>
  );
}
