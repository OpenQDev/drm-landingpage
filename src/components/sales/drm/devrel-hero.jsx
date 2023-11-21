import React from "react";
import Typeform from "./elements/typeform";
import Link from "next/link";

const DevRelHero = () => {
  return (
    <div className="pt-12 md:pt-top-content-padding lg:pt-20">
      <div className="flex flex-col justify-center items-center text-center">
        <div className=" text-title-color font-custom leading-none text-6xl lg:text-8xl text-center font-bold tracking-tighter">
          Elevate <br /> developer relations.{" "}
        </div>

        <div className="text-[#3c3f44] font-medium text-xl lg:text-[1.3rem] pt-5 px-5 xxs:w-74 md:w-1/2 lg:w-1/3">
          Harness the power of a CRM that helps you to better engage, understand
          and grow your developer community.
        </div>
        <div className="flex xs:flex-row flex-col space-y-4 xs:space-y-0 xs:space-x-4 pt-8">
          <Typeform>
            <div className="bg-[#322EE9] p-2 px-4 text-white border rounded-lg font-medium md:text-xs lg:text-lg">
              Join waitlist
            </div>
          </Typeform>

          <Link
            target="_blank"
            href="https://calendly.com/ricketh/openqdemo"
            className="text-gray-900 text-xs lg:text-lg font-medium"
          >
            <div className="border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium md:text-xs lg:text-lg">
              Contact sales
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevRelHero;
