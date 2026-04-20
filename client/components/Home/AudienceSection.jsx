"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";

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

export function AudienceSection() {
  const reduceMotion = useReducedMotion();

  const audiences = useMemo(
    () => [
      {
        title: "Entrepreneurs",
        icon: "rocket_launch",
        description: "Looking to scale faster with smart digital strategies."
      },
      {
        title: "Small & Medium Businesses",
        icon: "storefront",
        description: "Ready to turn steady revenue into sustainable, predictable growth."
      },
      {
        title: "CEOs & Founders",
        icon: "workspace_premium",
        description: "Need a trusted partner to own digital growth while you lead."
      },
      {
        title: "E-commerce Owners",
        icon: "shopping_bag",
        description: "Want higher conversion rates and more revenue from existing traffic."
      },
      {
        title: "Influencers & Creators",
        icon: "smart_display",
        description: "Focused on content while a team grows your reach, brand, and deals."
      },
      {
        title: "Professionals",
        icon: "badge",
        description: "Building a personal brand that attracts roles, clients, and opportunities."
      },
      {
        title: "Startups",
        icon: "lightbulb",
        description: "Validating offers, finding traction, and scaling what works."
      },
      {
        title: "Companies needing full support",
        icon: "handshake",
        description: "Looking for a plug-in growth team to plan, execute, and report end-to-end."
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="tint" className="py-8 sm:py-10">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Who Our Services Are For</h2>
              <p className="mt-3 text-body text-textSecondary">
                If growth is your goal, Business Tree is your partner.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {audiences.map((audience, idx) => (
                <m.div
                  key={audience.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    reduceMotion ? undefined : { duration: 0.28, ease: "easeOut", delay: idx * 0.05 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                  className="group flex min-h-[44px] h-full flex-col rounded-xl border border-border bg-surface/80 p-5 shadow-sm backdrop-blur-sm transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                      <Icon name={audience.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="text-body font-semibold text-textPrimary">
                      {audience.title}
                    </div>
                  </div>
                  <div className="mt-2 text-small text-textSecondary line-clamp-1">
                    {audience.description}
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}
