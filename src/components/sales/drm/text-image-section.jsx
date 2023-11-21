import React from "react";
import Image from "next/image";

const TextImageSection = () => {
  return (
    // Add px-4 as default padding, which increases to px-8 on medium screens and px-16 on large screens
    <div className="flex flex-col lg:flex-row lg:space-x-32 justify-center items-center pt-28 lg:pt-38 mx-auto max-w-[1280px] lg:px-7 md:px-10 px-12">
      <div className="flex-1 flex flex-col text-left mb-8 lg:mb-16">
        <div className="font-bold text-q-purple text-md">THE PROBLEM</div>
        <div className="text-title-color font-custom text-3xl lg:text-4xl font-extrabold pt-3">
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
      <div className="w-full md:w-1/2 lg:w-1/3 pt-12 lg:pt-0 justify-center items-center">
        <Image
          className="rounded-md"
          src="/landingpage/drm/devrel/cards-nopx.png"
          alt="Right Float Image"
          width={1192}
          height={1232}
        />
      </div>
    </div>
  );
};

export default TextImageSection;
