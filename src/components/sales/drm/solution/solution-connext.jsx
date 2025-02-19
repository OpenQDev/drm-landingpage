import React from "react";
import Image from "next/image";
import IntegrationsList from "./IntegrationsList";
import DataPipelineVisualization from "./data-pipeline";

const SolutionConnext = () => {
  return (
    <div className="pb-96 px-content-padding">
      <div className="border-x grid grid-cols-3 h-[600px]">
        <div className="col-span-1 px-10 py-10 border-r h-[600px]">
          <div className="flex flex-col h-full justify-between">
            {/* Top / Title */}
            <div>
              <div className="font-custom font-[575] text-4xl text-bold text-gray-900">
                Discover and enhance your developer data
              </div>
            </div>

            {/* Bottom / Description & Explore Button */}
            <div>
              <div className="text-gray-500 mt-4">
                Enhance your CRM with AI-powered lead discovery and enrichment.
                Find and nurture engaged developers while getting deeper
                insights into untapped talent that matches your needs.
              </div>
              <div className="flex items-center justify-start gap-2 mt-4">
                <span className="font-bold">Explore</span>
                <div className="text-gray-800 w-6 h-6 transition-all hover:scale-110 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.25 3.75h6m0 0v6m0-6-8.5 8.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-10 h-[600px] flex items-center justify-center overflow-hidden">
          <div className="max-w-2xl w-full">
            <video
              className="rounded-md max-w-full max-h-full object-contain"
              autoPlay
              muted
              playsInline
              style={{ backgroundColor: "transparent" }}
            >
              <source
                src="/landingpage/drm/devrel/problem-animation-2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="border-t border-dotted -mx-16"></div>
      <div className="border-x h-16" />
      <div className="border-t border-dotted -mx-16"></div>
      <div className="border-x grid grid-cols-3 h-[600px]">
        <div className="col-span-2 h-[600px]">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full grid grid-cols-4">
              {/* Left section (1/4) */}
              <div className="col-span-1 border-r flex flex-col h-full">
                {/* Top half */}
                <div className="h-1/2 border-b flex items-center justify-center">
                  <IntegrationsList />
                </div>

                {/* Bottom half with repeating-linear-gradient background */}
                <div
                  className="h-1/2"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        30deg,
                        rgba(0, 0, 0, 0.1) 0,
                        rgba(0, 0, 0, 0.1) 1px,
                        transparent 1px,
                        transparent 5px
                      )
                    `,
                  }}
                >
                  {/* Optional content here */}
                </div>
              </div>
              {/* Right section (3/4) */}
              <div className="col-span-3 p-6 flex items-center justify-center relative">
                {/* Dot background layer (absolutely positioned only in this section) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(currentColor 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    color: "rgba(128, 128, 128, 0.2)",
                    zIndex: 0,
                  }}
                />
                {/* Data pipeline visualization (now in a separate component) */}
                <div className="relative z-10 w-full h-full flex flex-col">
                  <DataPipelineVisualization />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 px-10 pt-10 pb-96 border-l h-[600px] relative">
          <div className="text-gray-800 w-6 h-6 ml-auto transition-all hover:scale-110 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.25 3.75h6m0 0v6m0-6-8.5 8.5"
              ></path>
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 right-10">
            <div className="font-custom font-[575] text-2xl text-bold text-gray-900">
              Sync developer data
            </div>
            <div className="mt-4 text-gray-500">
              Bring in developer data from event lists, marketing sources, user
              rosters, or general CSV files, then connect it through our
              integrations with GitHub, Discord, Slack, and other developer
              platforms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionConnext;
