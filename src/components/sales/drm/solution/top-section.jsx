import React from "react";
import Image from "next/image";
import Card from "./card";
import GarretCard from "./garret-card";
import SideInfo from "./side-info";
import TranslateAndFade from "../../animations/translate-and-fade";

const TopSection = () => {
  return (
    <div className="flex flex-row space-x-5 px-8 md:px-10 lg:space-x-10 border-l border-r border-gray-400 pt-10">
      <div className="flex flex-col lg:pl-10">
        <Card />
        <SideInfo
          mainText="Has installed dependencies during Q1 Hackathon, is part of
          participant list."
          subTextIcon="pd"
        />
        <GarretCard subContext="wrote an email 90 days ago." />
        <SideInfo
          mainText="Positive response received; utilized OpenQ template, with follow-up activity underway"
          subText="80% activity in the first 3 months utilizing dependency"
          subTextIcon="up"
        />
      </div>
      <div className="hidden xl:block">
        <div className="title-text-size lg:w-2/3 ">
          Enrich your developer accounts with precision and insight
        </div>
        <div className="text-gray-700 text-md lg:text-lg pt-5 lg:w-2/3">
          Dive into actionable insights beyond surface-level metrics. OpenQ
          clarifies the impact of every developer account on your business
          objectives , empowering you to track, measure and prove ROI
          --transforming how you value investments from open source
          contributions to event engagements.
        </div>
      </div>
    </div>
  );
};

export default TopSection;
