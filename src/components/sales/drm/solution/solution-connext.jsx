import React from "react";
import DeveloperDiscoverySection from "./developer-discovery-section";
import DeveloperSyncSection from "./developer-sync-section";

const SolutionConnext = () => {
  return (
    <div className="pb-96 px-content-padding">
      <DeveloperDiscoverySection />
      <div className="border-t border-dotted mx-0 md:-mx-16"></div>
      <div className="border-x h-16" />
      <div className="border-t border-dotted mx-0 md:-mx-16"></div>
      <DeveloperSyncSection />
    </div>
  );
};

export default SolutionConnext;
