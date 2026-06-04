import React from "react";

const DeveloperSyncSection = () => {
  const beforeData = [
    { file: "docs/quickstart.md", label: "LLM gap", flagged: true },
    { file: "examples/auth-flow.ts", label: "Strong signal", flagged: false },
    { file: "github.com/acme/sdk", label: "Adopted", flagged: false },
    { file: "competitor/sdk-python", label: "Switch target", flagged: true },
    { file: "discord/community", label: "Needs nurture", flagged: true },
  ];

  return (
    <div className="border-x grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
      <div className="col-span-1 md:col-span-2 min-h-[400px] md:min-h-[600px] flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-[550px] space-y-3">
          {beforeData.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
            >
              <span className="font-mono text-sm text-gray-700">
                {item.file}
              </span>
              {item.flagged ? (
                <span className="text-xs font-medium bg-red-50 text-red-600 border border-red-200 px-2.5 py-1 rounded-full">
                  {item.label}
                </span>
              ) : (
                <span className="text-xs font-medium bg-green-50 text-green-600 border border-green-200 px-2.5 py-1 rounded-full">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 order-first md:order-last px-6 md:px-10 pt-6 md:pt-10 pb-10 border-b md:border-b-0 md:border-l min-h-[300px] md:min-h-[600px]">
        <div className="h-full flex flex-col">
          <div>
            <div className="font-custom font-[575] text-xl md:text-2xl text-bold text-gray-900">
              Improve visibility across LLMs, docs, and examples.
            </div>
            <div className="mt-3 md:mt-4 text-sm md:text-base text-gray-500">
              We identify the pages, examples, public repositories, and
              community answers that shape how developers and AI assistants
              explain your tool. Then we help strengthen the material that
              drives discovery.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSyncSection;
