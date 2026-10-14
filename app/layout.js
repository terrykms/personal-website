import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Layout from "@/components/layout/layout";
import { oswald, openSans } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const description =
  "A personal website showcasing my projects, interests, and professional journey in software engineering and entrepreneurship.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Minseo Kim",
    template: "%s · Minseo Kim",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Minseo Kim",
    title: "Minseo Kim",
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    apple: "/favicon/apple-touch-icon.png",
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    manifest: "/favicon/site.webmanifest",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body>
        <Layout>
          {children}
          <Analytics />
          <SpeedInsights />
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
