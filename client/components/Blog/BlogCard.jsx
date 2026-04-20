"use client";

import React from "react";
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

export function BlogCard({ post, onOpen, featured = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <Link
        href={`/blog/${encodeURIComponent(post.slug)}`}
        onClick={(e) => {
          if (!onOpen) return;
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          e.preventDefault();
          onOpen(post);
        }}
        className={cx(
          "group block w-full text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        )}
        aria-label={`Read more: ${post.title}`}
      >
        <m.article
          className={cx(
            "overflow-hidden rounded-2xl border border-border bg-surface shadow-sm",
            featured ? "p-0" : ""
          )}
          whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 34 }}
        >
          <div className={cx("relative w-full", featured ? "aspect-[16/9]" : "aspect-[16/10]")}>
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              sizes={featured ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 1024px) 420px, 100vw"}
              className="object-cover"
              priority={featured}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-medium text-white">
              <Icon name="label" className="text-[16px]" />
              <span>{post.categoryLabel}</span>
            </div>
          </div>

          <div className={cx("space-y-3", featured ? "p-6 sm:p-7" : "p-5")}>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-textSecondary">
                <span>{post.dateLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className={cx("font-heading font-semibold text-textPrimary", featured ? "text-h3" : "text-body")}>
                {post.title}
              </h3>
              <p className={cx("text-small text-textSecondary", featured ? "line-clamp-2" : "line-clamp-2")}>
                {post.excerpt}
              </p>
            </div>

            <div className="inline-flex min-h-[44px] items-center gap-2 text-small font-semibold text-accent">
              <span>Read More</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </div>
          </div>
        </m.article>
      </Link>
    </LazyMotion>
  );
}
