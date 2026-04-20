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
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "trending_up",
    color: "text-emerald-500",
    dot: "bg-emerald-500",
    items: [
      {
        href: "/services/digital-marketing",
        icon: "insights",
        title: "Digital Marketing Strategy",
        description: "A channel plan designed for qualified leads."
      },
      {
        href: "/services/social-media",
        icon: "groups",
        title: "Social Media Management",
        description: "Consistent content that builds demand and trust."
      },
      {
        href: "/services/youtube-growth",
        icon: "smart_display",
        title: "YouTube Growth",
        description: "Turn attention into traffic, leads, and sales."
      },
      {
        href: "/services/linkedin-branding",
        icon: "badge",
        title: "LinkedIn Branding",
        description: "Authority-building content for founders and teams."
      }
    ],
  },
  {
    id: "seo",
    title: "SEO",
    icon: "travel_explore",
    color: "text-amber-500",
    dot: "bg-amber-500",
    items: [
      {
        href: "/services/seo#local",
        icon: "location_on",
        title: "Local SEO",
        description: "Win the map pack and drive calls & leads."
      },
      {
        href: "/services/seo#technical",
        icon: "settings",
        title: "Technical SEO",
        description: "Indexing, speed, and site health fixes."
      },
      {
        href: "/services/seo#content",
        icon: "edit_document",
        title: "Content SEO",
        description: "Rank for high-intent queries that convert."
      },
      {
        href: "/services/seo#global",
        icon: "public",
        title: "Global SEO",
        description: "Scale content and structure across markets."
      }
    ],
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    icon: "campaign",
    color: "text-sky-500",
    dot: "bg-sky-500",
    items: [
      {
        href: "/services/performance-marketing#meta",
        icon: "ads_click",
        title: "Meta Ads",
        description: "Creative testing + scaling with CPA guardrails."
      },
      {
        href: "/services/performance-marketing#google",
        icon: "manage_search",
        title: "Google Search",
        description: "High-intent traffic with conversion-first landing."
      },
      {
        href: "/services/performance-marketing#tracking",
        icon: "track_changes",
        title: "Tracking & Analytics",
        description: "Clean attribution you can trust for decisions."
      },
      {
        href: "/services/performance-marketing#cro",
        icon: "tune",
        title: "CRO & Testing",
        description: "Improve conversion rates without more spend."
      },
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: "code",
    color: "text-indigo-500",
    dot: "bg-indigo-500",
    items: [
      {
        href: "/services/web-development",
        icon: "computer",
        title: "Web Development",
        description: "Fast, scalable sites built for conversion."
      },
      {
        href: "/services/ecommerce",
        icon: "shopping_cart",
        title: "E-commerce",
        description: "Revenue-ready stores with clean UX."
      },
      {
        href: "/services/web-development#performance",
        icon: "speed",
        title: "Performance Optimisation",
        description: "Core Web Vitals improvements that reduce drop-off."
      },
      {
        href: "/services/web-development#maintenance",
        icon: "construction",
        title: "Maintenance & Iteration",
        description: "Ship improvements continuously without chaos."
      },
    ],
  },
  {
    id: "branding-growth",
    title: "Branding & Growth",
    icon: "workspace_premium",
    color: "text-violet-500",
    dot: "bg-violet-500",
    items: [
      {
        href: "/services/linkedin-branding",
        icon: "badge",
        title: "LinkedIn Branding",
        description: "Positioning that builds authority and demand."
      },
      {
        href: "/services/influencer-marketing",
        icon: "groups",
        title: "Influencer Marketing",
        description: "Partnerships that scale trust and reach."
      },
      {
        href: "/services/pr-authority",
        icon: "verified",
        title: "PR & Authority",
        description: "Credibility signals that shorten sales cycles."
      },
      {
        href: "/services/youtube-growth",
        icon: "smart_display",
        title: "YouTube Growth",
        description: "Build audience and convert attention to leads."
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
const CategoryTab = forwardRef(function CategoryTab({ group, isActive, onClick, onKeyDown }, ref) {
  return (
    <button
      ref={ref}
      onClick={() => onClick(group.id)}
      onMouseEnter={() => onClick(group.id)}
      role="tab"
      aria-selected={isActive}
      aria-controls={`mega-panel-${group.id}`}
      data-mega-category={group.id}
      onKeyDown={onKeyDown}
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
});

function ServiceItem({ item, onItemClick, reduceMotion }) {
  return (
    <m.li variants={reduceMotion ? {} : rowVariants}>
      <m.div
        whileHover={reduceMotion ? undefined : { y: -1, scale: 1.01 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 520, damping: 44 }}
      >
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
          <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-surface transition-colors duration-150 group-hover:border-accent/30 group-hover:bg-accent/5">
            <Icon
              name={item.icon}
              className="text-[18px] text-textSecondary transition-colors duration-150 group-hover:text-accent"
            />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[13.5px] font-semibold text-textPrimary">{item.title}</span>
              {item.tag && (
                <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                  {item.tag}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-[12.5px] leading-snug text-textSecondary">{item.description}</p>
          </div>

          <Icon
            name="arrow_forward"
            className="mt-1 flex-shrink-0 text-[15px] text-transparent transition-all duration-150 group-hover:text-accent group-hover:translate-x-0.5"
          />
        </Link>
      </m.div>
    </m.li>
  );
}

/* ── Main component ── */
export const MegaMenu = memo(
  forwardRef(function MegaMenu(
    {
      id = "services-mega-menu",
      isOpen,
      topOffset = "80px",
      onClose,
      onMouseEnter,
      onMouseLeave,
      onItemClick,
    },
    forwardedRef
  ) {
    const internalRef = useRef(null);
    const firstCategoryRef = useRef(null);
    const wasOpenRef = useRef(false);
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

    useEffect(() => {
      if (isOpen) {
        wasOpenRef.current = true;
        return;
      }
      if (!wasOpenRef.current) return;
      wasOpenRef.current = false;
      setActiveGroup((prev) => (prev === groups[0].id ? prev : groups[0].id));
    }, [groups, isOpen]);

    useEffect(() => {
      if (!isOpen) return;
      window.setTimeout(() => {
        firstCategoryRef.current?.focus?.();
      }, 0);
    }, [isOpen]);

    const onCategoryKeyDown = useCallback(
      (e) => {
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "Home" && e.key !== "End") return;
        e.preventDefault();

        const index = groups.findIndex((g) => g.id === activeGroup);
        const lastIndex = groups.length - 1;
        const nextIndex =
          e.key === "Home"
            ? 0
            : e.key === "End"
              ? lastIndex
              : e.key === "ArrowDown"
                ? Math.min(lastIndex, index + 1)
                : Math.max(0, index - 1);

        const nextId = groups[nextIndex]?.id;
        if (!nextId) return;
        setActiveGroup(nextId);
        const nextButton = internalRef.current?.querySelector?.(`[data-mega-category="${nextId}"]`);
        nextButton?.focus?.();
      },
      [activeGroup, groups]
    );

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
              className="fixed left-0 right-0 z-50"
              style={{ top: topOffset }}
              variants={reduceMotion ? {} : panelVariants}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "show"}
              exit={reduceMotion ? undefined : "exit"}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/[0.08]">
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/55 to-transparent" />
                  <div className="grid grid-cols-12 gap-0 p-5">

                  {/* ── Left: category tabs ── */}
                  <div className="col-span-3 space-y-0.5 border-r border-border pr-5 pt-1">
                    <p className="mb-2.5 px-3 text-[11px] font-semibold uppercase tracking-widest text-textTertiary">
                      Services
                    </p>
                    <div role="tablist" aria-label="Service categories" className="space-y-0.5">
                      {groups.map((group, idx) => (
                        <CategoryTab
                          key={group.id}
                          group={group}
                          isActive={activeGroup === group.id}
                          onClick={setActiveGroup}
                          onKeyDown={onCategoryKeyDown}
                          ref={idx === 0 ? firstCategoryRef : undefined}
                        />
                      ))}
                    </div>

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
                  <div className="col-span-6 px-5">
                    <AnimatePresence mode="wait">
                      <m.div
                        key={activeGroup}
                        id={`mega-panel-${activeGroup}`}
                        role="tabpanel"
                        aria-label={`${activeData.title} services`}
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
                          className="grid grid-cols-2 gap-2"
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
                  <div className="col-span-3 pl-5">
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
                        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-textSecondary">
                          <Icon name="auto_awesome" className="text-[12px]" />
                          Recommended
                        </span>

                        <h3 className="mt-3 text-[15px] font-bold leading-snug text-textPrimary">
                          Grow your business with proven strategies
                        </h3>

                        <p className="mt-1.5 text-[12.5px] leading-relaxed text-textSecondary">
                          Get a free strategy tailored to your goals, channels, and conversion opportunities.
                        </p>

                        {/* Divider */}
                        <div className="my-3.5 border-t border-border" />

                        {/* Proof points */}
                        <ul className="mb-4 space-y-1.5">
                          {[
                            "Clarity on what to do next",
                            "Quick wins + roadmap",
                            "Measurable growth plan",
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
                            Get Free Strategy
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
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    );
  })
);
