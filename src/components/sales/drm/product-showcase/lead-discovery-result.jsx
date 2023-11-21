import React from "react";

const LeadDiscoveryResult = ({ score, color }) => {
  const getBackgroundColorClass = (color) => {
    switch (color) {
      case "green":
        return "bg-green-100";
      case "yellow":
        return "bg-yellow-100";
      default:
        return "bg-red-100";
    }
  };

  // Using the function to get the appropriate class
  const backgroundColorClass = getBackgroundColorClass(color);

  return (
    <div className="flex flex-row justify-between items-center pt-5">
      <div className="flex flex-row space-x-3 items-center">
        <div className="p-5 bg-gray-300 rounded-full"></div>
        <div className="text-gray-300 bg-gray-300 rounded-lg w-full">
          Martin Mello
        </div>
      </div>
      <div
        className={`${backgroundColorClass} rounded-full text-gray-600 font-semibold px-3 text-sm hidden md:block`}
      >
        {score}% match
      </div>
      <div className="flex flex-row space-x-3">
        <div className="p-5 bg-gray-300 rounded-full"></div>
      </div>
      <div className="p-1 border border-gray-500 rounded-sm"></div>
    </div>
  );
};

export default LeadDiscoveryResult;
