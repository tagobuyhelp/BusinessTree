"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { Section, SectionInner } from "../ui/Section";
import { CaseStudyCard } from "./CaseStudyCard";

const CaseStudyModal = dynamic(
  () => import("./CaseStudyModal").then((m) => m.CaseStudyModal),
  { ssr: false }
);

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const items = useMemo(
    () => [
      {
        href: "/case-studies/wellness-lifestyle",
        industry: "Wellness & Lifestyle",
        title: "Wellness Growth System",
        problem: "Low visibility and high ad cost",
        solution: "SEO + performance funnel + website optimization",
        results: ["430% traffic growth", "3X ROAS", "57% lower CPA"]
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        problem: "Stalled pipeline and low conversion rates",
        solution: "Messaging refresh + landing pages + tracking + retargeting",
        results: ["2.4X demo bookings", "41% higher CVR", "29% lower CPL"]
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        problem: "High bounce and weak repeat purchases",
        solution: "UX improvements + CRO experiments + lifecycle email flows",
        results: ["+18% AOV", "+33% repeat rate", "1.8X revenue per visitor"]
      },
      {
        href: "/case-studies/local-services",
        industry: "Local Services",
        title: "Local Lead Engine",
        problem: "Inconsistent leads and poor local rankings",
        solution: "Local SEO + content system + conversion-first pages",
        results: ["5X qualified leads", "Top 3 map pack", "64% lower CPA"]
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="case-studies" className="py-12 sm:py-16">
        <SectionInner>
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-25" />
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="text-h2">Real Results. Real Growth.</h2>
                <p className="mt-3 text-body text-textSecondary">
                  See how we helped businesses scale with strategy, execution, and data-driven systems.
                </p>
              </div>

              <Button variant="secondary" asChild>
                <Link href="/case-studies">View Full Case Studies →</Link>
              </Button>
            </div>

            <m.div
              className="grid gap-4 lg:grid-cols-2"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.06 } }
              }}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              {items.map((cs) => (
                <m.div
                  key={cs.href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <CaseStudyCard
                    href={cs.href}
                    industry={cs.industry}
                    title={cs.title}
                    problem={cs.problem}
                    solution={cs.solution}
                    results={cs.results}
                    onOpen={() => {
                      setActive(cs);
                      setOpen(true);
                    }}
                  />
                </m.div>
              ))}
            </m.div>

            <CaseStudyModal
              open={open}
              onClose={() => setOpen(false)}
              caseStudy={active}
            />
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}
