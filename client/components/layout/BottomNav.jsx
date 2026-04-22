"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll } from "framer-motion";

import { useActiveSection } from "../../hooks/useActiveSection";

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

export function BottomNav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const items = useMemo(
    () => [
      { id: "home", label: "Home", icon: "home" },
      { id: "services", label: "Services", icon: "grid_view" },
      { id: "why-us", label: "Why Us", icon: "verified" },
      { id: "case-studies", label: "Case Studies", icon: "leaderboard" },
      { id: "contact", label: "Contact", icon: "mail" }
    ],
    []
  );

  const { activeId } = useActiveSection(items.map((i) => i.id));

  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (pathname !== "/") return;

    let raf = 0;
    const unsubscribe = scrollY.on("change", (latest) => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const nextVisible = latest > 200;
        if (nextVisible === visibleRef.current) return;
        visibleRef.current = nextVisible;
        setVisible(nextVisible);
      });
    });

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      unsubscribe();
    };
  }, [pathname, scrollY]);

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("has-bottom-nav", visible && pathname === "/");
    return () => document.body.classList.remove("has-bottom-nav");
  }, [pathname, visible]);

  if (pathname !== "/") return null;

  const onNavigate = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        aria-label="Section navigation"
        className={cx(
          "fixed inset-x-0 bottom-0 z-[75]",
          "px-3 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-2"
        )}
        initial={reduceMotion ? false : { y: 18, opacity: 0 }}
        animate={
          reduceMotion
            ? { opacity: visible ? 1 : 0 }
            : { y: visible ? 0 : 18, opacity: visible ? 1 : 0 }
        }
        transition={reduceMotion ? { duration: 0 } : { duration: 0.18, ease: "easeOut" }}
        style={{ pointerEvents: visible ? "auto" : "none" }}
      >
        <div className="mx-auto w-full min-w-0 max-w-[calc(100vw-24px)] sm:max-w-md lg:max-w-lg">
          <div className="rounded-2xl border border-borderOnBrand bg-headerBg backdrop-blur shadow-xl overflow-hidden">
            <ul className="flex w-full min-w-0 max-w-full items-stretch gap-1 overflow-x-auto overscroll-x-contain scroll-smooth px-1">
              {items.map((item) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id} className="relative flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      className={cx(
                        "flex min-w-[76px] flex-col items-center justify-center gap-1 py-3",
                        "text-[11px] font-medium",
                        active ? "text-onPrimary" : "text-onPrimaryMuted",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                      )}
                      aria-label={item.label}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon name={item.icon} className={cx("text-[22px]", active && "text-onPrimary")} />
                      <span>{item.label}</span>
                      {active ? (
                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </m.nav>
    </LazyMotion>
  );
}
