import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import Typeform from "../sales/drm/elements/typeform";

const squaresData = [
  {
    id: 1,
    quote: "OpenQ is a must have for any dev rel today.",
    author: "dcbuild3r",
    position: { top: "10%", left: "15%" },
    image: "/landingpage/reviews/dc.png",
  },
  {
    id: 2,
    quote:
      "OpenQ transformed how we understand our open source ecosystem. Their innovative solution provides unique insights into who's actually using our repositories and how developers interact with our code, especially during hackathons. What started as a tool for visibility has become essential market intelligence for our open source strategy. It's now the first solution I recommend to every DevRel team I meet - the visibility it provides is simply unmatched.",
    author: "Redwan",
    position: { top: "20%", left: "85%" },
    image: "/landingpage/reviews/redwan.png",
  },
  /* {
    id: 3,
    quote:
      "OpenQ helped us a lot to make decisions when it comes to funding open source projects.",
    author: "Rodrigo",
    position: { top: "60%", left: "5%" },
    image: "/landingpage/reviews/rodrigo.png",
  }, */
  {
    id: 4,
    quote:
      "Having seen the first release, I can confidently say this will become an irreplaceable tool for anyone building a developer ecosystem. There's no going back.",
    author: "Francesco Renzi",
    position: { top: "17%", left: "75%" },
    image: "/landingpage/reviews/fran.png",
  },
  {
    id: 5,
    quote:
      "OpenQ is one of the most interesting projects I have seen this year supporting dev tooling companies to increase developer engagement.",
    author: "Raza Zaidi ",
    position: { top: "20%", left: "10%" },
    image: "/landingpage/reviews/raza.png",
  },
  {
    id: 6,
    quote:
      "One of the largest hurdles in DevRel is metrics. How do we measure our community's activity's? How do we measure our value to the company? These are all answered by OpenQ. With great ways to mine and aggregate the data needed and the ability to build dashboards for managers and C-levels, OpenQ is above and beyond any other DevRel management tool.",
    author: "PJ Hagerty",
    position: { top: "8%", left: "82%" },
    image: "/landingpage/reviews/pj.jpeg",
  },
  /* {
    id: 7,
    quote: "Placeholder",
    author: "Francesco Andreloi",
    position: { top: "70%", left: "85%" },
    image: "/landingpage/reviews/francescoandreoli.png",
  }, */
  /* {
    id: 8,
    quote: "Placeholder",
    author: "Jonan",
    position: { top: "20%", left: "20%" },
    image: "/landingpage/reviews/jonan.png",
  }, */
  /* {
    id: 9,
    quote: "Placeholder",
    author: "Dominik Tobschall",
    position: { top: "5%", left: "20%" },
    image: "/landingpage/reviews/dom.png",
  }, */
  /* {
    id: 10,
    quote: "Placeholder",
    author: "Alex",
    position: { top: "40%", left: "87%" },
    image: "/landingpage/reviews/alex.jpeg",
  }, */
  {
    id: 10,
    quote:
      "We love at BuidlGuidl the extensive dataset. It helps us validate tooling and discover developer activity.",
    author: "Austin Griffith",
    position: { top: "49%", left: "90%" },
    image: "/landingpage/reviews/austin.png",
  },
  {
    id: 11,
    quote:
      "Measuring developers engagement with our Github repo used to be impossible—OpenQ makes it simple.",
    author: "Vadim Galeev",
    position: { top: "0%", left: "90%" },
    image: "/landingpage/reviews/vadim.jpeg",
  },
];

// Add this style block at the top of your component
const styles = {
  tooltipStyles: `
    .tooltip-container {
      z-index: 1;
    }
    .tooltip-container:hover {
      z-index: 100 !important;
    }
    .tooltip-container:hover .tooltip {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      z-index: 101 !important;
    }
    .tooltip {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: all 0.2s ease-in-out;
      white-space: normal;
      overflow: visible;
      margin-bottom: 10px;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      overflow-y: visible;
      z-index: 1;
    }
    @media (max-width: 640px) {
      .tooltip {
        position: fixed;
        left: 50%;
        bottom: auto;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: 300px;
        margin: 0;
      }
      .tooltip-container:hover .tooltip {
        position: fixed;
      }
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
            className="absolute w-8 h-8 rounded-md transition-all duration-300 hover:bg-gray-200 cursor-pointer tooltip-container overflow-visible"
            style={{
              ...square.position,
              zIndex: 20,
            }}
          >
            <Image
              src={square.image}
              alt={square.author}
              layout="fill"
              objectFit="cover"
              className="rounded-md opacity-65"
              style={{ zIndex: 19 }}
            />
            <div className="tooltip -mb-10 fixed z-[50] bg-white border border-gray-200 p-3 rounded-lg shadow-sm w-48 -translate-y-full -translate-x-1/2 left-1/2 mb-1 bottom-full">
              <p className="text-xs font-medium text-gray-600">
                {square.author}
              </p>
              <p className="text-sm mt-1">{square.quote}</p>
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
              <div className="font-custom w-2/3 text-lg lg:text-xl font-medium text-medium text-gray-400">
                Industry leaders agree this is a must have for all dev rels.
              </div>

              <div className="flex xs:flex-row flex-col space-y-2 xs:space-y-0 xs:space-x-4">
                <Link target="_blank" href="https://drm.openq.dev/">
                  <button className="bg-black text-white py-[0.56rem] px-4 rounded flex items-center justify-center responsive-button">
                    Start for free
                    <span className="ml-2">→</span>
                  </button>
                </Link>

                <Link
                  target="_blank"
                  href="https://calendly.com/rickkdev/openqdemo"
                >
                  <button className="border border-black text-black py-2 px-4 rounded flex items-center justify-center responsive-button">
                    Request demo
                    <span className="ml-2">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
