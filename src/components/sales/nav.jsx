import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Subnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-[#FBFBFB] border-b border-gray-200 z-50">
      <div className="px-content-padding">
        <div className="flex h-20 flex-row justify-between items-center w-full">
          <div className="flex h-full flex-row items-center space-x-12">
            <Link href="/" className="flex h-full items-center">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="OpenQ"
                  width={125}
                  height={75}
                  objectFit="contain"
                />
              </div>
            </Link>
            <div className="hidden h-full md:flex items-center">
              <Link href="/blog" className="flex h-full items-center">
                <span className="font-semibold leading-none text-gray-700">
                  Blog
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden h-full flex-row items-center space-x-4 md:flex">
            <Link
              target="_blank"
              href="https://calendly.com/rickkdev/openqdemo"
              className="flex items-center text-white text-xs lg:text-lg font-medium"
            >
              <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center responsive-button h-10">
                Get access
                <span className="ml-2">&rarr;</span>
              </button>
            </Link>
          </div>
          <div className="md:hidden">
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col text-left">
            <Link href="/blog">
              <span className="text-gray-900 text-sm font-normal pb-5 block">
                Blog
              </span>
            </Link>
            <div className="flex flex-col pt-5 space-y-2">
              <Link
                target="_blank"
                href="https://calendly.com/rickkdev/openqdemo"
                className="text-white text-xs lg:text-lg font-medium"
              >
                <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center responsive-button w-full">
                  Get access
                  <span className="ml-2">&rarr;</span>
                </button>
              </Link>
            </div>
            <div className="border-b border-gray-300 pt-5"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subnav;
