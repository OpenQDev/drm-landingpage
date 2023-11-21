import React from "react";
import Image from "next/image";

const SideInfo = ({ mainText, subText }) => {
  return (
    <div className="pl-7">
      <div className="flex items-center py-10 border-l border-gray-400">
        <div className="flex flex-row items-center -ml-5">
          <div className="p-5 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col">
            <div className="pl-3 text-sm font-medium">{mainText}</div>
            <div className="pl-3 text-sm font-medium">{subText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
