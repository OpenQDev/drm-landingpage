import React from "react";
import Image from "next/image";

const DevRelCore = () => {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="flex flex-col justify-center items-center xl:pt-36 2xl:pt-10 lg:pt-36 -mx-5">
      <div className="pt-10 w-full max-w-[1390px]">
        <div
          className="flex justify-center items-center border border-gray-300 rounded-sm md:rounded-lg shadow-custom my-4 relative w-full"
          style={{ aspectRatio: "16/10", overflow: "hidden" }}
        >
          {!showVideo && (
            <div className="relative w-full h-full">
              <Image
                className="rounded-sm md:rounded-lg cursor-pointer w-full h-full object-cover"
                src="/landingpage/drm/devrel/devrel-landingpage-hero.png"
                alt="Centered Image"
                width={1390}
                height={868}
                priority
                onClick={() => setShowVideo(true)}
                style={{
                  boxShadow: "20px 25px 50px 55px rgba(36, 0, 255, 0.08)",
                }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/5"></div>
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <div className="relative">
                  {/* Outer circle with reduced opacity */}
                  <div className="absolute -inset-4 bg-white/50 rounded-full blur-sm"></div>
                  {/* Inner white circle */}
                  <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    {/* Play triangle with rounded corners */}
                    <svg
                      className="w-12 h-12 text-black ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L8.54 5.98C7.87 5.55 7 6.03 7 6.82z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showVideo && (
            <div className="absolute inset-0 w-full h-full">
              <iframe
                src="https://www.loom.com/embed/3f02e133a2aa460ebf73000b6b032f4e?hide_owner=true&hide_share=true&hideEmbedTopBar=true&hide_title=true&muted=1&skip_edit=true"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-sm md:rounded-lg"
              ></iframe>
            </div>
          )}
        </div>

        {/* New logo carousel section */}
      </div>
    </div>
  );
};

export default DevRelCore;
