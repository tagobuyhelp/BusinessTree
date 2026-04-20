"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { Button } from "../ui/Button";
import { Section, SectionInner } from "../ui/Section";
import { CaseStudyCard } from "../Home/CaseStudyCard";

const CaseStudyModal = dynamic(
  () => import("../Home/CaseStudyModal").then((m) => m.CaseStudyModal),
  { ssr: false }
);

export function ServicesCaseStudiesSection() {
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
        problemLong:
          "The brand struggled to compete in search and paid channels, driving up costs and limiting new customer growth.",
        solution: "SEO + performance funnel + website optimization",
        solutionPoints: [
          "Rebuilt SEO foundation for high-intent queries",
          "Improved landing page conversion with CRO",
          "Optimized paid funnel to reduce CPA"
        ],
        results: ["430% traffic growth", "3X ROAS", "57% lower CPA"]
      },
      {
        href: "/case-studies/b2b-saas",
        industry: "B2B SaaS",
        title: "Pipeline Acceleration",
        problem: "Stalled pipeline and low conversion rates",
        problemLong:
          "Traffic was steady but conversion was weak and attribution was unclear, reducing sales confidence and volume.",
        solution: "Messaging refresh + landing pages + tracking + retargeting",
        solutionPoints: [
          "Clarified messaging and value proposition",
          "Shipped conversion-first landing pages",
          "Improved tracking and retargeting loops"
        ],
        results: ["2.4X demo bookings", "41% higher CVR", "29% lower CPL"]
      },
      {
        href: "/case-studies/ecommerce",
        industry: "E-commerce",
        title: "Revenue Per Visitor Lift",
        problem: "High bounce and weak repeat purchases",
        problemLong:
          "Users dropped off before purchase and repeat revenue was underperforming due to friction and lack of lifecycle strategy.",
        solution: "UX improvements + CRO experiments + lifecycle email flows",
        solutionPoints: [
          "Improved product and checkout UX",
          "Ran CRO experiments on key flows",
          "Built lifecycle email automation"
        ],
        results: ["+18% AOV", "+33% repeat rate", "1.8X revenue per visitor"]
      },
      {
        href: "/case-studies/local-services",
        industry: "Local Services",
        title: "Local Lead Engine",
        problem: "Inconsistent leads and poor local rankings",
        problemLong:
          "Lead volume was volatile and local visibility was weak, limiting predictable growth in the service area.",
        solution: "Local SEO + content system + conversion-first pages",
        solutionPoints: [
          "Local SEO + map pack improvements",
          "High-intent service pages for conversion",
          "Content system to sustain rankings"
        ],
        results: ["5X qualified leads", "Top 3 map pack", "64% lower CPA"]
      }
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="case-studies" className="py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="text-h2">Case Studies</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Proof over promises. See outcomes from strategy + execution + optimization.
                </p>
              </div>
            </div>

            <m.div
              className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-2 md:snap-none md:overflow-visible md:px-0 xl:grid-cols-3"
              variants={
                reduceMotion
                  ? {}
                  : {
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
                  }
              }
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              {items.map((cs) => (
                <m.div
                  key={cs.href}
                  className="min-w-[88%] snap-start md:min-w-0"
                  variants={
                    reduceMotion
                      ? {}
                      : {
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 }
                      }
                  }
                >
                  <CaseStudyCard
                    href={cs.href}
                    industry={cs.industry}
                    title={cs.title}
                    problem={cs.problem}
                    solution={cs.solution}
                    results={cs.results}
                    variant="compact"
                    onOpen={() => {
                      setActive(cs);
                      setOpen(true);
                    }}
                  />
                </m.div>
              ))}
            </m.div>

            <div className="flex justify-center pt-2">
              <Button variant="secondary" asChild className="w-full sm:w-auto">
                <Link href="/case-studies">View All Case Studies →</Link>
              </Button>
            </div>

            <CaseStudyModal open={open} onClose={() => setOpen(false)} caseStudy={active} />
          </m.div>
        </SectionInner>
      </Section>
    </LazyMotion>
  );
}
