import React from "react";

const sampleData = [
  {
    segment: "Dependency adoption",
    signal: "Dependency adoption",
    source: "GitHub scraping",
    status: "Observed",
    action: "Track usage trend",
  },
  {
    segment: "Training data candidates",
    signal: "Human-written code",
    source: "Open source scraping",
    status: "Scored",
    action: "Export model data",
  },
  {
    segment: "Contributor graph",
    signal: "Maintainer network",
    source: "GitHub activity",
    status: "Mapped",
    action: "Find key builders",
  },
  {
    segment: "LLM answer surfaces",
    signal: "Docs and examples",
    source: "LLM visibility",
    status: "Gap found",
    action: "Improve public context",
  },
  {
    segment: "Company matches",
    signal: "Open source usage",
    source: "Enrichment",
    status: "Qualified",
    action: "Route GTM signal",
  },
];

const DevRelCore = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 xl:pt-5 2xl:pt-10 lg:pt-36 z-0 overflow-x-hidden">
      <div className="pt-10 w-full max-w-[1390px]">
        <div className="rounded-lg border border-gray-800 bg-[#0d1117] shadow-[0px_2px_6px_0px_rgba(28,40,64,0.06),0px_6px_20px_-2px_rgba(28,40,64,0.08)] overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-3 text-gray-400 text-sm font-mono">
              openq observability --preview
            </span>
          </div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="text-left px-4 py-3 font-medium">
                    object
                  </th>
                  <th className="text-left px-4 py-3 font-medium">
                    signal
                  </th>
                  <th className="text-left px-4 py-3 font-medium">
                    source
                  </th>
                  <th className="text-left px-4 py-3 font-medium">status</th>
                  <th className="text-left px-4 py-3 font-medium">use_case</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800/50 hover:bg-gray-800/30"
                  >
                    <td className="px-4 py-3 text-blue-400">{row.segment}</td>
                    <td className="px-4 py-3 text-gray-300">{row.signal}</td>
                    <td className="px-4 py-3 text-gray-300">{row.source}</td>
                    <td className="px-4 py-3">
                      <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-xs">
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-yellow-400">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Footer */}
          <div className="px-4 py-3 text-gray-500 text-xs font-mono border-t border-gray-800">
            GitHub scraping, open source observability, LLM visibility, code
            data, community and GTM signal
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevRelCore;
