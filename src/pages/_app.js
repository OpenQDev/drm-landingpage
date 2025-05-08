import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "@/components/CookieBanner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
      <GoogleAnalytics gaId="G-HWEBVEMW1L" />
    </>
  );
}
