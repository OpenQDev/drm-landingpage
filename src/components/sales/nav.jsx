import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typeform from "../sales/drm/elements/typeform";

const Subnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-1 px-content-padding bg-[#FBFBFB] pb-1">
      <div className={`flex flex-row justify-between items-center w-full py-4`}>
        <div className="flex flex-row items-center space-x-12">
          <Link href="/">
            <div>
              <Image
                src="/logo.png"
                alt="OpenQ"
                width={125} // Original width of the image
                height={75} // Original height of the image
              />
            </div>
          </Link>
          <div className="hidden md:block">
            <Link href="/help" target="_blank">
              <span className="font-semibold text-gray-700">Features</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/resources/guides">
              <span className="font-semibold text-gray-700">Resources</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/blog">
              <span className="font-semibold text-gray-700">Blog</span>
            </Link>
          </div>

          <div className="hidden md:block pl-10 pb-1">
            {/* <Link
              href="/product"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium items-center space-x-2"
            >
              <span>Product</span>
            </Link>
            <Link
              href="/resources"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium items-center space-x-2"
            >
              <span>Resources</span>
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium"
            >
              Blog
            </Link>
            <Link
              href="/community"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium"
            >
              Community
            </Link> */}
          </div>
        </div>
        <div className="flex flex-row hidden md:flex space-x-4">
          <div className="whitespace-nowrap border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium md:text-xs lg:text-lg">
            <Link
              target="_blank"
              href="https://drm.openq.dev/"
              className="text-gray-900 text-xs lg:text-lg font-medium"
            >
              Closed beta sign in
            </Link>
          </div>
          <Typeform>
            <div className="whitespace-nowrap bg-[#322EE9] p-2 px-4 text-white border rounded-lg font-medium md:text-xs lg:text-lg">
              Join waitlist
            </div>
          </Typeform>
        </div>
        <div className="md:hidden self-end mb-1">
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
          <Link href="/help" target="_blank">
            <span className="text-gray-900 text-sm font-normal pb-5 block">
              Features
            </span>
          </Link>
          <Link href="/resources/guides">
            <span className="text-gray-900 text-sm font-normal pb-5 block">
              Resources
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-gray-900 text-sm font-normal pb-5 block">
              Blog
            </span>
          </Link>
          <div className="flex flex-col pt-5 space-y-2">
            <div className="whitespace-nowrap border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium text-xs">
              <Link
                target="_blank"
                href="https://drm.openq.dev/"
                className="text-gray-900 text-xs lg:text-lg font-medium"
              >
                Closed beta sign in
              </Link>
            </div>
            <Typeform>
              <div className="whitespace-nowrap bg-[#322EE9] p-2 px-4 text-white border rounded-lg font-medium text-xs">
                Join waitlist
              </div>
            </Typeform>
          </div>
          <div className="border-b border-gray-300 pt-5"></div>
        </div>
      )}
    </div>
  );
};

export default Subnav;
