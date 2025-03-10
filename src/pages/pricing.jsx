import React from "react";
import Subnav from "../components/sales/nav";
import FooterBanner from "../components/sales/footer-banner";
import Footer from "../components/sales/footer";
import SocialProof from "@/components/sales/drm/social-proof";
import Link from "next/link";
import SolutionSpacerBottom from "@/components/sales/drm/solution/solution-spacer-bottom";
import PricingCards from "../components/sales/drm/pricing-cards";

const Pricing = () => {
  return (
    <div>
      <Subnav />
      <div className="p-5 text-center px-content-padding pt-32 border-x border-gray-200">
        <div className="flex flex-col space-y-5 lg:flex-row justify-between items-start mb-8">
          <h1 className="text-4xl md:text-7xl font-bold text-left">
            Flexible, risk-free, pricing
          </h1>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <p className="text-base md:text-lg mb-4 text-left">
              Unlock deep, actionable insights beyond basic metrics. We've
              pioneered a new era of developer data accessibility—no one else
              comes close.
            </p>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <Link href="https://drm.openq.dev">
                <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center responsive-button">
                  Try for free
                  <span className="ml-2">→</span>
                </button>
              </Link>
              <Link href="#">
                <button className="border border-black text-black py-2 px-4 rounded flex items-center justify-center responsive-button">
                  Talk to GTM engineer
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <SocialProof />
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Pricing Plans</h1>
        <PricingCards />
      </div>

      {/* Reused SolutionSpacerBottom code with padding removed */}
      <div className="pb-10">
        <div className="px-content-padding">
          <div className="mx-0 md:-mx-24 border-t border-dashed border-gray-200"></div>
          {/* Vertical lines start */}
          <div className="flex justify-between">
            <div className="w-px h-16 bg-gray-200 -mx-10"></div>
            <div className="w-px h-16 bg-gray-200 -mx-10"></div>
          </div>
          {/* Vertical lines end */}
          <div className="mx-0 md:-mx-24 border-t border-dashed border-gray-200"></div>
          {/* Vertical lines start */}
          <div className="flex justify-between">
            <div className="w-px h-16 bg-gray-200 -mx-10"></div>
            <div className="w-px h-16 bg-gray-200 -mx-10"></div>
          </div>
          {/* Vertical lines end */}
        </div>

        <div className="">
          <div className="flex justify-start text-sm"></div>
          <div className="title-text mt-6 mb-6 w-3/4">
            <div className="">
              {/* Inverted or bottom-aligned text if needed */}
            </div>
          </div>
        </div>
      </div>

      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Pricing;
