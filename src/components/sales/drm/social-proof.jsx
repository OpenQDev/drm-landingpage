import React from "react";

const SocialProof = () => {
  const logos = [
    {
      src: "landingpage/drm/devrel/customer-logos/polygon-black.svg",
      alt: "Polygon",
      height: "h-26",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/near.svg",
      alt: "Near",
      height: "h-14",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/buidlguidl.svg",
      alt: "BuidlGuidl",
      height: "h-14",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/aptos.svg",
      alt: "Aptos",
      height: "h-14",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/filecoin-black.png",
      alt: "Filecoin",
      height: "h-18",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/consensys.svg",
      alt: "Consensys",
      height: "h-12",
    },
  ];

  return (
    <div className="mx-0 md:-mx-5 pb-20 lg:pb-24 pt-8 lg:pt-12 -mt-2 p-5">
      <div className="bg-[#FBFBFB]">
        <div className="flex justify-center">
          <h2 className="text-xl font-semibold text-gray-900">Trusted by</h2>
        </div>
        <div className="px-4">
          <div className="mt-6 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-6 lg:gap-8 xl:gap-16">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16 sm:h-24 w-24 sm:w-32 flex-shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.height} sm:${logo.height} object-contain scale-75 sm:scale-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
