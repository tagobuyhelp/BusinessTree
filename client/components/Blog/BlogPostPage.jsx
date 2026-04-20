"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";
import { Button } from "../ui/Button";
import { Section, SectionInner } from "../ui/Section";
import { BlogCard } from "./BlogCard";

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

function InlineCTA() {
  return (
    <div className="rounded-2xl border border-border bg-tint p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="text-body font-semibold text-textPrimary">Want help scaling your business?</div>
          <div className="mt-1 text-small text-textSecondary">Get a free strategy tailored to your goals.</div>
        </div>
        <div className="w-full sm:w-auto">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/contact" className="w-full justify-center sm:w-auto">
              Get Free Strategy
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ArticleSection({ block }) {
  if (!block) return null;

  if (block.type === "intro") {
    return (
      <section className="space-y-3">
        <h2 className="text-h3">{block.title}</h2>
        {block.paragraphs?.map((p) => (
          <p key={p} className="text-body leading-relaxed text-textSecondary">
            {p}
          </p>
        ))}
      </section>
    );
  }

  if (block.type === "h2") {
    return (
      <section className="space-y-3">
        <h2 className="text-h3">{block.title}</h2>
        {block.paragraphs?.map((p) => (
          <p key={p} className="text-body leading-relaxed text-textSecondary">
            {p}
          </p>
        ))}
        {block.bullets?.length ? (
          <ul className="space-y-2">
            {block.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-body text-textSecondary">
                <Icon name="check_circle" className="mt-0.5 text-[18px] text-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {block.links?.length ? (
          <div className="flex flex-wrap gap-3 pt-1">
            {block.links.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex min-h-[44px] items-center text-small font-semibold text-accent">
                {l.label}
                <Icon name="arrow_forward" className="ml-1 text-[18px]" />
              </Link>
            ))}
          </div>
        ) : null}
      </section>
    );
  }

  if (block.type === "cta") {
    return <InlineCTA />;
  }

  return null;
}

export function BlogPostPage({ post, related }) {
  const reduceMotion = useReducedMotion();

  const readingMeta = useMemo(
    () => [
      { label: post.author, icon: "person" },
      { label: post.datePublished, icon: "calendar_today" },
      { label: post.readTime, icon: "schedule" }
    ],
    [post.author, post.datePublished, post.readTime]
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section tone="surface" className="py-10 md:py-12 lg:py-16">
        <SectionInner>
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.28, ease: "easeOut" }}
            className="mx-auto w-full max-w-3xl space-y-6"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-small text-textSecondary">
                <Link href="/blog" className="inline-flex items-center gap-2 text-accent">
                  <Icon name="arrow_back" className="text-[18px]" />
                  <span>Back to Blog</span>
                </Link>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-[11px] font-medium text-textSecondary">
                  <Icon name="label" className="text-[16px]" />
                  <span>{post.category}</span>
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-textPrimary md:text-4xl">
                {post.title}
              </h1>
              <p className="text-body text-textSecondary">{post.description}</p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-small text-textSecondary">
                {readingMeta.map((m) => (
                  <div key={m.label} className="inline-flex items-center gap-2">
                    <Icon name={m.icon} className="text-[16px]" />
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-bg">
              <Image
                src={post.imageSrc}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 800px, 100vw"
                priority
              />
            </div>

            <m.article
              className="space-y-8"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={reduceMotion ? undefined : { duration: 0.28, ease: "easeOut" }}
            >
              {(post.sections || []).map((block, idx) => (
                <ArticleSection key={`${block.type}-${idx}`} block={block} />
              ))}
            </m.article>

            {Array.isArray(related) && related.length ? (
              <div className="space-y-4 pt-2">
                <h2 className="text-h3">Related Posts</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {related.slice(0, 4).map((p) => (
                    <BlogCard
                      key={p.slug}
                      post={{
                        slug: p.slug,
                        categoryLabel: p.category,
                        title: p.title,
                        excerpt: p.description,
                        dateLabel: p.datePublished,
                        readTime: p.readTime,
                        imageSrc: p.imageSrc,
                        imageAlt: p.imageAlt
                      }}
                    />
                  ))}
                </div>
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
              transition={reduceMotion ? undefined : { duration: 0.28, ease: "easeOut" }}
              className="relative py-10 pb-16 text-center md:py-14 md:pb-20"
            >
              <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-onPrimary md:text-4xl">
                Ready to Grow Your Business?
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
    </LazyMotion>
  );
}
