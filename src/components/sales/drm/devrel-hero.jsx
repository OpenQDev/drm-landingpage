import React from "react";
import Typeform from "./elements/typeform";
import Link from "next/link";

const DevRelHero = () => {
  return (
    <div className="pt-20 px-content-padding md:pt-top-content-padding lg:pt-36">
      <div className="mx-0 xs:mx-4 flex flex-col justify-center items-center text-center lg:pb-24">
        <div className="font-custom leading-none text-4xl lg:text-7xl text-center font-bold tracking-tighter mx-5 md:mx-0">
          Drive more value through
          <br /> developer relations.{" "}
        </div>

        <div className="text-gray-400 font-normal font-whyte text-xl lg:text-[1.3rem] pt-5 px-5 xxs:w-74 md:w-1/2 lg:w-1/2 mx-6 md:mx-0">
          A CRM built for developer tooling companies. Unlock deep, actionable
          insights beyond basic metrics. We've pioneered a new era of developer
          data accessibility—no one else comes close.
        </div>
        <div className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 space-x-0 md:space-x-4 pt-8 items-center justify-center px-4 md:px-0 w-full md:w-auto">
          <Link
            target="_blank"
            href="https://drm.openq.dev/"
            className="w-full md:w-auto"
          >
            <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center h-10 w-full">
              Start for free
              <span className="ml-2">→</span>
            </button>
          </Link>
          <Link
            target="_blank"
            href="https://calendly.com/rickkdev/openqdemo"
            className="w-full md:w-auto"
          >
            <button className="border border-black text-black py-2 px-4 rounded flex items-center justify-center h-10 w-full">
              Request demo
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevRelHero;
