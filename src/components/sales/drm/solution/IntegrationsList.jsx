import React from "react";
import Image from "next/image";

const IntegrationsList = () => {
  const integrations = [
    { name: "GitHub", icon: "github" },
    { name: "Slack", icon: "slack" },
    { name: "Discord", icon: "discord" },
    { name: "CSV", icon: "csv" },
    { name: "X", icon: "x" },
    { name: "Gmail", icon: "gmail" },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <div className="grid grid-cols-2 gap-4 w-2/3">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex flex-col items-center justify-center border border-gray-400 rounded-md p-3 relative"
          >
            {(integration.name === "Gmail" || integration.name === "X") && (
              <span className="absolute  -top-1 text-[10px] font-bold bg-white rounded-lg px-2 whitespace-nowrap">
                Coming soon
              </span>
            )}
            <Image
              src={`/landingpage/icons/integrations/${integration.icon}.svg`}
              alt={integration.name}
              width={30}
              height={30}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsList;
