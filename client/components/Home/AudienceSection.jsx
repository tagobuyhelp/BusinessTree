"use client";

import React, { useMemo } from "react";
import Image from "next/image";
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
        description: "Looking to scale faster with smart digital strategies.",
        image: "/images/audience/audience-entrepreneurs.png"
      },
      {
        title: "Small & Medium Businesses",
        icon: "storefront",
        description: "Ready to turn steady revenue into sustainable, predictable growth.",
        image: "/images/audience/audience-smb.png"
      },
      {
        title: "CEOs & Founders",
        icon: "workspace_premium",
        description: "Need a trusted partner to own digital growth while you lead.",
        image: "/images/audience/audience-ceo.png"
      },
      {
        title: "E-commerce Owners",
        icon: "shopping_bag",
        description: "Want higher conversion rates and more revenue from existing traffic.",
        image: "/images/audience/audience-ecommerce.png"
      },
      {
        title: "Influencers & Creators",
        icon: "smart_display",
        description: "Focused on content while a team grows your reach, brand, and deals.",
        image: "/images/audience/audience-influencer.png"
      },
      {
        title: "Professionals",
        icon: "badge",
        description: "Building a personal brand that attracts roles, clients, and opportunities.",
        image: "/images/audience/audience-professionals.png"
      },
      {
        title: "Startups",
        icon: "lightbulb",
        description: "Validating offers, finding traction, and scaling what works.",
        image: "/images/audience/audience-startup.png"
      },
      {
        title: "Companies needing full support",
        icon: "handshake",
        description: "Looking for a plug-in growth team to plan, execute, and report end-to-end.",
        image: "/images/audience/audience-growth-team.png"
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
                  className={cx(
                    "group relative flex min-h-[44px] h-full flex-col overflow-hidden rounded-xl border border-border",
                    " p-5 shadow-sm  transition-shadow",
                    "hover:shadow-md"
                  )}
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 overflow-hidden sm:w-1/2">
                    <Image
                      src={audience.image}
                      alt=""
                      fill
                      className={cx(
                        "object-cover",
                        "transition duration-300 ease-out",
                        " group-hover:scale-[1.05]",
                        ""
                      )}
                      sizes="(min-width: 640px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />

                  <div className="relative z-10 pr-16 sm:pr-24">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                      <Icon name={audience.icon} className="text-[22px] text-accent" />
                    </div>
                    <div className="mt-3 text-body font-semibold text-textPrimary">{audience.title}</div>
                    <div className="mt-2 text-small text-textSecondary line-clamp-2">{audience.description}</div>
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
