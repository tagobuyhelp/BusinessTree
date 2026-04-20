"use client";

import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

import { Button } from "../ui/Button";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

function Icon({ name, className, "aria-hidden": ariaHidden = true }) {
  return (
    <span
      className={cx(
        "material-symbols-outlined select-none leading-none",
        className
      )}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}

const DEFAULT_GROUPS = [
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: "trending_up",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
    items: [
      {
        href: "/services/seo",
        icon: "travel_explore",
        title: "SEO",
        description: "Rank higher and convert intent-driven traffic.",
        tag: "Popular",
      },
      {
        href: "/services/performance-ads",
        icon: "campaign",
        title: "Performance Ads",
        description: "Paid growth with clear reporting and ROI.",
      },
      {
        href: "/services/social-media",
        icon: "insights",
        title: "Social Media",
        description: "Build awareness and demand across channels.",
      },
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: "code",
    color: "text-sky-400",
    dot: "bg-sky-400",
    items: [
      {
        href: "/services/web-development",
        icon: "computer",
        title: "Web Development",
        description: "High-performance websites built to scale.",
      },
      {
        href: "/services/ecommerce",
        icon: "shopping_cart",
        title: "E-commerce",
        description: "Optimised storefronts that increase revenue.",
        tag: "New",
      },
      {
        href: "/services/landing-pages",
        icon: "web",
        title: "Landing Pages",
        description: "Conversion-first pages for campaigns and funnels.",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    icon: "auto_awesome",
    color: "text-violet-400",
    dot: "bg-violet-400",
    items: [
      {
        href: "/services/linkedin-branding",
        icon: "badge",
        title: "LinkedIn Branding",
        description: "Premium positioning for founders and teams.",
      },
      {
        href: "/services/influencer-marketing",
        icon: "groups",
        title: "Influencer Marketing",
        description: "Partner campaigns that build trust fast.",
      },
      {
        href: "/services/pr-services",
        icon: "newsmode",
        title: "PR Services",
        description: "Earned media that strengthens credibility.",
      },
    ],
  },
];

/* ── Animation variants ── */
const panelVariants = {
  hidden: { opacity: 0, y: -8, clipPath: "inset(0 0 100% 0 round 0 0 12px 12px)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0 round 0 0 12px 12px)",
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    clipPath: "inset(0 0 100% 0 round 0 0 12px 12px)",
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" } },
};

/* ── Sub-components ── */
function CategoryTab({ group, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(group.id)}
      className={cx(
        "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-150",
        isActive
          ? "bg-surface shadow-sm"
          : "hover:bg-surface/60"
      )}
    >
      <span
        className={cx(
          "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border transition-colors duration-150",
          isActive
            ? "border-border bg-bg"
            : "border-transparent bg-transparent group-hover:border-border group-hover:bg-bg"
        )}
      >
        <Icon
          name={group.icon}
          className={cx(
            "text-[16px] transition-colors duration-150",
            isActive ? group.color : "text-textSecondary group-hover:text-textPrimary"
          )}
        />
      </span>
      <span
        className={cx(
          "text-[13px] font-medium transition-colors duration-150",
          isActive ? "text-textPrimary" : "text-textSecondary group-hover:text-textPrimary"
        )}
      >
        {group.title}
      </span>
      {isActive && (
        <Icon
          name="chevron_right"
          className="ml-auto text-[16px] text-textTertiary"
          aria-hidden
        />
      )}
    </button>
  );
}

function ServiceItem({ item, onItemClick, reduceMotion }) {
  return (
    <m.li variants={reduceMotion ? {} : rowVariants}>
      <Link
        href={item.href}
        onClick={onItemClick}
        className={cx(
          "group relative flex items-start gap-3.5 rounded-xl border border-transparent p-3.5",
          "transition-all duration-150",
          "hover:border-border hover:bg-bg hover:shadow-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        )}
      >
        {/* Icon bubble */}
        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-surface transition-colors duration-150 group-hover:border-accent/30 group-hover:bg-accent/5">
          <Icon
            name={item.icon}
            className="text-[18px] text-textSecondary transition-colors duration-150 group-hover:text-accent"
          />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[13.5px] font-semibold text-textPrimary">
              {item.title}
            </span>
            {item.tag && (
              <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                {item.tag}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-[12.5px] leading-snug text-textSecondary">
            {item.description}
          </p>
        </div>

        {/* Hover arrow */}
        <Icon
          name="arrow_forward"
          className="mt-1 flex-shrink-0 text-[15px] text-transparent transition-all duration-150 group-hover:text-accent group-hover:translate-x-0.5"
        />
      </Link>
    </m.li>
  );
}

/* ── Main component ── */
export const MegaMenu = memo(
  forwardRef(function MegaMenu(
    {
      id = "services-mega-menu",
      isOpen,
      onClose,
      onMouseEnter,
      onMouseLeave,
      onItemClick,
    },
    forwardedRef
  ) {
    const internalRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const groups = useMemo(() => DEFAULT_GROUPS, []);
    const [activeGroup, setActiveGroup] = useState(groups[0].id);

    const activeData = useMemo(
      () => groups.find((g) => g.id === activeGroup) ?? groups[0],
      [activeGroup, groups]
    );

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

    // Reset active tab when menu closes
    useEffect(() => {
      if (!isOpen) setActiveGroup(groups[0].id);
    }, [isOpen, groups]);

    const handleBlur = useCallback(
      (e) => {
        const next = e.relatedTarget;
        if (!next || internalRef.current?.contains(next)) return;
        onClose?.();
      },
      [onClose]
    );

    return (
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isOpen && (
            <m.div
              id={id}
              ref={setRefs}
              role="menu"
              aria-label="Services"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onBlur={handleBlur}
              className="fixed left-0 right-0 top-[64px] z-50 border-b border-border bg-surface shadow-xl shadow-black/[0.06]"
              variants={reduceMotion ? {} : panelVariants}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "show"}
              exit={reduceMotion ? undefined : "exit"}
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex gap-0 py-5">

                  {/* ── Left: category tabs ── */}
                  <div className="w-[200px] flex-shrink-0 space-y-0.5 border-r border-border pr-4 pt-1">
                    <p className="mb-2.5 px-3 text-[11px] font-semibold uppercase tracking-widest text-textTertiary">
                      Services
                    </p>
                    {groups.map((group) => (
                      <CategoryTab
                        key={group.id}
                        group={group}
                        isActive={activeGroup === group.id}
                        onClick={setActiveGroup}
                      />
                    ))}

                    {/* Bottom link */}
                    <div className="pt-3">
                      <Link
                        href="/services"
                        onClick={onItemClick}
                        className="flex items-center gap-1.5 px-3 text-[12px] text-textTertiary transition-colors hover:text-textPrimary"
                      >
                        <span>All services</span>
                        <Icon name="arrow_forward" className="text-[13px]" />
                      </Link>
                    </div>
                  </div>

                  {/* ── Center: items for active group ── */}
                  <div className="flex-1 px-5">
                    <AnimatePresence mode="wait">
                      <m.div
                        key={activeGroup}
                        initial={reduceMotion ? false : { opacity: 0, x: 6 }}
                        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, x: -6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                      >
                        {/* Group header */}
                        <div className="mb-3 flex items-center gap-2">
                          <span className={cx("h-1.5 w-1.5 rounded-full", activeData.dot)} />
                          <span className="text-[12px] font-semibold uppercase tracking-widest text-textTertiary">
                            {activeData.title}
                          </span>
                        </div>

                        <m.ul
                          className="space-y-1"
                          variants={reduceMotion ? {} : listVariants}
                          initial="hidden"
                          animate="show"
                        >
                          {activeData.items.map((item) => (
                            <ServiceItem
                              key={item.href}
                              item={item}
                              onItemClick={onItemClick}
                              reduceMotion={reduceMotion}
                            />
                          ))}
                        </m.ul>
                      </m.div>
                    </AnimatePresence>
                  </div>

                  {/* ── Right: featured card ── */}
                  <div className="w-[240px] flex-shrink-0 pl-5">
                    <m.div
                      className="relative overflow-hidden rounded-xl border border-border bg-bg p-5"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }
                      }
                      transition={
                        reduceMotion
                          ? undefined
                          : { type: "spring", stiffness: 400, damping: 28 }
                      }
                    >
                      {/* Background decoration */}
                      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent opacity-[0.07] blur-2xl" />
                      <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-accent opacity-[0.05] blur-xl" />

                      <div className="relative">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/8 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-accent">
                          <Icon name="bolt" className="text-[12px]" />
                          Most Popular
                        </span>

                        {/* Title */}
                        <h3 className="mt-3 text-[14px] font-bold leading-snug text-textPrimary">
                          Growth Sprint
                        </h3>

                        {/* Description */}
                        <p className="mt-1.5 text-[12px] leading-relaxed text-textSecondary">
                          A focused 2-week engagement to uncover quick wins and roadmap your growth priorities.
                        </p>

                        {/* Divider */}
                        <div className="my-3.5 border-t border-border" />

                        {/* Proof points */}
                        <ul className="mb-4 space-y-1.5">
                          {[
                            "Full audit & strategy doc",
                            "3 priority experiments",
                            "Dedicated Slack channel",
                          ].map((point) => (
                            <li
                              key={point}
                              className="flex items-center gap-2 text-[11.5px] text-textSecondary"
                            >
                              <Icon
                                name="check_circle"
                                className="text-[13px] text-emerald-500"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>

                        <Button asChild size="sm" className="w-full">
                          <Link href="/contact" onClick={onItemClick}>
                            Start Growing Now
                          </Link>
                        </Button>
                      </div>
                    </m.div>

                    {/* Secondary link */}
                    <Link
                      href="/case-studies"
                      onClick={onItemClick}
                      className="mt-3 flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[12px] text-textTertiary transition-all hover:bg-surface hover:text-textPrimary"
                    >
                      <Icon name="stacked_line_chart" className="text-[14px]" />
                      <span>View case studies</span>
                    </Link>
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    );
  })
);
