import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Layout from "@/components/layout/layout";

export const metadata = {
  title: "Minseo's Personal Website",
  description:
    "A personal website showcasing my projects, interests, and professional journey in software engineering and entrepreneurship.",
  viewport: "width=device-width, initial-scale=1",
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
    <html lang="en">
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
