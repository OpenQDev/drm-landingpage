import React from "react";
import Image from "next/image";
import Card from "./card";
import GarretCard from "./garret-card";
import SideInfo from "./side-info";
import TopSection from "./top-section";
import BottomSection from "./bottomSection";

const ProductShowcase = () => {
  return (
    <div className="top-content-padding">
      <div className="sm:block xl:hidden px-content-padding">
        <div className="title-text-size">
          Enrich your developer accounts with precision and insight
        </div>
        <div className="text-gray-700 text-lg pt-5">
          Dive into actionable insights beyond surface-level metrics. OpenQ
          clarifies the impact of every developer account on your business
          objectives , empowering you to track, measure and prove ROI
          --transforming how you value investments from open source
          contributions to event engagements.
        </div>
      </div>
      <div className="top-collapse-padding ">
        <div className="justify-center mx-auto md:max-w-[1280px] px-0 lg:px-20 md:px-20 sm:px-8 xl:px-0 md:pt-12 xl:pt-0">
          <div className="flex flex-row items-center space-x-5 border lg:rounded-t-md border-gray-400 w-full p-4 px-2 lg:pl-10">
            <div className="bg-q-purple w-min p-1 rounded-full px-3 text-white">
              <span>Enhanced</span>
            </div>
            <div className="border border-gray-400 p-1 rounded-full px-3 text-gray-500">
              <span>Tasks</span>
            </div>
            <div className="text-gray-500 hidden xs:block">
              Uses dependencies since 03.04.2020
            </div>
          </div>
          {/*   Start */}
          <TopSection />
        </div>
      </div>
      {/*  Green */}
      <div className="bg-[#EBFDF1]">
        <div className="justify-center mx-auto md:max-w-[1280px] px-0 lg:px-20 md:px-20 sm:px-8 xl:px-0 md:pt-12 xl:pt-0">
          {/*  Start */}
          <BottomSection />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
