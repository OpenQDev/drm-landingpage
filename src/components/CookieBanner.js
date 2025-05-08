"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent");
    if (!saved) setIsVisible(true);
    else setConsent(saved);
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setConsent(choice);
    setIsVisible(false);

    // Example: trigger analytics if allowed
    if (choice === "accepted") {
      // initGoogleAnalytics();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-md z-50">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="text-sm text-gray-800">
          We use cookies to optimize our website and service. You can choose to
          accept all cookies or reject them.{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/imprint" className="underline">
            Imprint
          </a>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleConsent("rejected")}
            className="px-4 py-2 border text-sm rounded"
          >
            Reject
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="min-w-[100px] px-4 py-2 bg-gray-800 text-white text-sm rounded"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
