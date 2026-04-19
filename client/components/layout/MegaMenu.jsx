"use client";

import React, { forwardRef, memo, useCallback, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";

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

const DEFAULT_GROUPS = [
  {
    title: "Digital Marketing",
    items: [
      {
        href: "/services/seo",
        icon: "trending_up",
        title: "SEO",
        description: "Rank higher and convert intent-driven traffic."
      },
      {
        href: "/services/performance-ads",
        icon: "campaign",
        title: "Performance Ads",
        description: "Paid growth with clear reporting and ROI."
      },
      {
        href: "/services/social-media",
        icon: "insights",
        title: "Social Media",
        description: "Build awareness and demand across channels."
      }
    ]
  },
  {
    title: "Development",
    items: [
      {
        href: "/services/web-development",
        icon: "code",
        title: "Web Development",
        description: "High-performance websites built to scale."
      },
      {
        href: "/services/ecommerce",
        icon: "shopping_cart",
        title: "E-commerce",
        description: "Optimized storefronts that increase revenue."
      },
      {
        href: "/services/landing-pages",
        icon: "public",
        title: "Landing Pages",
        description: "Conversion-first pages for campaigns and funnels."
      }
    ]
  },
  {
    title: "Branding",
    items: [
      {
        href: "/services/linkedin-branding",
        icon: "badge",
        title: "LinkedIn Branding",
        description: "Premium positioning for founders and teams."
      },
      {
        href: "/services/influencer-marketing",
        icon: "groups",
        title: "Influencer Marketing",
        description: "Partner campaigns that build trust fast."
      },
      {
        href: "/services/pr-services",
        icon: "newsmode",
        title: "PR Services",
        description: "Earned media that strengthens credibility."
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.045 }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.16 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 }
};

export const MegaMenu = memo(
  forwardRef(function MegaMenu(
    { id = "services-mega-menu", isOpen, onClose, onMouseEnter, onMouseLeave, onItemClick },
    forwardedRef
  ) {
    const internalRef = useRef(null);
    const reduceMotion = useReducedMotion();

    const setRefs = useCallback(
      (node) => {
        internalRef.current = node;
        if (!forwardedRef) return;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else forwardedRef.current = node;
      },
      [forwardedRef]
    );

    useEffect(() => {
      if (!isOpen) return;
      const onKeyDown = (e) => {
        if (e.key === "Escape") onClose?.();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onClose]);

    const groups = useMemo(() => DEFAULT_GROUPS, []);

    const handleBlur = useCallback(
      (e) => {
        const next = e.relatedTarget;
        if (!next) return;
        if (internalRef.current?.contains(next)) return;
        onClose?.();
      },
      [onClose]
    );

    return (
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isOpen ? (
            <m.div
              id={id}
              ref={setRefs}
              role="menu"
              aria-label="Services"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onBlur={handleBlur}
              className={cx("fixed left-0 right-0 top-20 z-50", "border-b border-border bg-surface shadow-sm")}
              variants={containerVariants}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "show"}
              exit={reduceMotion ? undefined : "exit"}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 py-6 md:grid-cols-4">
                  {groups.map((group) => (
                    <m.div key={group.title} className="space-y-3" variants={itemVariants}>
                      <div className="text-small font-medium text-textPrimary">{group.title}</div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <m.div variants={itemVariants}>
                              <Link
                                href={item.href}
                                onClick={onItemClick}
                                className={cx(
                                  "group flex gap-3 rounded-lg border border-transparent p-3",
                                  "hover:border-border hover:bg-bg",
                                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                                )}
                              >
                                <Icon
                                  name={item.icon}
                                  className="mt-0.5 text-[20px] text-textSecondary group-hover:text-textPrimary"
                                />
                                <div className="min-w-0">
                                  <div className="text-small font-medium text-textPrimary">{item.title}</div>
                                  <div className="mt-0.5 text-small text-textSecondary">{item.description}</div>
                                </div>
                              </Link>
                            </m.div>
                          </li>
                        ))}
                      </ul>
                    </m.div>
                  ))}

                  <m.div variants={itemVariants}>
                    <m.div
                      className="rounded-xl border border-border bg-bg p-5"
                      whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                      transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 32 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <Icon name="auto_awesome" className="text-[22px] text-accent" />
                          <div>
                            <div className="flex items-center gap-2">
                              <div className="text-small font-medium text-textPrimary">
                                Featured: Growth Sprint
                              </div>
                              <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium text-onAccent">
                                Most Popular
                              </span>
                            </div>
                            <div className="mt-1 text-small text-textSecondary">
                              A focused 2-week engagement to uncover quick wins and roadmap priorities.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button asChild>
                          <Link href="/contact" onClick={onItemClick}>
                            Start Growing Now
                          </Link>
                        </Button>
                      </div>
                    </m.div>
                  </m.div>
                </div>
              </div>
            </m.div>
          ) : null}
        </AnimatePresence>
      </LazyMotion>
    );
  })
);
