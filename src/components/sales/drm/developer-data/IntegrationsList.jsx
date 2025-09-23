import React from "react";
import Image from "next/legacy/image";

const IntegrationsList = () => {
  const integrations = [
    { name: "GitHub", icon: "github" },
    { name: "Slack", icon: "slack" },
    { name: "Discord", icon: "discord" },
    { name: "CSV", icon: "csv" },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <div className="grid grid-cols-2 gap-4 w-2/3">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex flex-col items-center justify-center border border-gray-400 rounded-md p-3 relative"
          >
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
