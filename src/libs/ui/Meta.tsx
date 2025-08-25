import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export const Meta = ({ title, keywords, description }: Metadata) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={
            Array.isArray(keywords) ? keywords.join(",") : keywords || undefined
          }
        />
        <meta name="description" content={description || undefined} />
        <meta charSet="utf-8" />

        {/* Favicon links */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />

        <title>{typeof title === "string" ? title : <>{title}</>}</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        strategy="afterInteractive"
      />
    </>
  );
};
