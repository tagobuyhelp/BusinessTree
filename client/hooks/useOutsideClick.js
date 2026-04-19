import { useEffect } from "react";

function toArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function useOutsideClick(refs, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const refList = toArray(refs);

    const onPointerDown = (event) => {
      const target = event.target;
      if (!target) return;

      for (const ref of refList) {
        const el = ref?.current;
        if (el && el.contains(target)) return;
      }

      handler?.(event);
    };

    window.addEventListener("pointerdown", onPointerDown, true);
    return () => window.removeEventListener("pointerdown", onPointerDown, true);
  }, [enabled, handler, refs]);
}
