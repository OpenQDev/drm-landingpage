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
              <div>in Germany, US, Canada, Austria & Spain</div>
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
              <div>Privacy Policies</div>
              <div>Terms of Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
