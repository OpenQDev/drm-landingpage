import React, { useState } from "react";

const PricingCards = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
    setOpenDropdown(null);
  };

  const toggleDropdown = (planName) => {
    setOpenDropdown(openDropdown === planName ? null : planName);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5">
      {/* Starter Plan */}
      <div className="border border-gray-300 p-5 pb-10 w-full md:w-52 rounded-md text-left bg-white">
        <h2 className="text-lg md:text-xl font-bold mb-2">Starter</h2>
        <p className="text-base md:text-lg font-bold mb-1">$10/month</p>
        <p className="text-sm mb-4">Per month, billed monthly</p>
        <p className="mb-4">Best for early stage</p>
        <div className="relative mb-4 w-full">
          <div
            className="cursor-pointer p-2 border rounded bg-white"
            onClick={() => toggleDropdown("Starter")}
          >
            {selectedPlan || "Select contacts"}
          </div>
          {openDropdown === "Starter" && (
            <div className="absolute z-10 w-full border rounded bg-white">
              <div
                className="cursor-pointer p-2 border-b hover:bg-gray-100"
                onClick={() => handleSelect("100 contacts - $5/month")}
              >
                100 contacts - $5/month
              </div>
              <div
                className="cursor-pointer p-2 border-b hover:bg-gray-100"
                onClick={() => handleSelect("500 contacts - $20/month")}
              >
                500 contacts - $20/month
              </div>
              <div
                className="cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => handleSelect("1000 contacts - $35/month")}
              >
                1000 contacts - $35/month
              </div>
            </div>
          )}
        </div>
        <button
          className={`py-2 px-4 rounded w-full ${
            selectedPlan ? "bg-black text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          {selectedPlan ? "Upgrade plan" : "Select credits"}
        </button>
        <hr className="my-4" />
        <ul className="list-none mb-4">
          <li>✔ Feature 1</li>
          <li>✔ Feature 2</li>
          <li>✔ Feature 3</li>
          <li>✔ Feature 4</li>
          <li>✔ Feature 5</li>
        </ul>
      </div>

      {/* Explorer Plan */}
      <div className="border border-gray-300 p-5 pb-10 w-full md:w-52 rounded-md text-left bg-white">
        <h2 className="text-lg md:text-xl font-bold mb-2">Explorer</h2>
        <p className="text-base md:text-lg font-bold mb-1">$20/month</p>
        <p className="text-sm mb-4">Per month, billed monthly</p>
        <p className="mb-4">Best for small teams</p>
        <div className="relative mb-4 w-full">
          <div
            className="cursor-pointer p-2 border rounded bg-white"
            onClick={() => toggleDropdown("Explorer")}
          >
            {selectedPlan || "Select contacts"}
          </div>
          {openDropdown === "Explorer" && (
            <div className="absolute z-10 w-full border rounded bg-white">
              <div
                className="cursor-pointer p-2 border-b hover:bg-gray-100"
                onClick={() => handleSelect("100 contacts - $5/month")}
              >
                100 contacts - $5/month
              </div>
              <div
                className="cursor-pointer p-2 border-b hover:bg-gray-100"
                onClick={() => handleSelect("500 contacts - $20/month")}
              >
                500 contacts - $20/month
              </div>
              <div
                className="cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => handleSelect("1000 contacts - $35/month")}
              >
                1000 contacts - $35/month
              </div>
            </div>
          )}
        </div>
        <button
          className={`py-2 px-4 rounded w-full ${
            selectedPlan ? "bg-black text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          {selectedPlan ? "Upgrade plan" : "Select credits"}
        </button>
        <hr className="my-4" />
        <ul className="list-none mb-4">
          <li>✔ Feature 1</li>
          <li>✔ Feature 2</li>
          <li>✔ Feature 3</li>
          <li>✔ Feature 4</li>
          <li>✔ Feature 5</li>
        </ul>
      </div>

      {/* Pro Plan */}
      <div className="border border-gray-300 p-5 pb-10 w-full md:w-52 rounded-md text-left bg-white">
        <h2 className="text-lg md:text-xl font-bold mb-2">Pro</h2>
        <p className="text-base md:text-lg font-bold mb-1">$30/month</p>
        <p className="text-sm mb-4">Per month, billed monthly</p>
        <p className="mb-4">Best for large teams</p>
        <div className="relative mb-4 w-full">
          <div
            className="cursor-pointer p-2 border rounded bg-white"
            onClick={() => toggleDropdown("Pro")}
          >
            {selectedPlan || "Select contacts"}
          </div>
          {openDropdown === "Pro" && (
            <div className="absolute z-10 w-full border rounded bg-white">
              <div
                className="cursor-pointer p-2 border-b hover:bg-gray-100"
                onClick={() => handleSelect("100 contacts - $5/month")}
              >
                100 contacts - $5/month
              </div>
              <div
                className="cursor-pointer p-2 border-b hover:bg-gray-100"
                onClick={() => handleSelect("500 contacts - $20/month")}
              >
                500 contacts - $20/month
              </div>
              <div
                className="cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => handleSelect("1000 contacts - $35/month")}
              >
                1000 contacts - $35/month
              </div>
            </div>
          )}
        </div>
        <button
          className={`py-2 px-4 rounded w-full ${
            selectedPlan ? "bg-black text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          {selectedPlan ? "Upgrade plan" : "Select credits"}
        </button>
        <hr className="my-4" />
        <ul className="list-none mb-4">
          <li>✔ Feature 1</li>
          <li>✔ Feature 2</li>
          <li>✔ Feature 3</li>
          <li>✔ Feature 4</li>
          <li>✔ Feature 5</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingCards;
