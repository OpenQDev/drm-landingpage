import React from "react";
import Link from "next/link";

const StartFreeTrial = () => {
  const sampleRecord = `{
  "repository": "github.com/acme/sdk",
  "dependency_usage": "growing",
  "contributors_mapped": 842,
  "fork_activity": "active",
  "llm_visibility": "weak",
  "training_data_quality": 0.94,
  "code_origin": "human-written",
  "recommended_view": "observability dashboard"
}`;

  return (
    <div className="-mt-12">
      <div className="border-x">
        <div className="flex justify-center bg-gray-100 py-10 md:pt-top-content-padding min-h-[50vh] items-center">
          <div className="w-full px-content-padding">
            <div className="flex flex-col md:flex-row md:items-center justify-between mx-0 md:mx-16 lg:mx-28">
              <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center h-full">
                  <div className="text-xl lg:text-4xl font-bold">
                    See your open source signal
                  </div>
                  <div className="text-xl lg:text-4xl font-light mb-8">
                    across GitHub, LLMs, and scraped code data.
                  </div>

                  <div className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 space-x-0 md:space-x-4 pt-8 items-center justify-center px-4 md:px-0 w-full md:w-auto">
                    <Link
                      target="_blank"
                      href="https://calendly.com/rickkdev/openqdemo"
                      className="w-full md:w-auto"
                    >
                      <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center h-10 w-full cursor-pointer">
                        View observability demo
                        <span className="ml-2">&rarr;</span>
                      </button>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://calendly.com/rickkdev/openqdemo"
                      className="w-full md:w-auto"
                    >
                      <button className="border border-black text-black py-2 px-4 rounded flex items-center justify-center h-10 w-full cursor-pointer">
                        Talk to the team
                        <span className="ml-2">&rarr;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-4 font-mono text-sm max-w-[400px]">
                  <div className="text-gray-400 text-xs mb-2">
                    observability_record.json
                  </div>
                  <pre className="text-gray-300 whitespace-pre leading-relaxed">
                    {sampleRecord}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFreeTrial;
