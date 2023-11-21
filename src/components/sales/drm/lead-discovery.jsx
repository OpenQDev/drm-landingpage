import React from "react";
import Image from "next/image";
import LeadDiscoveryResult from "./product-showcase/lead-discovery-result";

const LeadDiscovery = () => {
  return (
    <div className="bg-[#EBFDF1] top-content-padding">
      <div className="px-content-padding">
        <div className="lg:hidden block pb-12">
          <div className="title-text-size">
            Beyond Data Enrichment: OpenQ's AI-Driven Lead Discovery
          </div>
          <div className="text-gray-700 text-lg pt-5 ">
            Utilize OpenQ to enhance your CRM with robust lead discovery. Our AI
            uncovers not just engaged community members and rekindling
            opportunities, but also previously untapped developers profiles that
            align with your offerings—expanding your reach to the ideal
            audience.{" "}
          </div>
        </div>
        <div className="lg:flex lg:flex-row bottom-content-padding lg:justify-between lg:space-x-[15rem] items-center">
          {/*   Card start */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center px-5 py-2 w-full lg:w-[30rem] border rounded-tl-md rounded-tr-md border-gray-400 bg-gray-100">
              <div className="font-semibold">Lead discovery</div>
              <div className="p-5 bg-gray-300 rounded-full"></div>
            </div>
            <div className="bg-bg-primary-color border-l border-r border-b rounded-b-md border-gray-400 p">
              <div className="px-5 pt-5">
                <div className="font-semibold pb-2">Tracked dependencies</div>
                <div className="flex flex-row space-x-2 border p-2 border-gray-400 rounded-lg pb-2">
                  <div className="bg-gray-300 p-2 rounded-full w-1/4"></div>
                  <div className="bg-gray-300 p-2 rounded-full w-2/4"></div>
                </div>
                <div className="flex justify-end pt-3">
                  <div className="w-fit bg-gray-300 rounded-lg font-semibold px-2 text-gray-600">
                    completed
                  </div>
                </div>
                <div className="border-b border-gray-300 py-5"></div>
                <div className="flex flex-row justify-between items-center space-x-2 pt-5">
                  <div className="font-semibold text-sm md:text-md">
                    Found 1337 new developer profiles
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <div className="font-medium text-xs sm:text-sm">
                      Select all
                    </div>
                    <div className="p-1 border border-gray-500 rounded-sm"></div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center space-x-3 pt-5">
                  <div className="flex flex-row space-x-3 items-center">
                    <Image
                      className="rounded-full"
                      src="/landingpage/drm/devrel/Martin.png"
                      alt="Martin Mellow"
                      width={40} // Adjusted width
                      height={40} // Adjusted height
                    />

                    <div className="font-semibold">Martin Mello</div>
                  </div>
                  <div className="bg-green-100 rounded-full text-gray-600 font-semibold px-3 text-sm hidden md:block">
                    83% match
                  </div>
                  <div className="flex flex-row space-x-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <img
                      className="rounded-full"
                      src="/landingpage/drm/devrel/icons/x-twitter.svg"
                      alt="Twitter Icon"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="p-1 border border-gray-500 rounded-sm"></div>
                </div>
                <LeadDiscoveryResult score="50" color="yellow" />
                <LeadDiscoveryResult score="70" color="green" />
                <LeadDiscoveryResult score="20" color="red" />
                <div className="border-b border-gray-400 pt-5"></div>
                <div className="flex flex-row justify-end space-x-[2px] pt-5 pb-5">
                  <div className="flex w-fit bg-q-purple p-1 rounded-tl-md rounded-bl-md font-semibold text-white px-2">
                    add
                  </div>
                  <div className="flex w-fit items-center bg-q-purple p-1 rounded-tr-md rounded-br-md font-semibold text-white px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="title-text-size">
              Beyond Data Enrichment: OpenQ's AI-Driven Lead Discovery
            </div>
            <div className="text-gray-700 text-lg pt-5">
              Utilize OpenQ to enhance your CRM with robust lead discovery. Our
              AI uncovers not just engaged community members and rekindling
              opportunities, but also previously untapped developers profiles
              that align with your offerings—expanding your reach to the ideal
              audience.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDiscovery;
