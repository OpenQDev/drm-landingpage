import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typeform from "../sales/drm/elements/typeform";

const squaresData = [
  {
    id: 1,
    quote: "Data is the new oil",
    author: "Clive Humby",
    position: { top: "10%", left: "15%" },
  },
  {
    id: 2,
    quote: "Software is eating the world",
    author: "Marc Andreessen",
    position: { top: "30%", left: "75%" },
  },
  {
    id: 3,
    quote: "Code is like humor. When you have to explain it, it's bad",
    author: "Cory House",
    position: { top: "60%", left: "25%" },
  },
  {
    id: 4,
    quote: "Developers are the new kingmakers",
    author: "Stephen O'Grady",
    position: { top: "20%", left: "85%" },
  },
  {
    id: 5,
    quote: "Open source is the future",
    author: "Linus Torvalds",
    position: { top: "70%", left: "65%" },
  },
];

// Add this style block at the top of your component
const styles = {
  tooltipStyles: `
    .tooltip-container:hover .tooltip {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }
    .tooltip {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: all 0.2s ease-in-out;
      white-space: normal;
      overflow: visible;
    }
    @media (max-width: 640px) { /* Adjust this breakpoint as needed */
      .flex.relative {
        max-width: 100% !important;
        overflow-x: hidden !important;
        box-sizing: border-box !important;
      }
      .px-content-padding-mobile,
      .relative,
      .flex {
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .w-full {
        width: 100% !important;
      }
      .bg-transparent {
        background-color: transparent !important;
      }
    }
  `,
};

const FooterBanner = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <>
      <style>{styles.tooltipStyles}</style>
      <div className="flex relative bg-transparent pb-24 pt-28 overflow-visible">
        {/* Background squares */}
        {squaresData.map((square) => (
          <div
            key={square.id}
            className="absolute w-8 h-8 bg-gray-100 rounded-md transition-all duration-300 hover:bg-gray-200 cursor-pointer tooltip-container overflow-visible"
            style={{
              ...square.position,
              zIndex: 20,
            }}
          >
            <div className="tooltip -mb-10 absolute z-[100] bg-white border border-gray-200 p-3 rounded-lg shadow-sm w-48 -translate-y-full -translate-x-1/2 left-1/2 mb-1 bottom-full">
              <p className="text-xs font-medium text-gray-600">
                {square.author}
              </p>
              <p className="text-sm mt-1">"{square.quote}"</p>
              <div className="absolute w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        ))}

        <div className="relative px-content-padding z-10 w-full">
          <div className="flex flex-col px-content-padding-mobile pt-12 rounded-lg items-center justify-center">
            <div className="flex flex-col justify-center space-y-4 pb-12 items-center text-center">
              <div className="font-custom w-2/3 text-3xl lg:text-4xl font-extrabold text-black">
                Pioneering a new era of developer data accessibility.
              </div>

              <div className="flex flex-col space-y-2.5 xs:flex-row xs:space-x-4 xs:space-y-0 pt-6">
                <div className="bg-black p-2 px-4 text-white border rounded-lg font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
                  <Link target="_blank" href="https://drm.openq.dev/">
                    Start for free
                  </Link>
                </div>
                <div className="border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium text-sm md:text-xs lg:text-lg w-full xs:w-auto">
                  <Link
                    target="_blank"
                    href="https://calendly.com/rickkdev/openqdemo"
                  >
                    Book a demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
