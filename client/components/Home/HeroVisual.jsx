"use client";

import React from "react";
import { m } from "framer-motion";

/* ── Sparkline ── */
function Sparkline({ d, w = 80, h = 40 }) {
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={d} stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Mini bar chart ── */
function BarMini() {
  const bars = [28, 38, 52, 64, 80];
  return (
    <svg width="64" height="40" viewBox="0 0 64 40" fill="none">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 13}
          y={40 - h}
          width="10"
          height={h}
          rx="2"
          fill="#4ade80"
          opacity={0.55 + i * 0.1}
        />
      ))}
    </svg>
  );
}

const glass =
  "rounded-2xl border border-white/[0.14] bg-white/[0.10] shadow-2xl backdrop-blur-xl";

export function HeroVisual({ parallaxY }) {
  return (
    /*
      Desktop: absolute-positioned cards layered over the photo.
      Mobile:  normal flow, stacked vertically below the photo.
      We achieve this with a responsive wrapper:
        - lg → relative h-full  (absolute children)
        - <lg → flex flex-col gap-3  (flow children)
    */
    <>
      {/* ═══════════════════════════════
          DESKTOP layout  (lg+)
          Cards use absolute positioning
          inside the right column container
      ═══════════════════════════════ */}
      <div className="relative hidden h-full w-full select-none lg:block">

        {/* Card 1 — Growth Dashboard (top-right) */}
        <m.div
          className={`${glass} absolute right-0 top-6 w-[200px] p-4`}
          style={{ y: parallaxY ?? 0, zIndex: 10 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[13px] font-semibold text-white">Growth Dashboard</span>
            <span className="flex items-center gap-1 text-[11px] text-white/40">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Last 30 days
            </span>
          </div>

          {/* SEO */}
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-green-400/15 text-green-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-white">SEO Growth</p>
              <p className="text-[11px] text-white/50">+120% in 8 weeks</p>
            </div>
            <Sparkline d="M0 36 L10 30 L22 24 L32 17 L44 12 L56 7 L68 3 L80 0" />
          </div>

          <div className="my-2 border-t border-white/[0.08]" />

          {/* Revenue */}
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-green-400/15 text-green-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-[11px] text-white/50">Revenue</p>
              <p className="text-[17px] font-bold leading-tight text-white">+240%</p>
            </div>
            <BarMini />
          </div>

          <div className="my-2 border-t border-white/[0.08]" />

          {/* Leads */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-green-400/15 text-green-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-[11px] text-white/50">Leads</p>
              <p className="text-[17px] font-bold leading-tight text-white">+121%</p>
            </div>
            <Sparkline d="M0 38 L12 32 L24 26 L36 20 L48 13 L60 8 L72 4 L80 1" />
          </div>
        </m.div>

        {/* Card 2 — Revenue (bottom-left) */}
        <m.div
          className={`${glass} absolute bottom-10 left-0 w-[200px] p-4`}
          style={{ zIndex: 10 }}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-green-400/15 text-green-400">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </span>
            <div>
              <p className="text-[13px] font-bold text-white">Revenue</p>
              <p className="text-[11px] leading-tight text-white/55">+ compounding growth</p>
            </div>
          </div>
          <svg width="164" height="36" viewBox="0 0 164 36" fill="none">
            <path d="M0 34 L18 28 L38 22 L58 16 L80 11 L106 6 L134 2 L164 0 L164 36 L0 36 Z"
              fill="#4ade80" fillOpacity="0.12" />
            <path d="M0 34 L18 28 L38 22 L58 16 L80 11 L106 6 L134 2 L164 0"
              stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </m.div>

        {/* Card 3 — Leads (bottom-right) */}
        <m.div
          className={`${glass} absolute bottom-10 right-0 w-[200px] p-4`}
          style={{ zIndex: 10 }}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-400/15 text-green-400">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </span>
            <div>
              <p className="text-[14px] font-bold text-white">Leads</p>
              <p className="text-[12px] text-white/55">3X pipeline velocity</p>
            </div>
          </div>
        </m.div>

      </div>

      {/* ═══════════════════════════════
          MOBILE layout  (< lg)
          Cards in normal flow — 2 col grid
      ═══════════════════════════════ */}
      <div className="mt-4 flex select-none flex-col gap-3 lg:hidden">

        {/* Dashboard card — full width on mobile */}
        <m.div
          className={`${glass} w-full p-4`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[13px] font-semibold text-white">Growth Dashboard</span>
            <span className="flex items-center gap-1 text-[11px] text-white/40">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Last 30 days
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "SEO Growth", val: "+120%", sub: "8 weeks" },
              { label: "Revenue",    val: "+240%", sub: "vs last yr" },
              { label: "Leads",      val: "+121%", sub: "pipeline" },
            ].map(({ label, val, sub }) => (
              <div key={label} className="rounded-xl bg-white/[0.07] p-2.5 text-center">
                <p className="text-[10px] text-white/50">{label}</p>
                <p className="text-[15px] font-bold text-white">{val}</p>
                <p className="text-[10px] text-green-400">{sub}</p>
              </div>
            ))}
          </div>
        </m.div>

        {/* Revenue + Leads side by side */}
        <div className="grid grid-cols-2 gap-3">
          <m.div
            className={`${glass} p-3`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-green-400/15 text-green-400">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </span>
              <p className="text-[12px] font-bold text-white">Revenue</p>
            </div>
            <p className="mb-1 text-[11px] text-white/55">+ compounding growth</p>
            <svg width="100%" height="28" viewBox="0 0 120 28" fill="none" preserveAspectRatio="none">
              <path d="M0 26 L20 20 L40 15 L60 10 L80 6 L100 3 L120 0 L120 28 L0 28 Z"
                fill="#4ade80" fillOpacity="0.12" />
              <path d="M0 26 L20 20 L40 15 L60 10 L80 6 L100 3 L120 0"
                stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </m.div>

          <m.div
            className={`${glass} p-3`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.28 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-green-400/15 text-green-400">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </span>
              <p className="text-[12px] font-bold text-white">Leads</p>
            </div>
            <p className="text-[11px] text-white/55">3X pipeline velocity</p>
            <p className="mt-2 text-[20px] font-bold text-white">+121%</p>
          </m.div>
        </div>

      </div>
    </>
  );
}
