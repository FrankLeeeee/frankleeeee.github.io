import "../styles/globals.css";
import { Raleway } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const raleway = Raleway({ subsets: ["latin"] });

// // This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      {/* google analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6040R6MSMR"
      ></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6040R6MSMR');`}
      </Script>

      {/* next-seo */}
      <DefaultSeo {...SEO} />

      {/* head */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
