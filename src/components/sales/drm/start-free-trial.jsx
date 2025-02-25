import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartFreeTrial = () => {
  return (
    <div className="-mt-12">
      <div className="border-x">
        <div className="flex justify-center bg-gray-100 py-10 md:pt-top-content-padding min-h-[50vh] items-center">
          <div className="w-full px-content-padding">
            <div className="flex flex-col md:flex-row md:items-center justify-between mx-0 md:mx-16 lg:mx-28">
              <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center h-full">
                  <div className="text-xl lg:text-4xl font-bold">
                    Start with a 14-day free trial
                  </div>
                  <div className="text-xl lg:text-4xl font-light mb-8">
                    no credit card required.
                  </div>

                  <div className="flex xs:flex-row flex-col space-y-2.5 xs:space-y-0 xs:space-x-4">
                    <Link target="_blank" href="https://drm.openq.dev/">
                      <div className="bg-black p-2 px-4 text-white border rounded-lg font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
                        Start for free
                      </div>
                    </Link>

                    <Link
                      target="_blank"
                      href="https://calendly.com/rickkdev/openqdemo"
                    >
                      <div className="border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
                        Request demo
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="pulsating-elements max-w-full pb-4">
                  <Image
                    src="/animation.gif"
                    alt="Pulsating animation"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-auto"
                    style={{ mixBlendMode: "multiply", margin: 0, padding: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFreeTrial;
