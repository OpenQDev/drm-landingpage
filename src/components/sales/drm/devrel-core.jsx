import React from "react";
import Image from "next/image";

const DevRelCore = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:pt-36 2xl:pt-10 lg:pt-36 px-content-padding">
      <div className="pt-10">
        <div className="flex justify-center items-center border border-gray-300 rounded-sm md:rounded-lg shadow-custom my-4">
          <Image
            className="rounded-sm md:rounded-lg"
            src="/landingpage/drm/devrel/devrel-landingpage-hero.png"
            alt="Centered Image"
            width={1280}
            height={768}
            priority
            style={{
              boxShadow: "20px 25px 50px 55px rgba(36, 0, 255, 0.08)",
            }}
          />
        </div>

        {/* New logo carousel section */}
      </div>
    </div>
  );
};

export default DevRelCore;
