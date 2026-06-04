import React from "react";
import Nav from "../components/sales/nav";
import DevRelHero from "../components/sales/drm/devrel-hero";
import DevRelCore from "../components/sales/drm/devrel-core";
import Faq from "../components/sales/drm/faq";
import HowItWorks from "@/components/sales/drm/how-it-works";
import FooterBanner from "@/components/sales/footer-banner";
import Footer from "@/components/sales/footer";
import SocialProof from "@/components/sales/drm/social-proof";
import { NextSeo } from "next-seo";
import SolutionSpacer from "@/components/sales/drm/solution/solution-spacer";
import SolutionConnext from "@/components/sales/drm/solution/solution-connext";
import SolutionSpacerBottom from "@/components/sales/drm/solution/solution-spacer-bottom";
import StartFreeTrial from "@/components/sales/drm/start-free-trial";
import FunnelCollapse from "@/components/sales/drm/funnel-collapse";
import DeveloperIntelligence from "@/components/sales/drm/developer-intelligence";

const seoTitle = "OpenQ - Open Source Observability for Developer Tools";
const seoDescription =
  "Track GitHub adoption, dependency usage, contributors, LLM visibility, and scraped open source code data for developer tools and AI training workflows.";
const seoUrl = "https://openq.dev";
const seoImage = "https://openq.dev/openq-website-thumbnail.png";

const DRM = () => {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={seoUrl}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "open source observability, GitHub analytics, dependency tracking, developer tools, LLM visibility, open source scraping, code datasets, developer community growth",
          },
          {
            name: "application-name",
            content: "OpenQ",
          },
          {
            name: "apple-mobile-web-app-title",
            content: "OpenQ",
          },
          {
            name: "twitter:title",
            content: seoTitle,
          },
          {
            name: "twitter:description",
            content: seoDescription,
          },
          {
            name: "twitter:image",
            content: seoImage,
          },
        ]}
        openGraph={{
          url: seoUrl,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: seoImage,
              width: 1200,
              height: 630,
              alt: "OpenQ open source observability dashboard",
              type: "image/png",
            },
          ],
          siteName: "OpenQ",
          type: "website",
        }}
        twitter={{
          handle: "@openqlabs",
          site: "@openqlabs",
          cardType: "summary_large_image",
          title: seoTitle,
          description: seoDescription,
          image: seoImage,
        }}
      />
      <main className="">
        <Nav />
        <div className="">
          <div className="bg-bg-primary-color border-gray-200">
            <DevRelHero />
            <div className="px-content-padding">
              <DevRelCore />
            </div>
            <SocialProof />

            <SolutionSpacer />
            <SolutionConnext />
            <SolutionSpacerBottom />
            <StartFreeTrial />
            <HowItWorks />
            <FunnelCollapse />
            <DeveloperIntelligence />

            <Faq />
            <FooterBanner />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default DRM;
