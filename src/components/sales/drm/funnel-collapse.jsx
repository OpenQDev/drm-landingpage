import React from "react";
import Link from "next/link";

const stats = [
  { value: "LLMs", label: "increasingly answer developer questions before your docs are visited" },
  { value: "GitHub", label: "reveals who actually adopted your tool, forked it, or replaced it" },
  { value: "GTM", label: "turns community activity into qualified company and user segments" },
];

const FunnelCollapse = () => {
  return (
    <div className="px-content-padding py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-custom text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">
          Developers discover tools differently now.
          <br />
          <span className="text-gray-400">You need visibility where they look.</span>
        </div>

        <div className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          OpenQ helps you understand how your project shows up in LLM answers,
          open source examples, GitHub dependency usage, and developer
          conversations. The same signal shows where your docs, examples, repos,
          and datasets need stronger public context.
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#7c3aed]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            target="_blank"
            href="https://calendly.com/rickkdev/openqdemo"
          >
            <button className="bg-black text-white py-2 px-6 rounded flex items-center justify-center h-10 mx-auto cursor-pointer">
              Learn about developer intelligence
              <span className="ml-2">&rarr;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FunnelCollapse;
