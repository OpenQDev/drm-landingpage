import React from "react";
import Nav from "../components/sales/nav";
import Faq from "../components/sales/drm/faq";
import HowItWorks from "@/components/sales/drm/how-it-works";
import FooterBanner from "@/components/sales/footer-banner";
import Footer from "@/components/sales/footer";
import SocialProof from "@/components/sales/drm/social-proof";
import { NextSeo } from "next-seo";
import SolutionSpacer from "@/components/sales/drm/developer-data/solution-spacer";
import SolutionConnext from "@/components/sales/drm/developer-data/solution-connext";
import SolutionSpacerBottom from "@/components/sales/drm/developer-data/solution-spacer-bottom";
import StartFreeTrial from "@/components/sales/drm/start-free-trial";
import { PopupButton } from "@typeform/embed-react";

const ApiHero = () => {
  return (
    <div className="pt-20 px-content-padding md:pt-top-content-padding lg:pt-36">
      <div className="mx-0 xs:mx-4 flex flex-col justify-center items-center text-center lg:pb-24">
        <div className="font-custom leading-none text-4xl lg:text-7xl text-center font-bold tracking-tighter mx-5 md:mx-0">
          Developer Data
          <br /> for engineering intelligence.{" "}
        </div>

        <div className="text-gray-400 font-normal font-whyte text-xl lg:text-[1.3rem] pt-5 px-5 xxs:w-74 md:w-1/2 lg:w-1/2 mx-6 md:mx-0">
          Access curated developer insights at scale. Our API delivers activity data, engagement signals, and ecosystem context—fueling sales, growth, research, and community strategies.
        </div>
        <div className="pt-8">
          <PopupButton
            id="VRvj0EsT"
            className="bg-black text-white py-2 px-4 rounded flex items-center justify-center h-10 cursor-pointer"
          >
            Request an API Key
            <span className="ml-2">→</span>
          </PopupButton>
        </div>
      </div>
    </div>
  );
};


const DeveloperData = () => {
  return (
    <>
      <NextSeo
        title="OpenQ API - Developer Data API"
        description="Access comprehensive developer data through our powerful API. Integrate developer insights directly into your workflows."
        canonical="https://openq.dev/developer-data"
        openGraph={{
          url: "https://openq.dev/developer-data",
          title: "Developer Data API",
          description:
            "Access comprehensive developer data through our powerful API. Integrate developer insights directly into your workflows.",
          images: [
            {
              url: "https://openq.dev/openq-website-thumbnail.png",
              width: 1200,
              height: 630,
              alt: "OpenQ API",
              type: "image/png",
            },
          ],
          siteName: "OpenQ API",
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
          title: "Developer Data API",
          description:
            "Access comprehensive developer data through our powerful API. Integrate developer insights directly into your workflows.",
          image: "https://openq.dev/openq-website-thumbnail.png",
        }}
      />
      <main className="">
        <Nav />
        <div className="">
          <div className="bg-bg-primary-color border-gray-200">
            <ApiHero />
            <SocialProof />

            <SolutionSpacer />
            <SolutionConnext />
            <SolutionSpacerBottom />
    
            <HowItWorks />

            <Faq />
            <FooterBanner />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default DeveloperData;