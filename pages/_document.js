import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Personal website of Frank Lee (Shenggui Li)"
        />
        <meta
          name="keywords"
          content="Frank Lee, Shenggui Li, HPC, AI, Full Stack, Engineering, Open-source"
        ></meta>
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Frank Lee (Shenggui Li) | Strive for Excellence"
        />
        <meta
          property="og:description"
          content="Personal website of Frank Lee (Shenggui Li)"
        />
        <meta
          property="og:site_name"
          content="Frank Lee (Shenggui Li) | Strive for Excellence"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
