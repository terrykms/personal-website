import Head from "next/head";
import Layout from "@/components/layout/layout";
import { Open_Sans, Oswald } from "next/font/google";

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
      </Head>
      <style jsx global>{`
        :root {
          --font-open-sans: ${openSans.style.fontFamily};
          --font-oswald: ${oswald.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
