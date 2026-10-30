import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ConsentManager } from "@/components/consent/ConsentManager";
import { Defingerprint } from "@/components/layout/Defingerprint";
import { Footer } from "@/components/layout/Footer";
import { getAnalyticsConfig, googleSiteVerification, hasAnyTracker } from "@/config/analytics";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { RevealObserver } from "@/components/reveal/RevealObserver";
import { brandColors } from "@/config/brand";
import { site } from "@/config/site";
import { JsonLd, organizationJsonLd } from "@/lib/jsonld";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const defaultTitle = `${site.name} | Software, data, AI and digital services`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
    title: defaultTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: brandColors.ink,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const analytics = getAnalyticsConfig();
  return (
    <html lang="en-GB" className={poppins.variable}>
      <body className="flex min-h-dvh flex-col">
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <Defingerprint />
        {hasAnyTracker(analytics) ? <ConsentManager config={analytics} /> : null}
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
