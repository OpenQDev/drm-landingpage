import React from "react";
import IntegrationsList from "./IntegrationsList";
import DataPipelineVisualization from "./data-pipeline";

const DeveloperSyncSection = () => {
  return (
    <div className="border-x grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
      <div className="col-span-1 md:col-span-2 min-h-[400px] md:min-h-[600px]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 border-b md:border-b-0 md:border-r flex flex-col h-full pt-28 md:pt-0">
              <div className="h-1/2 md:border-b flex items-center justify-center p-4 md:p-0">
                <IntegrationsList />
              </div>
              <div
                className="h-1/2 hidden md:block"
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
              />
            </div>
            <div className="col-span-1 md:col-span-3 p-4 md:p-6 flex items-center justify-center relative">
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
              <div className="relative z-10 w-full h-full flex flex-col">
                <DataPipelineVisualization />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 order-first md:order-last px-6 md:px-10 pt-6 md:pt-10 pb-10 border-b md:border-b-0 md:border-l min-h-[300px] md:min-h-[600px]">
        <div className="h-full flex flex-col">
          <div>
            <div className="font-custom font-[575] text-xl md:text-2xl text-bold text-gray-900">
              Developer data, tailored to you
            </div>
            <div className="mt-3 md:mt-4 text-sm md:text-base text-gray-500">
              We profile your developer audience and automatically pull in the
              most relevant data, wherever it lives.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSyncSection;
