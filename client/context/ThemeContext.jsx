"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "bt-theme";

const ThemeContext = createContext(null);

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

function getDomTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function isThemeValue(value) {
  return value === "light" || value === "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getDomTheme());
  const [usesSystemPreference, setUsesSystemPreference] = useState(false);

  const applyThemeToDom = useCallback((nextTheme, { animate } = { animate: true }) => {
    const root = document.documentElement;

    // Enables smooth transitions only when the user explicitly changes theme.
    if (animate) {
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 220);
    }

    root.classList.toggle("dark", nextTheme === "dark");
  }, []);

  useEffect(() => {
    // Initial theme hydration (no FOUC is handled by the inline script in app/layout.js).
    const saved = localStorage.getItem(STORAGE_KEY);

    if (isThemeValue(saved)) {
      setUsesSystemPreference(false);
      setTheme(saved);
      applyThemeToDom(saved, { animate: false });
      return;
    }

    const systemTheme = getSystemTheme();
    setUsesSystemPreference(true);
    setTheme(systemTheme);
    applyThemeToDom(systemTheme, { animate: false });
  }, [applyThemeToDom]);

  useEffect(() => {
    // If there's no user preference saved, keep the UI synced with OS theme changes.
    if (!usesSystemPreference) return;

    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mql) return;

    const onChange = (event) => {
      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyThemeToDom(nextTheme, { animate: false });
    };

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, [applyThemeToDom, usesSystemPreference]);

  useEffect(() => {
    // Cross-tab sync: theme changes propagate via the Storage event.
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;

      const next = event.newValue;
      if (isThemeValue(next)) {
        setUsesSystemPreference(false);
        setTheme(next);
        applyThemeToDom(next, { animate: false });
        return;
      }

      const systemTheme = getSystemTheme();
      setUsesSystemPreference(true);
      setTheme(systemTheme);
      applyThemeToDom(systemTheme, { animate: false });
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [applyThemeToDom]);

  const setThemePreference = useCallback(
    (nextTheme) => {
      if (!isThemeValue(nextTheme)) return;

      localStorage.setItem(STORAGE_KEY, nextTheme);
      setUsesSystemPreference(false);
      setTheme(nextTheme);
      applyThemeToDom(nextTheme, { animate: true });
    },
    [applyThemeToDom]
  );

  const clearThemePreference = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);

    const systemTheme = getSystemTheme();
    setUsesSystemPreference(true);
    setTheme(systemTheme);
    applyThemeToDom(systemTheme, { animate: true });
  }, [applyThemeToDom]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setThemePreference(nextTheme);
  }, [setThemePreference, theme]);

  const value = useMemo(
    () => ({
      theme,
      usesSystemPreference,
      setTheme: setThemePreference,
      clearThemePreference,
      toggleTheme
    }),
    [clearThemePreference, setThemePreference, theme, toggleTheme, usesSystemPreference]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider />");
  return ctx;
}
