import React from "react";
import FaqQuestion from "./faq-questions";

const Faq = () => {
  return (
    <div className="top-content-padding mt-16 mb-20">
      <div className="flex flex-col px-8 justify-center items-center lg:text-center">
        <div className="title-text-size">Frequently</div>
        <div className="title-text-size pt-3 pb-8">asked questions</div>
        <div className="w-full max-w-[1000px] ">
          <FaqQuestion
            question="How can OpenQ help improve my developer retention?"
            answer="Our analytics measure the impact or all your marketing strategies and business objectives to calculate their ROI. With our data we can identify which retention strategies work best for your community."
          />
          <FaqQuestion
            question="How can we improve developer profiles and monitor dependency usage?"
            answer="OpenQ analyzes repositories on GitHub developers create or engage with that are relevant to you. It checks for dependencies in config files and monitors repository activity regularly."
          />
          <FaqQuestion
            question="How can you identify potential leads interested in my tech?"
            answer="We maintain a comprehensive database of developers with detailed profile classifications. This allows us to identify developers who align with your community's interests or are already utilizing your dependencies in their projects."
          />
          <FaqQuestion
            question="How can you determine if users have stopped using my dependencies or become inactive?"
            answer="We track dependency removal in repositories and flag accounts as inactive after 6 weeks without commits. You receive reports for both churn and inactivity."
          />
          <FaqQuestion
            question="Do you have an API I can integrate with my existing CRM?"
            answer="Coming soon."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
