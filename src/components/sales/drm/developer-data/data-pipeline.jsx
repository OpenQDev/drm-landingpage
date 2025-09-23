import React from "react";

const DataPipelineVisualization = () => {
  return (
    <>
      <style jsx>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 90deg;
          inherits: false;
        }

        .animated-card {
          position: relative;
          border-radius: 0.3rem;
          background-color: white;
        }

        .animated-card::after,
        .animated-card::before {
          content: " ";
          position: absolute;
          z-index: -1;
          inset: -0.05rem;
          background: conic-gradient(
            from var(--gradient-angle),
            #1f2937,
            #6420aa,
            #ff3ea5,
            #ff7ed4,
            #ff3ea5,
            #6420aa,
            #1f2937
          );
          border-radius: inherit;
          animation: rotate 4s linear infinite;
        }

        .animated-card::after {
          filter: blur(0.3rem);
          opacity: 0.5;
        }

        @keyframes rotate {
          0% {
            --gradient-angle: 0deg;
          }
          100% {
            --gradient-angle: 360deg;
          }
        }
      `}</style>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* First section: 3x2 row of statements with icons */}
        <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-6 place-items-center mt-12">
          {/* 1: event results */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-xs md:text-md">
              Event results
            </span>
          </div>

          {/* 2: educational efforts */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-xs md:text-md">
              Educational efforts
            </span>
          </div>

          {/* 3: signed users */}
          <div className="flex items-center space-x-2 md:pr-5">
            <div className="w-5 h-5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-xs md:text-md">
              Signed users
            </span>
          </div>

          {/* 4: sales engagement */}
          <div className="flex items-center space-x-2 md:pl-5">
            <div className="w-5 h-5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-xs md:text-md">
              Sales engagement
            </span>
          </div>

          {/* 5: partnerships */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-xs md:text-md">
              Partnerships
            </span>
          </div>

          {/* 6: community hubs */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-xs md:text-md">
              Community hubs
            </span>
          </div>
        </div>

        {/* Second section: placeholder */}
        <div className="flex-1 flex flex-col items-center justify-center mt-10 md:mt-0 mb-10 md:mb-0">
          <div className="relative">
            <div className="animated-card">
              <div className="p-2">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mb-10 flex items-center justify-center">
          {/* Stacked blocks with bottom row side by side */}
          <div className="flex flex-col space-y-2">
            {/* Organization block on top */}
            <div className="flex flex-col border rounded-md bg-white">
              <div className="px-4 py-2">
                <div className="flex items-center justify-between space-x-3 pb-1 border-b">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z" />
                    </svg>
                    <span className="text-gray-800 text-xs font-medium">
                      Organizations
                    </span>
                  </div>
                  <span className="bg-green-200 text-green-800 text-[10px] px-1.5 py-0.5 rounded">
                    enhanced
                  </span>
                </div>
                <div className="pt-1 text-xs text-gray-600">520 Contacts</div>
              </div>
            </div>

            {/* Bottom row with Developers and Repos side by side */}
            <div className="flex gap-2 sm:gap-1">
              {/* Developers block */}
              <div className="flex flex-col border rounded-md bg-white">
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between space-x-3 pb-1 border-b">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                      <span className="text-gray-800 text-xs font-medium">
                        Developers
                      </span>
                    </div>
                    <span className="bg-green-200 text-green-800 text-[10px] px-1.5 py-0.5 rounded">
                      enhanced
                    </span>
                  </div>
                  <div className="pt-1 text-xs text-gray-600">
                    4202 Contacts
                  </div>
                </div>
              </div>

              {/* Repos block */}
              <div className="flex flex-col border rounded-md bg-white">
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between space-x-3 pb-1 border-b">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                      </svg>
                      <span className="text-gray-800 text-xs font-medium">
                        Repos
                      </span>
                    </div>
                    <span className="bg-green-200 text-green-800 text-[10px] px-1.5 py-0.5 rounded">
                      enhanced
                    </span>
                  </div>
                  <div className="pt-1 text-xs text-gray-600">
                    1932 Contacts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPipelineVisualization;
