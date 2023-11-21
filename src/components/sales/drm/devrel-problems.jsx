import React from "react";
import Image from "next/image";

const DevRelProblems = () => {
  return (
    // Add px-4 as default padding, which increases to px-8 on medium screens and px-16 on large screens
    <div className="flex flex-col lg:flex-row lg:space-x-32 justify-center items-center top-content-padding px-content-padding">
      <div className="flex-1 flex flex-col text-left lg:mb-16">
        <div className="font-bold text-q-purple text-md">THE PROBLEM</div>
        <div className="title-text-size pt-3">
          Uncharted developer <br />
          dynamics
        </div>
        <div className="text-gray-700 text-lg pt-5">
          For firms crafting the tech landscape with developer tools, APIs, or
          SDKs, true insight into developer activity is crucial yet elusive. The
          data is vast, scattered, and sometimes hidden in unknown repos — a
          complex puzzle of engagement across the digital expanse. <br /> <br />
          With OpenQ, you provide the tools; we reveal the hands that wield them
          — every unseen developer move, mapped and distilled into a precise
          developer fingerprint.
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 top-collapse-padding justify-center items-center">
        <video
          className="rounded-md"
          width="100%"
          height="auto"
          autoPlay
          muted
          style={{ backgroundColor: "transparent" }}
        >
          <source
            src="/landingpage/drm/devrel/problem-animation-2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default DevRelProblems;
