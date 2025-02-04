import React from "react";
import Image from "next/image";
import TranslateAndFade from "../animations/translate-and-fade";

const DevRelProblems = () => {
  return (
    // Add px-4 as default padding, which increases to px-8 on medium screens and px-16 on large screens

    <div className="flex flex-col lg:flex-row lg:space-x-32 justify-center items-center pt-14 px-content-padding">
      <div className="flex-1 flex flex-col text-left lg:mb-16">
        {/*   <TranslateAndFade direction="left"> */}
        <div className="font-medium text-q-purple text-md">THE PROBLEM</div>
        <div className="text-title-color font-custom lg:text-3xl font-[575] pt-3">
          The black box of developer adoption.{" "}
          <span className="text-gray-400">
            Understanding your developer ecosystem is a constant challenge.
            Here's what you're missing:
          </span>
        </div>
        <div className="text-gray-700 text-lg pt-5">
          <ul className="list-disc pl-6 space-y-4 mt-4">
            <li>
              Package downloads and GitHub stars don't tell the full story -
              they mask critical insights about actual tool usage and
              implementation
            </li>
            <li>
              Key questions remain unanswered:
              <ul className="list-circle pl-6 space-y-2 mt-2">
                <li>Who are the real developers behind anonymous downloads?</li>
                <li>
                  How actively are your dependencies being used in repositories?
                </li>
                <li>
                  Are weekly downloads from genuine adoption or just CI/CD
                  pipelines?
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/*  </TranslateAndFade> */}
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 top-collapse-padding justify-center items-center">
        <video
          className="rounded-md"
          width="100%"
          height="auto"
          autoPlay
          muted
          playsInline
          style={{ backgroundColor: "transparent" }}
        >
          <source
            src="/landingpage/drm/devrel/problem-animation-2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default DevRelProblems;
