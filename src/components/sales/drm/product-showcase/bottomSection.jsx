import React from "react";
import Image from "next/image";
import Card from "./card";
import GarretCard from "./garret-card";
import SideInfo from "./side-info";
import topSection from "./top-section";

const BottomSection = () => {
  return (
    <div className="flex flex-row items-center space-x-5 border-l border-r border-b rounded-bl-md border-gray-400 lg:pl-10">
      <div className="flex flex-col px-8 md:px-10">
        <SideInfo
          mainText={
            "Created an account for our commercial product, started on a paid tier"
          }
          subText={"Wrote a review on X (Twitter)"}
        />
        <SideInfo
          mainText={
            "Tested competitor tool; discussed dependency issues in this GitHub issue"
          }
          subText={"10% activity on dependency-related project"}
        />
        <GarretCard subContext={"wrote email 14 days ago"} bg={true} />
        <SideInfo
          mainText={
            "Feedback received; expecting churn--additional action required"
          }
          subText={"Forward feedback to product team"}
        />
      </div>
      <div className="hidden xl:block ">
        <div className="title-text-size lg:w-2/3  -ml-5">
          Connecting the most important events together
        </div>
        <div className="title-text-size lg:w-2/3  pt-5 -ml-5">
          Detecting churn and inactivity before its too late.
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
