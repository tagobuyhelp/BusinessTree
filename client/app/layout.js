import "./../styles/globals.css";

import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

import { ThemeProvider } from "../context/ThemeContext";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { BottomNav } from "../components/layout/BottomNav";
import { CustomCursor } from "../components/ui/CustomCursor";
import { ScrollProgress } from "../components/ui/ScrollProgress";

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"]
});

const fontHeading = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  fallback: ["ui-serif", "Georgia", "serif"]
});

// Runs before React hydration to avoid a flash of the wrong theme (FOUC).
const themeInitScript = `
(() => {
  try {
    const key = "bt-theme";
    const saved = localStorage.getItem(key);
    const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved === "light" || saved === "dark" ? saved : (systemDark ? "dark" : "light");
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  } catch {}
})();
`;

export const metadata = {
  title: "Business Tree",
  description: "Business Tree — design-token driven UI",
  icons: {
    icon: "/images/logos/BusinessTreeLogoPng.png",
    apple: "/images/logos/BusinessTreeLogoPng.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontHeading.variable}`}
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <Header />
          {children}
          <BottomNav />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
