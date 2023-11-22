import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#101010] -mt-1">
      <div className="pt-12 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center px-content-padding lg:space-x-[3rem] pb-8">
          <div className="flex flex-col lg:flex-row lg:space-x-8 justify-between">
            <div className="lg:w-1/3">
              <div className="pb-3">OpenQ Logo</div>
              <div className="">
                The CRM for developer relations to connect community, product
                and customer data.
              </div>
            </div>
            <div className="flex flex-col md:flex-row pt-5 md:pt-0 lg:space-x-10">
              <div className="flex flex-col pb-5 lg:pb-0">
                <div className="font-bold sm:text-sm md:text-md lg:text-md xl:text-md 2xl:textl-lg">
                  Help me
                </div>
                <div>Contact Us</div>
                <div>Feature requests</div>
              </div>
              <div className="flex flex-col pb-5 lg:pb-0">
                <div className="font-bold sm:text-sm md:text-mdlg:text-md xl:text-md 2xl:textl-lg">
                  Company
                </div>
                <div>About</div>
                <div>Careers</div>
              </div>
              <div className="flex flex-col pb-5 lg:pb-0">
                <div className="font-bold sm:text-sm md:text-mdlg:text-md xl:text-md 2xl:textl-lg">
                  Resources
                </div>
                <div>Blog</div>
                <div>Docs</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold sm:text-sm md:text-md lg:text-md xl:text-md 2xl:textl-lg">
                Made by dev rels for dev rels
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="red"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <div> in Germany, US, Canada, Austria & Spain</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-content-padding">
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between border-t border-gray-400 pt-8 pb-8">
            <div>© 2023 OpenQ Labs GmbH. All right reserved.</div>
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-5">
              <div>
                <Link href="/imprint">
                  <span>Imprint</span>
                </Link>
              </div>
              <Link href="/privacy_policies">
                <div>Privacy Policies</div>
              </Link>
              <div>Terms of Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
