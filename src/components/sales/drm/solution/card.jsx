import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col w-full md:w-[25rem] lg:w-[40rem]">
      <div className="border-l font-bold border-t border-r rounded-tl-md rounded-tr-md p-2 border-gray-400 bg-blue-500 bg-opacity-5 pl-5">
        Developer profile
      </div>
      <div className="border rounded-bl-md rounded-br-md border-gray-400">
        <div className="flex flex-row justify-between pt-5 px-5">
          <div className="flex flex-row space-x-5">
            <Image
              className="rounded-full"
              src="/landingpage/drm/devrel/Luke.jpg"
              alt="Luke"
              width={50} // Adjusted width
              height={50} // Adjusted height
            />
            <div className="flex flex-col">
              <div className="font-semibold">Luke</div>
              <div>5 events found</div>
            </div>
          </div>
          <div className="hidden md:block">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="font-medium">New York</div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="p-5"
            src="/landingpage/drm/devrel/history.png"
            alt="Gh history"
            width={1118} // Adjusted width
            height={202} // Adjusted height
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
