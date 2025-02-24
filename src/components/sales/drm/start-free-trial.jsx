import React from "react";
import Link from "next/link";
import PulsatingBlocks from "./pulsating-elements";

const StartFreeTrial = () => {
  return (
    <div className="-mt-12">
      <div className="border-x">
        <div className="bg-gray-100 py-32 md:pt-top-content-padding">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex">
              <div className="w-1/2">
                <div className="text-xl lg:text-4xl font-bold">
                  Start with a 14-day free trial
                </div>
                <div className="text-xl lg:text-4xl font-light mb-8">
                  no credit card required.
                </div>

                <div className="flex xs:flex-row flex-col space-y-2.5 xs:space-y-0 xs:space-x-4">
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
              <div className="w-1/2 relative">
                <PulsatingBlocks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFreeTrial;
