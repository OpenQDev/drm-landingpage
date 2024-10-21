import React, { useEffect, useRef } from "react";

const SocialProof = () => {
  const logos = [
    {
      src: "landingpage/drm/devrel/customer-logos/scroll.png",
      alt: "Scroll",
      height: "h-9",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/polygon.svg",
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
      height: "h-10",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/aptos.svg",
      alt: "Aptos",
      height: "h-8",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/filecoin.svg",
      alt: "Filecoin",
      height: "h-18",
    },
    {
      src: "landingpage/drm/devrel/customer-logos/consensys.svg",
      alt: "Consensys",
      height: "h-12",
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let frameId;

    // Reduce the scroll speed by decreasing this value
    const scrollSpeed = 0.1; // Adjusted from 0.2 to 0.1

    const scroll = () => {
      if (scrollElement) {
        scrollElement.scrollLeft -= scrollSpeed; // Move scroll position to the left
        if (scrollElement.scrollLeft <= 0) {
          // Reset scroll position to create infinite loop
          scrollElement.scrollLeft = scrollElement.scrollWidth / 2;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    // Set initial scroll position to scrollWidth / 2
    if (scrollElement) {
      scrollElement.scrollLeft = scrollElement.scrollWidth / 2;
    }

    frameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frameId);
  }, []);

  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="pt-36 bg-[#FBFBFB]">
      <div className="flex justify-center pt-2">
        <h2 className="text-xl font-semibold text-gray-900">Trusted by</h2>
      </div>
      <div className="px-4 sm:px-0 max-w-full sm:max-w-[92rem] mx-auto overflow-hidden relative">
        <div
          className="mt-6 flex items-center"
          ref={scrollRef}
          style={{
            overflowX: "hidden",
            overflowY: "hidden",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="flex space-x-24">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24 w-40 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.height} object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-[#FBFBFB] via-[#FBFBFB] to-transparent pointer-events-none"></div>
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-[#FBFBFB] via-[#FBFBFB] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SocialProof;
