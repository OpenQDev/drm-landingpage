import React from "react";

const DeveloperReportingSection = () => {
  return (
    <div className="border-x grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
      <div className="col-span-1 px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-96 border-t md:border-t-0 md:border-r min-h-[300px] md:min-h-[600px] relative">
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
          <div className="font-custom font-[575] text-xl md:text-2xl text-bold text-gray-900">
            Convert community signal into GTM motion.
          </div>
          <div className="mt-3 md:mt-4 text-sm md:text-base text-gray-500">
            We map developer networks across GitHub, open source projects,
            organizations, and contribution patterns. Use that signal to
            identify accounts, nurture the right builders, and move community
            members toward paid usage when the timing is right.
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 min-h-[400px] md:min-h-[600px] flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-[500px]">
          {/* Network graph visualization */}
          <svg viewBox="0 0 400 300" className="w-full h-auto">
            {/* Connection lines */}
            <line
              x1="200"
              y1="150"
              x2="100"
              y2="80"
              stroke="#e5e7eb"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="150"
              x2="300"
              y2="80"
              stroke="#e5e7eb"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="150"
              x2="120"
              y2="230"
              stroke="#e5e7eb"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="150"
              x2="280"
              y2="230"
              stroke="#e5e7eb"
              strokeWidth="1.5"
            />
            <line
              x1="100"
              y1="80"
              x2="60"
              y2="40"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="80"
              x2="50"
              y2="120"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <line
              x1="300"
              y1="80"
              x2="340"
              y2="40"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <line
              x1="300"
              y1="80"
              x2="350"
              y2="120"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <line
              x1="120"
              y1="230"
              x2="70"
              y2="260"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <line
              x1="280"
              y1="230"
              x2="330"
              y2="260"
              stroke="#e5e7eb"
              strokeWidth="1"
            />

            {/* Center node */}
            <circle cx="200" cy="150" r="20" fill="#7c3aed" opacity="0.9" />
            <text
              x="200"
              y="155"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
            >
              TOP
            </text>

            {/* Primary nodes */}
            <circle cx="100" cy="80" r="14" fill="#a78bfa" opacity="0.8" />
            <circle cx="300" cy="80" r="14" fill="#a78bfa" opacity="0.8" />
            <circle cx="120" cy="230" r="14" fill="#a78bfa" opacity="0.8" />
            <circle cx="280" cy="230" r="14" fill="#a78bfa" opacity="0.8" />

            {/* Secondary nodes */}
            <circle cx="60" cy="40" r="8" fill="#c4b5fd" opacity="0.6" />
            <circle cx="50" cy="120" r="8" fill="#c4b5fd" opacity="0.6" />
            <circle cx="340" cy="40" r="8" fill="#c4b5fd" opacity="0.6" />
            <circle cx="350" cy="120" r="8" fill="#c4b5fd" opacity="0.6" />
            <circle cx="70" cy="260" r="8" fill="#c4b5fd" opacity="0.6" />
            <circle cx="330" cy="260" r="8" fill="#c4b5fd" opacity="0.6" />
          </svg>
            <div className="text-center mt-4 text-sm text-gray-400 font-mono">
            4.2M developers &middot; 28M community connections mapped
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperReportingSection;
