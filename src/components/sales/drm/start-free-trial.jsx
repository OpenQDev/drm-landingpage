import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

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
