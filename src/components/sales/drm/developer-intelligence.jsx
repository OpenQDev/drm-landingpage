import React from "react";
import Link from "next/link";

const features = [
  {
    title: "For LLM visibility",
    description:
      "Use observability data to understand whether AI assistants can explain, recommend, and cite your tool, then improve the docs, examples, and repositories they learn from.",
  },
  {
    title: "For open source communities",
    description:
      "Turn contributor, fork, dependency, and maintainer signals into a practical plan for growing the right parts of your community.",
  },
  {
    title: "For developer tool companies",
    description:
      "Understand how developers discover and distribute your tool, where adoption is blocked, and which segments should become GTM priorities.",
  },
  {
    title: "For community-to-customer conversion",
    description:
      "Turn contributors, plugin builders, SDK users, and event participants into targeted nurture, sales, and advocacy motions without losing the open source context.",
  },
];

const DeveloperIntelligence = () => {
  return (
    <div className="px-content-padding py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-[#7c3aed] font-medium mb-3 tracking-wide uppercase">
            Growth Support
          </div>
          <div className="font-custom text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Use the data to grow the community.
          </div>
          <div className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            After OpenQ shows where adoption, visibility, and community energy
            are happening, we help teams turn those signals into distribution
            work: better docs, stronger examples, community programs, outreach,
            and GTM motions.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white rounded-lg p-8"
            >
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </div>
              <div className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            target="_blank"
            href="https://calendly.com/rickkdev/openqdemo"
          >
            <button className="bg-black text-white py-2 px-6 rounded flex items-center justify-center h-10 cursor-pointer">
              Plan community growth
              <span className="ml-2">&rarr;</span>
            </button>
          </Link>
          <Link
            target="_blank"
            href="https://calendly.com/rickkdev/openqdemo"
          >
            <button className="border border-black text-black py-2 px-6 rounded flex items-center justify-center h-10 cursor-pointer">
              Talk to the team
              <span className="ml-2">&rarr;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperIntelligence;
