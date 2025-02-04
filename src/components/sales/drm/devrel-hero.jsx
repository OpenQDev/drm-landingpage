import React from "react";
import Typeform from "./elements/typeform";
import Link from "next/link";

const DevRelHero = () => {
  return (
    <div className="pt-8 px-content-padding md:pt-top-content-padding lg:pt-36">
      <div className="mx-0 xs:mx-4 flex flex-col justify-center items-center text-center lg:pb-24">
        <div className=" text-title-color font-custom leading-none text-4xl lg:text-7xl text-center font-bold tracking-tighter">
          Drive more value through
          <br /> developer relations.{" "}
        </div>

        <div className="text-[#3c3f44] font-medium text-xl lg:text-[1.3rem] pt-5 px-5 xxs:w-74 md:w-1/2 lg:w-1/3">
          Harness the power of a CRM that helps you to better engage, understand
          and grow your developer community.
        </div>
        <div className="flex xs:flex-row flex-col w-full xs:w-auto space-y-2.5 xs:space-y-0 xs:space-x-4 pt-8">
          <div className="bg-black p-2 px-4 text-white border rounded-lg font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
            <Link target="_blank" href="https://drm.openq.dev/signup">
              Start for free
            </Link>
          </div>

          <div className="border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
            <Link
              target="_blank"
              href="https://calendly.com/rickkdev/openqdemo"
            >
              Request demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevRelHero;
