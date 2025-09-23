import React from "react";
import Image from "next/legacy/image";

const SolutionSpacerBottom = () => {
  return (
    <div className="">
      {/* First, the repeated dashed lines and vertical borders, flipped from the top version */}
      <div className="px-content-padding">
        <div className="mx-0 md:-mx-16 border-t border-dashed border-gray-200"></div>
        <div className="flex justify-between">
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
        </div>
        <div className="mx-0 md:-mx-16 border-t border-dashed border-gray-200"></div>
        <div className="flex justify-between">
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="w-px h-16 bg-gray-200"></div>
        </div>
      </div>

      {/* Optional text or headline area to mirror the top "SolutionSpacer,"
          adjusted so it's at the bottom of your layout */}
      <div className="px-content-padding mt-6">
        <div className="flex justify-start text-sm"></div>
        <div className="title-text mt-6 mb-6 w-3/4">
          <div className="">
            {/* Inverted or bottom-aligned text if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSpacerBottom;