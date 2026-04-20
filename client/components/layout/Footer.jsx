"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

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

export function Footer() {
  const reduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState(null);

  const services = useMemo(
    () => [
      { href: "/services/seo", label: "SEO", icon: "trending_up" },
      { href: "/services/digital-marketing", label: "Digital Marketing", icon: "insights" },
      { href: "/services/web-development", label: "Web Development", icon: "code" },
      { href: "/services/social-media", label: "Social Media", icon: "public" }
    ],
    []
  );

  const company = useMemo(
    () => [
      { href: "/about", label: "About", icon: "info" },
      { href: "/case-studies", label: "Case Studies", icon: "workspace_premium" },
      { href: "/blog", label: "Blog", icon: "article" },
      { href: "/contact", label: "Contact", icon: "mail" }
    ],
    []
  );

  const toggle = useCallback((id) => {
    setOpenId((v) => (v === id ? null : id));
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.footer
        className="border-t border-borderOnBrand bg-primary text-onPrimary"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="space-y-4 md:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3">
                <Image src="/images/logos/logo2iconwhite.png" alt="Business Tree" width={44} height={44} />
                <span className="font-heading text-h4 text-onPrimary">Business Tree</span>
              </Link>
              <p className="max-w-sm text-small text-onPrimaryMuted">
                Premium growth + web experiences for modern teams. Strategy, execution, and measurable results.
              </p>

              <div className="rounded-xl border border-borderOnBrand bg-headerBg p-4">
                <div className="text-small font-medium text-onPrimary">Ready to grow your business globally?</div>
                <div className="mt-1 text-small text-onPrimaryMuted">Get a free strategy with quick wins and next steps.</div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className={cx(
                      "inline-flex items-center gap-2 rounded-md border border-borderOnBrand bg-transparent px-3 py-2 text-small font-medium text-onPrimary",
                      "hover:bg-headerHover",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    )}
                  >
                    <Icon name="bolt" className="text-[18px] text-onPrimary" />
                    <span>Start Growing Now</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 md:hidden">
                <div className="rounded-lg border border-borderOnBrand bg-headerBg p-3">
                  <div className="text-small font-medium text-onPrimary">+32%</div>
                  <div className="mt-1 text-[11px] text-onPrimaryMuted">Avg. conversion lift</div>
                </div>
                <div className="rounded-lg border border-borderOnBrand bg-headerBg p-3">
                  <div className="text-small font-medium text-onPrimary">90 days</div>
                  <div className="mt-1 text-[11px] text-onPrimaryMuted">To measurable results</div>
                </div>
                <div className="rounded-lg border border-borderOnBrand bg-headerBg p-3">
                  <div className="text-small font-medium text-onPrimary">Global</div>
                  <div className="mt-1 text-[11px] text-onPrimaryMuted">Remote-first delivery</div>
                </div>
              </div>
            </div>

            <div className="hidden space-y-3 md:block">
              <div className="text-small font-medium text-onPrimary">Services</div>
              <ul className="space-y-2 text-small">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link className="inline-flex items-center gap-2 text-onPrimaryMuted hover:text-onPrimary" href={s.href}>
                      <Icon name={s.icon} className="text-[18px] text-onPrimaryMuted" />
                      <span>{s.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden space-y-3 md:block">
              <div className="text-small font-medium text-onPrimary">Company</div>
              <ul className="space-y-2 text-small">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link className="inline-flex items-center gap-2 text-onPrimaryMuted hover:text-onPrimary" href={c.href}>
                      <Icon name={c.icon} className="text-[18px] text-onPrimaryMuted" />
                      <span>{c.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden space-y-4 md:block">
              <div className="text-small font-medium text-onPrimary">Contact</div>
              <ul className="space-y-3 text-small text-onPrimaryMuted">
                <li className="flex items-start gap-2">
                  <Icon name="mail" className="mt-0.5 text-[18px] text-onPrimaryMuted" />
                  <a className="hover:text-onPrimary" href="mailto:hello@businesstree.com">
                    hello@businesstree.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="call" className="mt-0.5 text-[18px] text-onPrimaryMuted" />
                  <a className="hover:text-onPrimary" href="tel:+10000000000">
                    +1 (000) 000-0000
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="location_on" className="mt-0.5 text-[18px] text-onPrimaryMuted" />
                  <span>Remote-first</span>
                </li>
              </ul>

              <div className="flex items-center gap-2">
                {[
                  { label: "Website", icon: "language", href: "#" },
                  { label: "Community", icon: "forum", href: "#" },
                  { label: "Updates", icon: "alternate_email", href: "#" }
                ].map((s) => (
                  <m.a
                    key={s.label}
                    href={s.href}
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className={cx(
                      "inline-flex h-10 w-10 items-center justify-center rounded-md",
                      "border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    )}
                    aria-label={s.label}
                  >
                    <Icon name={s.icon} className="text-[20px]" />
                  </m.a>
                ))}
              </div>
            </div>

            <div className="md:hidden space-y-3">
              {[
                { id: "services", title: "Services" },
                { id: "company", title: "Company" },
                { id: "contact", title: "Contact" }
              ].map((item) => {
                const expanded = openId === item.id;
                return (
                  <div key={item.id} className="rounded-xl border border-borderOnBrand bg-headerBg">
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      className={cx(
                        "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
                        "text-small font-medium text-onPrimary",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                      )}
                      aria-expanded={expanded ? "true" : "false"}
                      aria-controls={`footer-acc-${item.id}`}
                    >
                      <span>{item.title}</span>
                      <Icon name={expanded ? "expand_less" : "expand_more"} className="text-[22px] text-onPrimaryMuted" />
                    </button>
                    <m.div
                      id={`footer-acc-${item.id}`}
                      initial={false}
                      animate={
                        expanded
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        {item.id === "services" ? (
                          <ul className="space-y-2 text-small">
                            {services.map((s) => (
                              <li key={s.href}>
                                <Link className="inline-flex items-center gap-2 text-onPrimaryMuted hover:text-onPrimary" href={s.href}>
                                  <Icon name={s.icon} className="text-[18px] text-onPrimaryMuted" />
                                  <span>{s.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {item.id === "company" ? (
                          <ul className="space-y-2 text-small">
                            {company.map((c) => (
                              <li key={c.href}>
                                <Link className="inline-flex items-center gap-2 text-onPrimaryMuted hover:text-onPrimary" href={c.href}>
                                  <Icon name={c.icon} className="text-[18px] text-onPrimaryMuted" />
                                  <span>{c.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {item.id === "contact" ? (
                          <div className="space-y-4">
                            <ul className="space-y-3 text-small text-onPrimaryMuted">
                              <li className="flex items-start gap-2">
                                <Icon name="mail" className="mt-0.5 text-[18px] text-onPrimaryMuted" />
                                <a className="hover:text-onPrimary" href="mailto:hello@businesstree.com">
                                  hello@businesstree.com
                                </a>
                              </li>
                              <li className="flex items-start gap-2">
                                <Icon name="call" className="mt-0.5 text-[18px] text-onPrimaryMuted" />
                                <a className="hover:text-onPrimary" href="tel:+10000000000">
                                  +1 (000) 000-0000
                                </a>
                              </li>
                              <li className="flex items-start gap-2">
                                <Icon name="location_on" className="mt-0.5 text-[18px] text-onPrimaryMuted" />
                                <span>Remote-first</span>
                              </li>
                            </ul>

                            <div className="flex items-center gap-2">
                              {[
                                { label: "Website", icon: "language", href: "#" },
                                { label: "Community", icon: "forum", href: "#" },
                                { label: "Updates", icon: "alternate_email", href: "#" }
                              ].map((s) => (
                                <m.a
                                  key={s.label}
                                  href={s.href}
                                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                                  className={cx(
                                    "inline-flex h-10 w-10 items-center justify-center rounded-md",
                                    "border border-borderOnBrand bg-transparent text-onPrimary hover:bg-headerHover",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                                  )}
                                  aria-label={s.label}
                                >
                                  <Icon name={s.icon} className="text-[20px]" />
                                </m.a>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </m.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      <div className="border-t border-borderOnBrand bg-headerBg">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-small text-onPrimaryMuted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} Business Tree. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link className="hover:text-onPrimary" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-onPrimary" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
      </m.footer>
    </LazyMotion>
  );
}
