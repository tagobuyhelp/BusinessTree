import "./../styles/globals.css";

import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

import { siteConfig } from "../lib/seo";
import { organizationJsonLd, websiteJsonLd } from "../lib/structuredData";
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
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Digital Marketing Agency",
    "SEO Services",
    "Web Development",
    "Global Growth",
    "Performance Marketing",
    "Conversion Optimization"
  ],
  icons: {
    icon: "/images/logos/logo2icon.png",
    apple: "/images/logos/logo2icon.png"
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/images/logos/logo2icon.png" }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/logos/logo2icon.png"]
  },
  robots: {
    index: true,
    follow: true
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationJsonLd(), websiteJsonLd()]
            })
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
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
