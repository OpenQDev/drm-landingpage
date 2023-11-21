import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center text-left md:text-center top-content-padding px-content-padding">
      <div className="">
        <div className="title-text-size">How it works</div>
        <div className="text-gray-700 text-lg pt-5">
          Streamline your outreach as easily as a CRM, tailored for
          developers-first companies and API-driven enterprises.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-first md:items-center lg:px-40 pt-12">
        <div className="flex flex-col pb-10 lg:pb-0 lg:px-3 items-first md:items-center justify-center space-y-3">
          <Image
            className="rounded-full" // Tailwind class for styling
            src="/landingpage/drm/devrel/icons/plug-solid.png"
            alt="Martin Mellow"
            width={30}
            height={30}
          />

          <div className="font-bold text-xl">Connect data sources</div>
          <div className="text-lg">
            Import data effortlessly from CSVs and connect seamlessly to
            platforms like GitHub, Discord, and more.
          </div>
        </div>
        <div className="flex flex-col pb-10 lg:pb-0 lg:px-3 items-first md:items-center justify-center space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#322EE9"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>

          <div className="font-bold text-xl">Data enrichment</div>
          <div className="text-lg">
            Enhance your developer profiles using OpenQ's AI, which aggregates
            and analyzes data.
          </div>
        </div>
        <div className="flex flex-col lg:pb-0 lg:px-3 items-first md:items-center justify-center space-y-3">
          <Image
            className="rounded-full"
            src="/landingpage/drm/devrel/icons/lead-discovery-clean.png"
            alt="Martin Mellow"
            width={40} // Adjusted width
            height={40} // Adjusted height
          />
          <div className="font-bold text-xl">Lead discovery</div>
          <div className="text-lg">
            Identify new leads or previously unnoticed developers who are
            already engaging with your tools.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
