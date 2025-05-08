import "@/styles/globals.css";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-HWEBVEMW1L"
      />
      <Script strategy="lazyOnload" id="google-analytics-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HWEBVEMW1L');
        `}
      </Script>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}
