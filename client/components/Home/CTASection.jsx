"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { Section, SectionInner } from "../ui/Section";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

export function CTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Section id="contact" className="py-0">
        <div
          className="relative overflow-hidden border-y border-borderOnBrand"
          style={{ background: "linear-gradient(135deg,#1b4d30 0%,#0f3520 45%,#0a2818 100%)" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px"
              }}
            />
          </div>

          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? undefined : { duration: 0.3, ease: "easeOut" }}
              className="relative py-10 sm:py-14"
            >
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="space-y-5 lg:col-span-7">
                  <h2
                    className="font-heading text-[2.35rem] font-extrabold leading-[1.1] tracking-tight text-onPrimary sm:text-h1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Ready to Scale Your
                    <br />
                    Business Globally?
                  </h2>

                  <p className="max-w-2xl text-body text-onPrimaryMuted">
                    Let’s build your growth system with <br /> strategy, execution, and results.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <CTAButton
                      label="Get Free Strategy"
                      icon="bolt"
                      className="!rounded-2xl !bg-[#2fbe57] !text-white hover:!bg-[#28a94d] active:!bg-[#28a94d]"
                    />
                    <Link
                      href="/case-studies"
                      className={cx(
                        "inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-white/25 bg-transparent px-6 py-3 text-[15px] font-medium text-white",
                        "hover:bg-white/10 active:scale-[0.98]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                      )}
                    >
                      View Case Studies
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-white/55">
                    {[
                      { type: "shield", label: "No commitment" },
                      { type: "wave", label: "Free consultation" },
                      { type: "bolt", label: "Trusted by 100+ businesses" }
                    ].map(({ type, label }) => (
                      <span key={label} className="inline-flex items-center gap-2">
                        {type === "bolt" ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        ) : null}
                        {type === "wave" ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                          </svg>
                        ) : null}
                        {type === "shield" ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        ) : null}
                        <span>{label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative lg:col-span-5 mb-[-260px] mt-[-270px] md:mr-[0px] md:mt-[0px] ">
                  <div className="relative mx-auto h-[520px] w-full max-w-md overflow-visible sm:h-[660px] lg:h-[440px] lg:max-w-none">
                    <div className="pointer-events-none absolute inset-0 z-10 md:ml-[-520px] mr-[-320px] md:mr-[0px]">
                      <Image
                        src="/images/Hero/Female.png"
                        alt="Digital strategy professional"
                        fill
                        className="object-contain object-bottom opacity-[0.92] scale-[1.18]"
                        sizes="(min-width: 1024px) 1200px, (min-width: 640px) 720px, 100vw"
                      />
                      
                    </div>

                    <div className="hidden md:block relative h-full w-full">
                      <div className="pointer-events-none absolute right-0 top-6 w-[280px] sm:w-[320px] lg:top-0 lg:w-[300px]">
                        <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-white shadow-xl shadow-black/30 backdrop-blur">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="text-[11px] font-semibold text-white/75">Growth Overview</div>
                            <div className="text-[11px] text-white/55">Last 30 days</div>
                          </div>
                          <div className="grid gap-3">
                            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                              <div className="flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="text-[11px] font-medium text-white/60">Revenue</div>
                                  <div className="mt-1 text-[18px] font-bold text-white">+240%</div>
                                  <div className="text-[11px] text-white/45">vs last year</div>
                                </div>
                                <svg width="72" height="44" viewBox="0 0 72 44" fill="none">
                                  {[10, 18, 26, 34, 40].map((h, i) => (
                                    <rect
                                      key={i}
                                      x={i * 14}
                                      y={44 - h}
                                      width="10"
                                      height={h}
                                      rx="2"
                                      fill="rgba(74,222,128,0.85)"
                                    />
                                  ))}
                                </svg>
                              </div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                              <div className="flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="text-[11px] font-medium text-white/60">Leads</div>
                                  <div className="mt-1 text-[18px] font-bold text-white">+121%</div>
                                  <div className="text-[11px] text-white/45">pipeline growth</div>
                                </div>
                                <svg width="80" height="44" viewBox="0 0 80 44" fill="none">
                                  <path
                                    d="M4 34 C18 26, 26 30, 38 22 C52 14, 62 24, 76 12"
                                    stroke="rgba(74,222,128,0.95)"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </SectionInner>
        </div>
      </Section>
    </LazyMotion>
  );
}
