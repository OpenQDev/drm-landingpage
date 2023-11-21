import React from "react";
import Image from "next/image";

const DevRelCore = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:pt-36 2xl:pt-10 lg:pt-36 px-content-padding">
      <div className="pt-10">
        <div className="flex justify-center items-center border border-gray-300 rounded-sm md:rounded-lg shadow-custom my-4">
          <Image
            className="rounded-sm md:rounded-lg"
            src="/landingpage/drm/devrel/devrel-landingpage-image-2.png"
            alt="Centered Image"
            width={1280}
            height={768}
            priority // Adding priority property
            style={{
              boxShadow: "20px 25px 50px 55px rgba(36, 0, 255, 0.08)",
            }}
          />
        </div>

        {/*  <div
          className="absolute md:top-2/3 top-40 right-0 border border-gray-300 rounded-sm md:rounded-lg opacity-80"
          style={{ transform: "translateX(30%) translateY(-25%)" }}
        >
          <Image
            className="hidden xl:block rounded-sm md:rounded-lg"
            src="/landingpage/drm/devrel/devrel-landingpage-image-1.png"
            alt="Right Float Image"
            width={853}
            height={512}
          />
        </div>
        <div
          className="absolute md:top-2/3 top-40 right-0 rounded-sm md:rounded-lg"
          style={{ transform: "translateX(30%) translateY(-25%)" }}
        >
          <Image
            className="hidden xl:block rounded-sm md:rounded-lg"
            src="/landingpage/drm/devrel/devrel-landingpage-image-1-2.png"
            alt="Right Float Image"
            width={853}
            height={512}
          />
        </div> */}
      </div>
    </div>
  );
};

export default DevRelCore;
