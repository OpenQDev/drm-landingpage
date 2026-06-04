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

const DRM = () => {
  return (
    <>
      <NextSeo
        title="OpenQ - Open Source Observability for Developer Tools"
        description="OpenQ tracks GitHub adoption, dependency usage, contributors, LLM visibility, and scraped open source code data for developer tools and AI teams."
        canonical="https://openq.dev"
        openGraph={{
          url: "https://openq.dev",
          title: "OpenQ - Open Source Observability for Developer Tools",
          description:
            "OpenQ tracks GitHub adoption, dependency usage, contributors, LLM visibility, and scraped open source code data for developer tools and AI teams.",
          images: [
            {
              url: "https://openq.dev/openq-website-thumbnail.png",
              width: 1200,
              height: 630,
              alt: "OpenQ",
              type: "image/png",
            },
          ],
          siteName: "OpenQ",
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
          title: "OpenQ - Open Source Observability for Developer Tools",
          description:
            "OpenQ tracks GitHub adoption, dependency usage, contributors, LLM visibility, and scraped open source code data for developer tools and AI teams.",
          image: "https://openq.dev/openq-website-thumbnail.png",
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
