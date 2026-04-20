"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { Button } from "../ui/Button";
import { Card, CardBody } from "../ui/Card";
import { Section, SectionInner } from "../ui/Section";
import { BlogCard } from "./BlogCard";
import { BlogFilter } from "./BlogFilter";

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

function PostModal({ open, onClose, post }) {
  const reduceMotion = useReducedMotion();

  if (!open) return null;

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open ? (
          <m.div
            className="fixed inset-0 z-[95]"
            role="dialog"
            aria-modal="true"
            aria-label={`Blog post: ${post?.title || "Post"}`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.18 }}
          >
            <m.div
              className="absolute inset-0 bg-overlay backdrop-blur-sm"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose?.();
              }}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.18 }}
            />

            <div className="relative flex h-full w-full items-end justify-center p-0 sm:items-center sm:p-6">
              <m.div
                className={cx(
                  "relative w-full rounded-t-3xl border border-border bg-surface shadow-2xl",
                  "max-h-[92vh] overflow-hidden",
                  "sm:max-w-3xl sm:rounded-3xl"
                )}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: 12 }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
              >
                <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-[11px] font-medium text-textSecondary">
                      <Icon name="label" className="text-[16px]" />
                      <span>{post?.categoryLabel}</span>
                    </div>
                    <div className="mt-3 text-h3">{post?.title}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-textSecondary">
                      <span>{post?.dateLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post?.readTime}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className={cx(
                      "inline-flex h-11 w-11 items-center justify-center rounded-md",
                      "border border-border bg-surface text-textPrimary hover:bg-bg",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    )}
                    aria-label="Close modal"
                  >
                    <Icon name="close" className="text-[22px]" />
                  </button>
                </div>

                <div className="max-h-[calc(92vh-160px)] overflow-y-auto px-5 py-5 sm:px-6">
                  <div className="space-y-6">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-bg">
                      <Image
                        src={post?.imageSrc}
                        alt={post?.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 800px, 100vw"
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-12">
                      <div className="md:col-span-8">
                        <div className="text-body text-textSecondary">{post?.body}</div>
                      </div>
                      <div className="md:col-span-4 md:border-l md:border-border md:pl-6">
                        <div className="text-small font-semibold text-textPrimary">Want help implementing this?</div>
                        <div className="mt-2 text-small text-textSecondary">
                          Get a free strategy tailored to your business goals.
                        </div>
                        <div className="mt-4">
                          <Button asChild className="w-full">
                            <Link href="/contact" className="w-full justify-center">
                              Get Free Strategy
                            </Link>
                          </Button>
                        </div>
                        <div className="mt-3 text-small text-textSecondary">No spam. No commitment.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </LazyMotion>
  );
}

export function BlogPage() {
  const reduceMotion = useReducedMotion();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const posts = useMemo(
    () => [
      {
        slug: "seo-checklist-2026",
        category: "seo",
        categoryLabel: "SEO",
        title: "The SEO Checklist That Actually Moves Rankings in 2026",
        excerpt: "A practical checklist to fix technical issues, ship better content, and improve conversions.",
        dateLabel: "Apr 2026",
        readTime: "6 min read",
        imageSrc: "/images/logos/BusinessTreeLogoHorizental.png",
        imageAlt: "SEO growth guide",
        featured: true,
        body:
          "Most SEO fails because execution is scattered. Start with technical fundamentals, then build content around high-intent queries, and close the loop with conversion improvements. The fastest wins come from fixing indexation, cleaning internal links, and aligning pages with search intent."
      },
      {
        slug: "meta-ads-scaling",
        category: "marketing",
        categoryLabel: "Marketing",
        title: "How to Scale Meta Ads Without Burning Budget",
        excerpt: "A simple system to test creatives, control CPA, and scale what works profitably.",
        dateLabel: "Apr 2026",
        readTime: "5 min read",
        imageSrc: "/images/logos/BusinessTreeLogoPng.png",
        imageAlt: "Paid ads strategy",
        body:
          "Scaling ads is not spending more. It’s controlling variables: creative, offer, landing page, and tracking. Start with a tight testing cadence, isolate winners, and scale with clear guardrails on CPA and conversion rate."
      },
      {
        slug: "landing-page-cro",
        category: "growth",
        categoryLabel: "Growth",
        title: "Landing Page CRO: 9 Fixes That Increase Conversions Fast",
        excerpt: "Improve clarity, trust, and speed with changes you can ship this week.",
        dateLabel: "Mar 2026",
        readTime: "7 min read",
        imageSrc: "/images/logos/BusinessTreeLogo.png",
        imageAlt: "Conversion optimization tips",
        body:
          "Conversion lift usually comes from clarity. Tighten the headline, add proof, reduce friction, and make your CTA obvious. Then measure drop-offs to prioritize the next iteration."
      },
      {
        slug: "web-performance",
        category: "web",
        categoryLabel: "Web Development",
        title: "Speed Wins: Why Performance Is a Conversion Strategy",
        excerpt: "What to fix first to improve Core Web Vitals and reduce drop-offs.",
        dateLabel: "Mar 2026",
        readTime: "4 min read",
        imageSrc: "/images/logos/BusinessTreeLogoHorizentalDarkBgSp.png",
        imageAlt: "Website performance guide",
        body:
          "Performance is UX. Start with images, font loading, and script budgets. Improving LCP and INP increases trust and reduces bounce — especially on mobile."
      },
      {
        slug: "brand-authority",
        category: "branding",
        categoryLabel: "Branding",
        title: "Brand Authority: The Shortest Path to Trust",
        excerpt: "How to build credibility signals that speed up conversions and sales cycles.",
        dateLabel: "Feb 2026",
        readTime: "6 min read",
        imageSrc: "/images/logos/BusinessTreeLogoPng.png",
        imageAlt: "Brand authority strategies",
        body:
          "Authority is a system: proof, positioning, and consistency. Build trust signals across your homepage, your content, and your offers. Then make it easy to take the next step."
      },
      {
        slug: "content-system",
        category: "marketing",
        categoryLabel: "Marketing",
        title: "The Content System That Creates Leads (Not Just Likes)",
        excerpt: "A repeatable content engine that supports SEO, ads, and conversions.",
        dateLabel: "Feb 2026",
        readTime: "5 min read",
        imageSrc: "/images/logos/BusinessTreeLogo.png",
        imageAlt: "Content marketing system",
        body:
          "Great content supports every channel. Start with a clear offer, build pillar pages, then repurpose into social content. Measure lead quality, not reach."
      },
      {
        slug: "local-seo",
        category: "seo",
        categoryLabel: "SEO",
        title: "Local SEO: How to Win the Map Pack",
        excerpt: "A practical playbook for rankings, reviews, and conversion-first service pages.",
        dateLabel: "Jan 2026",
        readTime: "6 min read",
        imageSrc: "/images/logos/BusinessTreeLogoHorizental.png",
        imageAlt: "Local SEO guide",
        body:
          "Local SEO is a blend of relevance and trust. Improve your GBP, structure your service pages, and build review velocity. Then track calls and form leads."
      },
      {
        slug: "offer-positioning",
        category: "growth",
        categoryLabel: "Growth",
        title: "Offer Positioning: Make the Decision Easy",
        excerpt: "How to clarify value, reduce doubt, and increase conversion rates across channels.",
        dateLabel: "Jan 2026",
        readTime: "5 min read",
        imageSrc: "/images/logos/BusinessTreeLogoPng.png",
        imageAlt: "Offer positioning",
        body:
          "Your offer is the fastest lever. Tighten the promise, the proof, and the path to yes. Then align your landing page and ads to that message."
      }
    ],
    []
  );

  const featured = useMemo(() => posts.find((p) => p.featured) || posts[0], [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => (category === "all" ? true : p.category === category))
      .filter((p) => {
        if (!q) return true;
        return `${p.title} ${p.excerpt} ${p.categoryLabel}`.toLowerCase().includes(q);
      });
  }, [category, posts, query]);

  const visiblePosts = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  const openPost = useCallback(
    (post) => {
      setActive(post);
      setOpen(true);
    },
    []
  );

  const closePost = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <main>
        <Section className="py-0">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
            </div>

            <SectionInner>
              <m.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
                className="py-10 md:py-14 lg:py-16"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
                  <div className="space-y-5 lg:col-span-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-borderOnBrand bg-headerBg px-3 py-1 text-[13px] text-onPrimaryMuted">
                      <Icon name="article" className="text-[18px] text-onPrimary" />
                      <span>Actionable insights you can apply this week</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                      Insights, Strategies & Growth Guides
                    </h1>
                    <p className="max-w-2xl text-body text-onPrimaryMuted">
                      Learn how to scale your business with digital marketing, SEO, and growth systems.
                    </p>

                    <div className="max-w-xl">
                      <label htmlFor="blog-search" className="sr-only">
                        Search blog posts
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-onPrimaryMuted">
                          search
                        </span>
                        <input
                          id="blog-search"
                          value={query}
                          onChange={(e) => {
                            setQuery(e.target.value);
                            setVisibleCount(6);
                          }}
                          placeholder="Search articles…"
                          className={cx(
                            "h-11 w-full rounded-md border border-borderOnBrand bg-headerBg pl-10 pr-3 text-body text-onPrimary",
                            "placeholder:text-onPrimaryMuted",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-borderOnBrand bg-headerBg p-5 text-onPrimary shadow-sm">
                      <div className="text-small font-semibold">Want this done for you?</div>
                      <div className="mt-2 text-small text-onPrimaryMuted">
                        Get a free strategy tailored to your business goals.
                      </div>
                      <div className="mt-4">
                        <CTAButton
                          label="Get Free Strategy"
                          fullWidth
                          className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                        />
                      </div>
                      <div className="mt-3 text-[12px] text-onPrimarySoft">No spam. No commitment.</div>
                    </div>
                  </div>
                </div>
              </m.div>
            </SectionInner>
          </div>
        </Section>

        <Section tone="surface" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-h2">Featured Post</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Start here for a high-impact guide with quick wins and next steps.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-8">
                  <BlogCard post={featured} featured onOpen={openPost} />
                </div>

                <aside className="lg:col-span-4">
                  <div className="space-y-4">
                    <Card>
                      <CardBody className="space-y-3">
                        <div className="text-body font-semibold text-textPrimary">Popular posts</div>
                        <div className="space-y-2">
                          {posts
                            .filter((p) => p.slug !== featured.slug)
                            .slice(0, 4)
                            .map((p) => (
                              <button
                                key={p.slug}
                                type="button"
                                onClick={() => openPost(p)}
                                className={cx(
                                  "flex w-full items-start justify-between gap-3 rounded-lg border border-border bg-bg px-3 py-3 text-left",
                                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                                )}
                              >
                                <div className="min-w-0">
                                  <div className="text-small font-semibold text-textPrimary line-clamp-1">{p.title}</div>
                                  <div className="mt-1 text-[11px] font-medium text-textSecondary">
                                    {p.categoryLabel} · {p.readTime}
                                  </div>
                                </div>
                                <Icon name="arrow_forward" className="mt-0.5 text-[18px] text-textSecondary" />
                              </button>
                            ))}
                        </div>
                      </CardBody>
                    </Card>

                    <div className="rounded-2xl border border-border bg-tint p-5">
                      <div className="text-body font-semibold text-textPrimary">Want help scaling your business?</div>
                      <div className="mt-2 text-small text-textSecondary">
                        We’ll build a strategy designed for leads, conversions, and measurable growth.
                      </div>
                      <div className="mt-4">
                        <Button asChild className="w-full">
                          <Link href="/contact" className="w-full justify-center">
                            Get Free Strategy
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </m.div>
          </SectionInner>
        </Section>

        <Section tone="tint" className="py-10 md:py-12 lg:py-16">
          <SectionInner>
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-h2">Browse Posts</h2>
                <p className="mt-3 text-body text-textSecondary">
                  Filter by category, skim the summary, then open the full post when it’s relevant.
                </p>
              </div>

              <BlogFilter
                value={category}
                onChange={(v) => {
                  setCategory(v);
                  setVisibleCount(6);
                }}
              />

              <m.div
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                variants={
                  reduceMotion
                    ? {}
                    : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
                }
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ once: true, amount: 0.2 }}
              >
                {visiblePosts.map((p) => (
                  <m.div key={p.slug} variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                    <BlogCard post={p} onOpen={openPost} />
                  </m.div>
                ))}
              </m.div>

              {visibleCount < filtered.length ? (
                <div className="flex justify-center pt-2">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto"
                    onClick={() => setVisibleCount((v) => v + 6)}
                  >
                    Load More
                  </Button>
                </div>
              ) : null}
            </m.div>
          </SectionInner>
        </Section>

        <Section className="py-0">
          <div className="relative overflow-hidden border-y border-borderOnBrand bg-gradient-to-br from-primary to-secondary">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
            </div>

            <SectionInner>
              <m.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={reduceMotion ? undefined : { duration: 0.32, ease: "easeOut" }}
                className="relative py-10 pb-16 text-center md:py-14 md:pb-20"
              >
                <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-onPrimary md:text-4xl lg:text-h1">
                  Want help scaling your business?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-body text-onPrimaryMuted">
                  Get a free strategy with clear next steps tailored to your goals.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                  <CTAButton
                    label="Get Free Strategy"
                    fullWidth
                    className="!bg-white !text-black hover:!bg-white hover:!text-black active:!bg-white"
                  />
                </div>

                <div className="mt-6 text-small text-onPrimarySoft">No spam. No commitment.</div>
              </m.div>
            </SectionInner>
          </div>
        </Section>

        <PostModal open={open} onClose={closePost} post={active} />
      </main>
    </LazyMotion>
  );
}
