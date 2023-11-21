import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Subnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-56 pt-2">
      <div
        className={`flex flex-row justify-between md:justify-start items-center py-4`}
      >
        <div className="w-1/10">
          <Image
            src="/logo.png"
            alt="OpenQ"
            width={125} // Original width of the image
            height={75} // Original height of the image
          />
        </div>

        <div className="hidden md:block pl-10">
          <Link
            href="/product"
            className="text-gray-900 px-3 text-md font-medium inline-flex items-center space-x-2"
          >
            <span>Product</span>
          </Link>
          <Link
            href="/resources"
            className="text-gray-900 px-3 text-md font-medium inline-flex items-center space-x-2"
          >
            <span>Resources</span>
          </Link>
          <Link href="/blog" className="text-gray-900 px-3 text-md font-medium">
            Blog
          </Link>
          <Link
            href="/community"
            className="text-gray-900 px-3 text-md font-medium"
          >
            Community
          </Link>
        </div>
        <div className="md:hidden self-end pr-6">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col relative z-20 pb-7">
          <a
            href="#"
            className="text-gray-900 px-3 text-md font-normal pl-6 pb-5"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-gray-900 px-3 text-md font-normal pl-6 pb-5"
          >
            Hackathon Launchpad
          </a>
          <a href="#" className="text-gray-900 px-3 text-md font-normal pl-6">
            Developer Relationship Management
          </a>
        </div>
      )}
    </div>
  );
};

export default Subnav;
