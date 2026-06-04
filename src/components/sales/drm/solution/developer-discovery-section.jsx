import React from "react";

const DeveloperDiscoverySection = () => {
  return (
    <div className="border-x grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
      <div className="col-span-1 px-6 lg:px-10 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="font-custom font-[575] text-3xl lg:text-4xl text-bold text-gray-900">
              Scrape GitHub at scale. Find real adoption.
            </div>
          </div>
          <div>
            <div className="text-gray-500 mt-4">
              We analyze public repositories, dependencies, forks, contributors,
              commit history, and project metadata to show who is actually using
              your tool and which communities are forming around it.
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 px-6 lg:px-10 py-8 lg:py-10 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[600px] mx-auto font-mono text-sm">
          <div className="bg-[#0d1117] rounded-lg border border-gray-800 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-800 text-gray-400 text-xs">
              adoption_scan.json
            </div>
            <div className="p-4 text-gray-300 space-y-1">
              <div>
                <span className="text-gray-500">repos_scanned:</span>{" "}
                <span className="text-green-400">14,283,901</span>
              </div>
              <div>
                <span className="text-gray-500">dependencies_checked:</span>{" "}
                <span className="text-green-400">892,441,203</span>
              </div>
              <div>
                <span className="text-gray-500">developers_mapped:</span>{" "}
                <span className="text-green-400">4,200,000+</span>
              </div>
              <div>
                <span className="text-gray-500">company_matches:</span>{" "}
                <span className="text-green-400">enriched</span>
              </div>
              <div>
                <span className="text-gray-500">update_frequency:</span>{" "}
                <span className="text-blue-400">continuous</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDiscoverySection;
