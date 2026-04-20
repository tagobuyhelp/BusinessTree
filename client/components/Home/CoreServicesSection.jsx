"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Section, SectionInner } from "../ui/Section";
import { ServiceCard } from "./ServiceCard";

export function CoreServicesSection() {
  const reduceMotion = useReducedMotion();

  const services = useMemo(
    () => [
      {
        href: "/services/digital-marketing",
        icon: "insights",
        title: "Digital Marketing",
        description: "Full-funnel systems that attract, convert, and retain customers."
      },
      {
        href: "/services/seo",
        icon: "trending_up",
        title: "SEO (Local + Global)",
        description: "Rank higher on Google and drive long-term organic growth."
      },
      {
        href: "/services/performance-marketing",
        icon: "campaign",
        title: "Performance Marketing",
        description: "Profit-focused acquisition built for ROI and scale."
      },
      {
        href: "/services/web-development",
        icon: "code",
        title: "Web Development",
        description: "Fast, premium websites that convert traffic into revenue."
      },
      {
        href: "/services/youtube-growth",
        icon: "smart_display",
        title: "YouTube Growth",
        description: "Authority + reach systems that increase inbound leads."
      },
      {
        href: "/services/social-media",
        icon: "public",
        title: "Social Media Management",
        description: "Consistent presence that builds trust and demand."
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="services" className="py-12 sm:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-h2">Our Core Digital Services</h2>
              <p className="mt-3 text-body text-textSecondary">
                High-impact digital solutions designed to scale your business globally.
              </p>
            </div>

            <m.div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.06 } }
              }}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((s) => (
                <m.div
                  key={s.href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <ServiceCard
                    href={s.href}
                    icon={s.icon}
                    title={s.title}
                    description={s.description}
                    descriptionLines={1}
                    showCta={false}
                  />
                </m.div>
              ))}
            </m.div>
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}

