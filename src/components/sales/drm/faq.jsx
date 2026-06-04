import React from "react";
import FaqQuestion from "./faq-questions";

const Faq = () => {
  return (
    <div className="top-content-padding mt-16 mb-20">
      <div className="flex flex-col justify-center items-center lg:text-center">
        <div className="title-text-size">Frequently</div>
        <div className="title-text-size pt-3 pb-8">asked questions</div>
        <div className="w-full px-8 max-w-[1000px] ">
          <FaqQuestion
            question="What does OpenQ help with?"
            answer="OpenQ helps developer tool teams understand adoption, grow open source communities, improve visibility in LLM answers and public examples, and turn developer activity into GTM segments."
          />
          <FaqQuestion
            question="Do you only provide software?"
            answer="No. The product provides developer data, GitHub scraping, open source observability, and community analytics, but we also work with teams on the distribution strategy and execution needed to use that signal."
          />
          <FaqQuestion
            question="How do you improve LLM visibility?"
            answer="We look at whether your docs, examples, repositories, and public community answers give AI assistants enough reliable material to explain and recommend your tool. Then we identify the missing content and distribution gaps."
          />
          <FaqQuestion
            question="Can you help open source communities?"
            answer="Yes. We map contributors, forks, dependency usage, power users, organizations, and dormant users so teams can understand community health and prioritize where to engage."
          />
          <FaqQuestion
            question="Can community activity become revenue signal?"
            answer="Yes. We connect developer usage to companies and GTM segments so teams can identify qualified accounts, route high-intent activity, and convert community members into paying customers when there is a natural fit."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
