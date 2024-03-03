import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Open_Sans, Oswald } from "next/font/google";

import Layout from "@/components/layout/layout";

import "@/styles/globals.scss";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <style jsx global>{`
        :root {
          --font-open-sans: ${openSans.style.fontFamily};
          --font-oswald: ${oswald.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}
