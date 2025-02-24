import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typeform from "../sales/drm/elements/typeform";

const FooterBanner = () => {
  return (
    <div className="flex top-content-padding relative bg-transparen pb-10">
      <div className="absolute top-2/3 bottom-0 left-0 right-0 z-0"></div>
      <div className="relative px-content-padding z-10 w-full">
        <div className="flex flex-col lg:flex-row px-content-padding-mobile lg:px-0 lg:pl-24 pt-12 rounded-lg items-center justify-center">
          <div className="flex flex-col lg:w-1/2 justify-center space-y-4 pb-12 items-center text-center">
            <div className="font-custom text-3xl lg:text-4xl font-extrabold text-black">
              Start with a 14-day free trial
            </div>
            <div className="text-black lg:w-2/3">
              Experience our full-featured platform risk-free and see how it
              transforms your developer relations.
            </div>
            <div className="flex flex-col space-y-2.5 xs:flex-row xs:space-x-4 xs:space-y-0">
              <div className="bg-black p-2 px-4 text-white border rounded-lg font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
                <Link target="_blank" href="https://drm.openq.dev/">
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
      </div>
    </div>
  );
};

export default FooterBanner;
