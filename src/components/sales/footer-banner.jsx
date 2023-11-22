import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typeform from "../sales/drm/elements/typeform";

const FooterBanner = () => {
  return (
    <div className="flex top-content-padding relative bg-transparent">
      <div className="absolute top-2/3 bottom-0 left-0 right-0 bg-[#101010] z-0"></div>
      <div className="relative px-content-padding z-10">
        <div className="flex flex-col lg:flex-row bg-q-purple px-content-padding-mobile lg:px-0 lg:pl-24 pt-12 rounded-lg">
          <div className="flex flex-col lg:w-1/2 justify-center space-y-4 pb-12">
            <div className="font-custom text-3xl lg:text-4xl font-extrabold text-white text-left ">
              Level Up
            </div>
            <div className="text-white text-left lg:w-2/3">
              Sign up to our waitlist, we onboard new companies every week.
              Become a design partner and start shaping the future of our
              product.
            </div>
            <div className="flex flex-col space-y-3 justify-left xs:flex-row xs:space-x-3 xs:space-y-0 xs:items-center">
              <Typeform>
                <div className="bg-white rounded-lg p-2  px-3 text-q-purple font-semibold">
                  Join waitlist
                </div>
              </Typeform>
              <div className="text-white border border-white rounded-lg p-2 px-3 font-semibold">
                <Link
                  target="_blank"
                  href="https://calendly.com/ricketh/openqdemo"
                >
                  Request demo
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <Image
              className="rounded-md"
              src="/landingpage/drm/devrel/FooterBannerImage.png"
              alt="Table"
              width={1570}
              height={856}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
