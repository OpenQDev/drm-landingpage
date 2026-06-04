import React from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Observe adoption",
    description:
      "Track repositories, dependencies, forks, contributors, maintainers, and usage patterns across public GitHub activity.",
  },
  {
    number: "02",
    title: "Analyze visibility",
    description:
      "See how your tool appears in docs, examples, open source projects, and LLM answer surfaces, including where public context is missing.",
  },
  {
    number: "03",
    title: "Export useful data",
    description:
      "Use observability data for community analysis, GTM segmentation, or scraped open source code datasets for LLM training workflows.",
  },
];

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="flex flex-col justify-center text-left md:text-center top-content-padding -mt-10 px-content-padding"
    >
      <div className="top-content-padding">
        <div className="text-3xl font-medium w-2/3 mx-auto text-center">
          One observability layer for your open source ecosystem.{" "}
          <span className="text-gray-400">
            OpenQ connects GitHub scraping, dependency tracking, contributor
            graphs, LLM visibility, and code data quality in one place.
          </span>
        </div>
        <div className="px-10">
          <div className="flex justify-center mt-8 px-4 md:px-0">
            <Link
              target="_blank"
              href="https://calendly.com/rickkdev/openqdemo"
              className="w-full md:w-auto"
            >
              <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center h-10 w-full md:w-auto cursor-pointer">
                Get a demo
                <span className="ml-2">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border border-gray-200 rounded-lg p-8 text-left"
          >
            <div className="text-4xl font-bold text-[#7c3aed] mb-4">
              {step.number}
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              {step.description}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16"></div>
    </div>
  );
};

export default HowItWorks;
