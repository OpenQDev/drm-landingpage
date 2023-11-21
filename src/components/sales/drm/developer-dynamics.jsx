import React from "react";
import Image from "next/image";
import StepTwoContent from "./elements/step-two-content";

const DeveloperDynamics = () => {
  return (
    <div className="top-content-padding px-content-padding">
      <div className="flex flex-row space-x-2 lg:space-x-5">
        <div className="flex flex-col space-y-2 items-center">
          <div className="text-md w-full md:w-1/2 lg:w-1/3 md:text-lg lg:text:xl xl:text-2xl font-black text-gray-800 mt-2">
            <Image
              src="/landingpage/drm/devrel/icons/dev-icon.png"
              alt="Table"
              width={350}
              height={100}
            />
          </div>
          <div className="border-l border-gray-400 h-full"></div>
        </div>
        <div className="flex flex-col">
          <div className="md:w-2/5 pb-5">
            <div className="title-text-size">
              Modeled for developer dynamics
            </div>
            <div className="text-gray-700 text-lg pt-5">
              More than a CRM—OpenQ is an intelligence hub
            </div>
          </div>
          <div className="flex flex-col pt-3">
            <div className="border rounded-lg border-gray-400">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-5 text-md">
                  Enhancing metrics that let you compare project activity,
                  manage your time effectively, and pinpoint which projects need
                  immediate attention.
                </div>
                <div className="md:w-2/3">
                  <Image
                    className="rounded-md"
                    src="/landingpage/drm/devrel/DeveloperDynamicsOne.png"
                    alt="Table"
                    width={1570}
                    height={856}
                  />

                  {/*  <StepTwoContent /> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row pt-5 lg:space-x-5">
              <div className="flex flex-col lg:w-1/2 p-5 border border-gray-400 rounded-lg">
                <div className="text-md">
                  Capitalizing on the breadth of open-source intelligence, OpenQ
                  taps into vast data reservoirs like GH Archive, synthesizing
                  events from millions of repositories. By integrating this with
                  multi-platform sources, we align your strategies with the
                  pulse of the developer world and ensure your goals resonate
                  with real-time market dynamics.
                </div>
                <div className="pt-10">
                  <Image
                    className="rounded-md"
                    src="/landingpage/drm/devrel/DeveloperDynamicsTwo.png"
                    alt="Table"
                    width={740}
                    height={563}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-5 pt-5 lg:pt-0 lg:w-1/2">
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex flex-row justify-between text-xl ">
                    <div>Sync insights with your CRM</div>
                    <div>Import static data</div>
                  </div>
                  <div className="pt-10">
                    <Image
                      className="rounded-md"
                      src="/landingpage/drm/devrel/DeveloperDynamicsThree.png"
                      alt="Table"
                      width={471}
                      height={344}
                    />
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <Image
                    className="rounded-md"
                    src="/landingpage/drm/devrel/DeveloperDynamicsFours.png"
                    alt="Table"
                    width={563}
                    height={53}
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

export default DeveloperDynamics;
