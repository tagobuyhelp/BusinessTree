"use client";

import React from "react";

import { useTheme } from "../../context/ThemeContext";
import { Button } from "./Button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="outline" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </Button>
  );
}
