import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Personal website of Shenggui Li" />
        <meta
          name="keywords"
          content="Shenggui Li, Li Shenggui, Shenggui, Frank Lee, FrankLeeeeee, NTU"
        ></meta>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* open-graph settings */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shenggui Li" />
        <meta
          property="og:description"
          content="Personal website of Shenggui Li"
        />
        <meta property="og:site_name" content="Shenggui Li" />
        <meta
          property="og:image"
          content="https://franklee.xyz/assets/logo.png"
        />
        <meta property="og:url" content="https://franklee.xyz"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
