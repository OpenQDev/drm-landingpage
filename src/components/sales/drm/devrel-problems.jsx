import React from "react";
import Image from "next/image";
import TranslateAndFade from "../animations/translate-and-fade";

const DevRelProblems = () => {
  const [currentProblemIndex, setCurrentProblemIndex] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const INTERVAL = 6000;
  const TOTAL_DURATION = INTERVAL * 3;

  const problems = [
    {
      text: "Package downloads and GitHub stars don't reflect real developer adoption. Without visibility into actual usage, it's hard to measure the true impact of your developer tools.",
    },
    {
      text: "Limited visibility into power users and their implementation patterns. Understanding how developers are actually using your tools remains a mystery.",
    },
    {
      text: "Difficulty connecting developer adoption with business ROI. Without clear metrics, it's challenging to demonstrate the value of developer tools to stakeholders.",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev + 10) % TOTAL_DURATION);
    }, 10);

    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const problemTimer = setInterval(() => {
      setCurrentProblemIndex((prev) => (prev + 1) % problems.length);
    }, INTERVAL);

    return () => clearInterval(problemTimer);
  }, []);

  const getBarWidth = (barIndex) => {
    const normalizedTime = time % TOTAL_DURATION;

    if (barIndex === 0) {
      // First bar: Loads for 4500ms, stays full for 9000ms, then resets
      if (normalizedTime <= INTERVAL) {
        return Math.min((normalizedTime / INTERVAL) * 100, 100);
      }
      return normalizedTime <= INTERVAL * 3 ? 100 : 0;
    }

    if (barIndex === 1) {
      // Second bar: Starts at 4500ms, loads for 4500ms, stays full for 4500ms
      if (normalizedTime < INTERVAL) return 0;
      const progress = normalizedTime - INTERVAL;
      if (progress <= INTERVAL) {
        return Math.min((progress / INTERVAL) * 100, 100);
      }
      return progress <= INTERVAL * 2 ? 100 : 0;
    }

    if (barIndex === 2) {
      // Third bar: Starts at 9000ms, loads for 4500ms, then resets
      if (normalizedTime < INTERVAL * 2) return 0;
      const progress = normalizedTime - INTERVAL * 2;
      if (progress <= INTERVAL) {
        return Math.min((progress / INTERVAL) * 100, 100);
      }
      return 0;
    }

    return 0;
  };

  return (
    // Add px-4 as default padding, which increases to px-8 on medium screens and px-16 on large screens

    <div className="flex flex-col lg:flex-row lg:space-x-32 justify-center items-center pt-20 mt-8 mb-2 px-0 lg:px-24">
      <div className="flex-1 flex flex-col text-left lg:mb-16">
        {/*   <TranslateAndFade direction="left"> */}
        <div className="font-medium text-q-purple text-md">THE PROBLEM</div>
        <div className="font-whyte text-2xl lg:text-3xl font-bold lg:font-medium pt-3 text-gray-900">
          The black box of developer adoption.{" "}
          <span className="text-gray-400">
            For dev tooling companies, understanding your developer ecosystem is
            a constant challenge. Does this sound familiar?
          </span>
        </div>
        <div className="text-gray-700 text-lg pt-5 font-whyte">
          <div className="space-y-6 mt-4">
            <div className="flex items-center space-x-2 min-h-[80px] transition-opacity duration-500">
              <div className="text-left">
                {problems[currentProblemIndex].text}
              </div>
            </div>
          </div>
        </div>
        {/* Updated loading bars */}
        <div className="flex space-x-2 mt-6">
          {problems.map((_, index) => (
            <div
              key={index}
              className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-q-purple transition-all duration-100 ease-linear"
                style={{
                  width: `${getBarWidth(index)}%`,
                }}
              />
            </div>
          ))}
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
