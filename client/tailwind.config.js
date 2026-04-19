/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        overlay: "var(--color-overlay)",
        tint: "var(--color-tint)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        onPrimary: "var(--color-on-primary)",
        onSecondary: "var(--color-on-secondary)",
        onAccent: "var(--color-on-accent)",
        onSuccess: "var(--color-on-success)",
        onWarning: "var(--color-on-warning)",
        onError: "var(--color-on-error)",
        onPrimaryMuted: "var(--color-on-primary-muted)",
        onPrimarySoft: "var(--color-on-primary-soft)",
        borderOnBrand: "var(--color-border-on-brand)",
        headerBg: "var(--color-header-bg)",
        headerHover: "var(--color-header-hover)"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      fontSize: {
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-heading)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-heading)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-heading)" }],
        h4: ["var(--text-h4)", { lineHeight: "var(--leading-heading)" }],
        bodyLg: ["var(--text-body-lg)", { lineHeight: "var(--leading-body)" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        small: ["var(--text-small)", { lineHeight: "var(--leading-body)" }],
        label: ["var(--text-label)", { lineHeight: "var(--leading-body)" }]
      },
      fontWeight: {
        regular: "var(--weight-regular)",
        medium: "var(--weight-medium)",
        semibold: "var(--weight-semibold)",
        bold: "var(--weight-bold)"
      }
    }
  },
  plugins: []
};
