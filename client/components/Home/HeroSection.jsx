"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { HeroVisual } from "./HeroVisual";

function cx(...v) { return v.filter(Boolean).join(" "); }

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setHeroImageIndex((i) => (i + 1) % 2);
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blobY1  = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const blobY2  = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const blobY3  = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const fadeUp = (delay = 0) =>
    reduceMotion ? {} : {
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, ease: "easeOut", delay },
    };

  return (
    <LazyMotion features={domAnimation}>
      <section id="home" className="py-0">
        <div
          ref={heroRef}
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,#1b4d30 0%,#0f3520 45%,#0a2818 100%)" }}
        >

          {/* ── Blobs + grid ── */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <m.div className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full opacity-[0.14]"
              style={{ background: "#2d7a4a", filter: "blur(80px)", y: reduceMotion ? 0 : blobY1 }} />
            <m.div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full opacity-[0.18]"
              style={{ background: "#1b5e35", filter: "blur(90px)", y: reduceMotion ? 0 : blobY2 }} />
            <m.div className="absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full opacity-[0.10]"
              style={{ background: "#174d2a", filter: "blur(60px)", y: reduceMotion ? 0 : blobY3 }} />
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px)," +
                "linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }} />
          </div>

          {/* ── Content ── */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-0 md:py-12 lg:py-0">

              <div className="grid grid-cols-1 items-center lg:grid-cols-12 lg:min-h-[92vh] ">

                {/* ── LEFT: copy (7 cols) ── */}
                <m.div
                  className="flex flex-col gap-6 py-10 lg:col-span-7 lg:justify-center lg:py-0 lg:pr-10"
                  {...fadeUp(0)}
                >
                  {/* Badge */}
                  <div className="inline-flex w-fit items-center gap-2 rounded-full  border border-white/20 bg-white/[0.07] px-3 py-1.5 text-[13px] text-white/75">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Premium growth for modern teams
                  </div>

                  {/* H1 */}
                  <h1
                    className="text-[2.35rem] font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.65rem]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Grow faster with a<br />
                    strategy-led digital<br />
                    team built for{" "}
                    <em className="not-italic text-white">measurable</em><br />
                    results.
                  </h1>

                  {/* Body */}
                  <p className="max-w-[200px] lg:max-w-[560px] text-[10px] leading-relaxed  text-white/60 lg:text-[1.05rem]">
                    We help SaaS and agencies improve acquisition, conversion, and retention
                    through high-performance web experiences and ROI-focused marketing.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 z-10">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0f3520] shadow-lg shadow-black/15 transition hover:bg-green-50 active:scale-[0.98]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                      Get Free Strategy
                    </button>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-white/10 active:scale-[0.98]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                      View Case Studies
                    </Link>
                  </div>

                  {/* Trust strip */}
                  <div className="flex flex-nowrap gap-x-2 gap-y-2 text-[12px] text-white/45 w-full z-10">
                    {[
                      { type: "bolt",   label: "Fast execution"      },
                      { type: "wave",   label: "Clear reporting"      },
                      { type: "shield", label: "Conversion-first UX"  },
                    ].map(({ type, label }) => (
                      <span key={label} className="flex items-center gap-1.5">
                        {type === "bolt" && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        )}
                        {type === "wave" && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                          </svg>
                        )}
                        {type === "shield" && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        )}
                        {label}
                      </span>
                    ))}
                  </div>
                </m.div>

                {/* ── RIGHT: photo + cards (5 cols) ── */}
                <m.div
                  className="relative lg:col-span-5"
                  {...fadeUp(0.08)}
                >

                  {/* ─────────────────────────────────────────
                      DESKTOP (lg+):
                      Fixed-height container. Photo is absolute,
                      bleeds upward beyond the container top.
                      Cards sit at zIndex 10, photo at zIndex 5.
                  ───────────────────────────────────────── */}
                  <div
                    className="relative hidden lg:block"
                    style={{ height: "88vh" }}
                  >
                    {/* Photo — bleeds above grid */}
                    <div
                      className="pointer-events-none"
                      style={{
                        position: "absolute",
                        top:    "20px",  /* bleed well above so full figure shows  */
                        bottom: "-20px",
                        left:   "50%",
                        transform: "translateX(-60%)",
                        width:  "140%",   /* much wider = much larger figure        */
                        zIndex: 5,
                      }}
                    >
                      <m.div
                        className="absolute inset-0"
                        animate={{ opacity: heroImageIndex === 0 ? 1 : 0 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
                        style={{ willChange: "opacity" }}
                      >
                        <Image
                          src="/images/Hero/Female.png"
                          alt="Digital strategy professional"
                          fill
                          priority
                          style={{ objectFit: "contain", objectPosition: "bottom center" }}
                          sizes="(min-width: 1024px) 650px, 100vw"
                        />
                      </m.div>
                      <m.div
                        className="absolute inset-0"
                        animate={{ opacity: heroImageIndex === 1 ? 1 : 0 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
                        style={{ willChange: "opacity" }}
                      >
                        <Image
                          src="/images/Hero/Male.png"
                          alt="Digital strategy professional"
                          fill
                          priority
                          style={{ objectFit: "contain", objectPosition: "bottom center" }}
                          sizes="(min-width: 1024px) 650px, 100vw"
                        />
                      </m.div>
                    </div>

                    {/* Cards — always above photo */}
                    <div
                      className="relative h-full w-full"
                      style={{ zIndex: 10 }}
                    >
                      <HeroVisual parallaxY={reduceMotion ? undefined : visualY} />
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────
                      MOBILE (< lg):
                      Photo is a normal img with fixed height.
                      Cards flow below in HeroVisual mobile slot.
                  ───────────────────────────────────────── */}
                  <div className="lg:hidden mt-[-490px]">
                    {/* Photo */}
                    <div className="relative h-[560px] w-[470px] mb-[-100px]">
                      <m.div
                        className="absolute inset-0"
                        animate={{ opacity: heroImageIndex === 0 ? 1 : 0 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
                        style={{ willChange: "opacity" }}
                      >
                        <Image
                          src="/images/Hero/Female.png"
                          alt="Digital strategy professional"
                          fill
                          priority
                          className="object-contain object-right scale-[.8]"
                          sizes="(max-width: 640px) 100vw, 720px"
                        />
                      </m.div>
                      <m.div
                        className="absolute inset-0"
                        animate={{ opacity: heroImageIndex === 1 ? 1 : 0 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
                        style={{ willChange: "opacity" }}
                      >
                        <Image
                          src="/images/Hero/Male.png"
                          alt="Digital strategy professional"
                          fill
                          priority
                          className="object-contain object-right scale-[.8]"
                          sizes="(max-width: 640px) 100vw, 720px"
                        />
                      </m.div>
                      
                    </div>

                    {/* Cards — flow below photo on mobile */}
                    <HeroVisual parallaxY={undefined} />
                  </div>

                </m.div>
                {/* end right col */}

              </div>
            </div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
