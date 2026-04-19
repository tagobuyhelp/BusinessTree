import { useEffect, useMemo, useRef, useState } from "react";

export function useActiveSection(sectionIds, { rootMargin = "-20% 0px -55% 0px" } = {}) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const ratiosRef = useRef(new Map());
  const [activeId, setActiveId] = useState(ids[0] || null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const updateActive = () => {
      let bestId = activeId;
      let bestRatio = -1;

      for (const el of elements) {
        const id = el.id;
        const ratio = ratiosRef.current.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      setActiveId(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratiosRef.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        updateActive();
      },
      {
        root: null,
        rootMargin,
        threshold: [0, 0.15, 0.25, 0.35, 0.5, 0.65, 0.8, 1]
      }
    );

    for (const el of elements) observer.observe(el);
    updateActive();

    return () => observer.disconnect();
  }, [activeId, ids, rootMargin]);

  return { activeId };
}

