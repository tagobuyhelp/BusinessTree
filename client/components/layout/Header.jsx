"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useScroll } from "../../hooks/useScroll";

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

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const reduceMotion = useReducedMotion();
  const { isScrolled } = useScroll({ threshold: 8 });

  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const servicesWrapperRef = useRef(null);

  const navItems = useMemo(
    () => [
      { href: "/", label: "Home", icon: "home" },
      { href: "/case-studies", label: "Case Studies", icon: "workspace_premium" },
      { href: "/about", label: "About", icon: "info" },
      { href: "/blog", label: "Blog", icon: "article" },
      { href: "/contact", label: "Contact", icon: "mail" }
    ],
    []
  );

  useOutsideClick(servicesWrapperRef, () => setServicesOpen(false), servicesOpen);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    openTimerRef.current = null;
    closeTimerRef.current = null;
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const scheduleOpen = useCallback(() => {
    clearTimers();
    openTimerRef.current = window.setTimeout(() => setServicesOpen(true), 150);
  }, [clearTimers]);

  const scheduleClose = useCallback(() => {
    clearTimers();
    closeTimerRef.current = window.setTimeout(() => setServicesOpen(false), 140);
  }, [clearTimers]);

  const closeServicesNow = useCallback(() => {
    clearTimers();
    setServicesOpen(false);
  }, [clearTimers]);

  const onServicesKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeServicesNow();
        return;
      }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setServicesOpen((v) => !v);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setServicesOpen(true);
        window.setTimeout(() => {
          const firstLink = document.querySelector("#services-mega-menu a");
          firstLink?.focus?.();
        }, 0);
      }
    },
    [closeServicesNow]
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={reduceMotion ? false : { y: -12, opacity: 0 }}
        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={reduceMotion ? undefined : { type: "spring", stiffness: 520, damping: 46 }}
        className={cx("sticky top-0 z-50 w-full")}
      >
        <div className={cx("absolute inset-0 pointer-events-none backdrop-blur")}>
          <m.div
            className="absolute inset-0 bg-headerBg"
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
          />
          <m.div
            className="absolute inset-0 bg-primary"
            animate={{ opacity: isScrolled ? 1 : 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
          />
          <m.div
            className="absolute bottom-0 left-0 right-0 h-px bg-borderOnBrand"
            animate={{ opacity: isScrolled ? 1 : 0.7 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
          />
        </div>

        <nav aria-label="Primary" className="relative">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className={cx(
                "inline-flex items-center gap-3 rounded-md",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
              aria-label="Business Tree home"
            >
              <Image
                src="/images/logos/logo2iconwhite.png"
                alt="Business Tree"
                width={220}
                height={72}
                priority
                className="block h-10 w-auto"
              />
              <span className="font-heading text-h4 text-onPrimary">Business Tree</span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              <Link
                href="/"
                className={cx(
                  "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-body font-medium text-onPrimary",
                  "hover:bg-headerHover",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                )}
              >
                <Icon name="home" className="text-[20px] text-onPrimaryMuted" />
                <span>Home</span>
              </Link>

              <div
                ref={servicesWrapperRef}
                className="relative"
                onMouseEnter={scheduleOpen}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={cx(
                    "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-body font-medium text-onPrimary",
                    "hover:bg-headerHover",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  )}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  aria-controls="services-mega-menu"
                  onKeyDown={onServicesKeyDown}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  <Icon name="grid_view" className="text-[20px] text-onPrimaryMuted" />
                  <span>Services</span>
                  <Icon
                    name={servicesOpen ? "expand_less" : "expand_more"}
                    className="text-[20px] text-onPrimaryMuted"
                  />
                </button>

                <MegaMenu
                  id="services-mega-menu"
                  isOpen={servicesOpen}
                  onClose={closeServicesNow}
                  onMouseEnter={scheduleOpen}
                  onMouseLeave={scheduleClose}
                  onItemClick={closeServicesNow}
                />
              </div>

              {navItems
                .filter((i) => i.href !== "/")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-body font-medium text-onPrimary",
                      "hover:bg-headerHover",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    )}
                  >
                    <Icon name={item.icon} className="text-[20px] text-onPrimaryMuted" />
                    <span>{item.label}</span>
                  </Link>
                ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <m.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.02, 1]
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 2.2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                      }
                }
              >
                <CTAButton
                  label="Get Free Strategy"
                  className="bg-transparent border border-white border-solid text-white hover:bg-secondary active:bg-accent"
                />
              </m.div>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={cx(
                  "inline-flex h-12 w-12 items-center justify-center rounded-md",
                  "border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                )}
                aria-label="Open menu"
              >
                <Icon name="menu" className="text-[24px] text-onPrimary" />
              </button>
            </div>
          </div>
        </nav>
      </m.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </LazyMotion>
  );
}
