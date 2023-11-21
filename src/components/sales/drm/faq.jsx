import React from "react";
import FaqQuestion from "./faq-questions";

const Faq = () => {
  return (
    <div className="top-content-padding">
      <div className="flex flex-col px-8 bg-white justify-center items-center lg:text-center">
        <div className="title-text-size">Frequently</div>
        <div className="title-text-size pt-3 pb-8">asked questions</div>
        <div className="w-full max-w-[1000px] ">
          <FaqQuestion
            question="How can the DRM help improve developer retention?"
            answer="
            By leveraging comprehensive metrics and analytics, we can quantify the impact of events and interactions while measuring business objectives more precisely. This approach leads to a better understanding of ROI and enables the measurement of retention techniques, helping identify what works best for improved developer retention."
          />
          <FaqQuestion
            question="How can we improve developer profiles and monitor dependency usage?"
            answer="We enhance developer profiles by utilizing our git scraper, which downloads all repositories they have created or engaged with. We then verify if requested dependencies are present in their config files and check for recent activity in those repositories. Our scraper works in real-time to ensure that you have access to the most current status of your open source community."
          />
          <FaqQuestion
            question="How can we identify potential leads interested in our tech?"
            answer="We employ a combination of web scrapers, developer profiles, and Google's GitHub event indexer (gh archive) to analyze millions of developer profiles. This process helps us identify leads who share interests with your existing community or are already using your dependency, even if you're not aware of them. Our approach includes additional proprietary techniques to enhance lead discovery."
          />
          <FaqQuestion
            question="How can you determine if users have stopped using my dependencies or become inactive?"
            answer="We actively monitor the repositories where your dependencies are used and check for signs of churn. If we detect that dependencies have been removed, we provide a report. Additionally, we flag repositories as inactive if there have been no commits in the last 6 weeks, helping you identify users who are no longer active."
          />
          <FaqQuestion
            question="Do you have an API I can integrate with my existing CRM?"
            answer="Not yet but very soon."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
