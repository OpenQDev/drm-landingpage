import React from "react";

const DeveloperDiscoverySection = () => {
  return (
    <div className="border-x grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
      <div className="col-span-1 px-6 lg:px-10 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r">
        <div className="flex flex-col h-full justify-between">
          {/* Top / Title */}
          <div>
            <div className="font-custom font-[575] text-3xl lg:text-4xl text-bold text-gray-900">
              Discover and enhance your developer data
            </div>
          </div>

          {/* Bottom / Description & Explore Button */}
          <div>
            <div className="text-gray-500 mt-4">
              Enhance your CRM with AI-powered lead discovery and enrichment.
              De-anonymize npm package downloads and other data sources to
              uncover engagement patterns while getting insights into untapped
              communities that matches your profile.
            </div>
            {/* <div className="flex items-center justify-start gap-2 mt-4">
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
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 px-6 lg:px-10 py-8 lg:py-0 flex items-center justify-center overflow-hidden -mb-20 md:-mb-24 relative z-0">
        <div className="w-full max-w-[450px] mx-auto">
          <video
            className="rounded-md w-full h-auto object-contain"
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
  );
};

export default DeveloperDiscoverySection;
