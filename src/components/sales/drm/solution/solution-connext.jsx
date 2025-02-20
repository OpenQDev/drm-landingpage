import React from "react";
import DeveloperDiscoverySection from "./developer-discovery-section";
import DeveloperSyncSection from "./developer-sync-section";
import DeveloperReportingSection from "./developer-reporting-section";

const SolutionConnext = () => {
  return (
    <div className="pb-96 px-content-padding">
      <DeveloperDiscoverySection />
      <div className="border-t border-dotted mx-0 md:-mx-16 relative z-10"></div>
      <div className="border-x h-16 relative z-10" />
      <div className="border-t border-dotted mx-0 md:-mx-16 relative z-10"></div>
      <DeveloperSyncSection />
      <div className="border-t border-dotted mx-0 md:-mx-16"></div>
      <div className="border-x h-16" />
      <div className="border-t border-dotted mx-0 md:-mx-16"></div>
      <DeveloperReportingSection />
    </div>
  );
};

export default SolutionConnext;
