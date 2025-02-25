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
        <div className="flex xs:flex-row flex-col w-full xs:w-auto space-y-2.5 xs:space-y-0 xs:space-x-4 pt-8">
          <Link target="_blank" href="https://drm.openq.dev/">
            <div className="bg-black p-2 px-4 text-white border rounded-lg font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
              Start for free
            </div>
          </Link>
          <Link target="_blank" href="https://calendly.com/rickkdev/openqdemo">
            <div className="border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
              Request demo
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevRelHero;
