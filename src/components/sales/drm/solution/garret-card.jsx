import React from "react";
import Image from "next/image";

const GarretCard = ({ subContext, bg }) => {
  return (
    <div className="flex flex-col w-full lg:w-[40rem] bg-white">
      <div className="border-l border-t border-r rounded-tl-md rounded-tr-md p-2 border-gray-400 bg-blue-500 bg-opacity-5 pl-5 flex flex-row space-x-2">
        <div className="font-bold">Garret Grim</div>
        <div className="text-gray-500">{subContext}</div>
      </div>
      <div
        className={`border rounded-bl-md rounded-br-md border-gray-400 ${
          bg ? "bg-bg-primary-color" : " "
        }`}
      >
        <div className="flex flex-col space-y-4 pt-5 px-5">
          <div className="bg-gray-300 w-full rounded-full py-2"></div>
          <div className="bg-gray-300 w-1/2 rounded-full py-2"></div>
        </div>
        <div className="flex justify-center font-semibold text-sm py-4">
          Read more
        </div>
      </div>
    </div>
  );
};

export default GarretCard;
