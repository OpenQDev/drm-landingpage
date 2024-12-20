import { useEffect, useState } from "react";
import Nav from "../../components/sales/nav";
import Footer from "../../components/sales/footer";

const Guides = () => {
  const videos = [
    {
      id: 1,
      thumbnail:
        "https://www.loom.com/embed/a47ac02590e3433fb7c69f12237c2234?hide_owner=true&hide_share=true&hideEmbedTopBar=true&hide_title=true",
      title: "OpenQ Product Overview & Key Features",
    },
    {
      id: 2,
      thumbnail:
        "https://www.loom.com/embed/d8e9919061ad4f80b4127ee2b6b4d809?hide_owner=true&hide_share=true&hideEmbedTopBar=true&hide_title=true",
      title: "Building Your Contact List: Step-by-Step Guide",
    },
    {
      id: 3,
      thumbnail:
        "https://www.loom.com/embed/c011c187422848b68e93c16182adc9ef?hide_owner=true&hide_share=true&hideEmbedTopBar=true&hide_title=true",
      title: "Managing Dependencies: Best Practices & Tips",
    },
    {
      id: 4,
      thumbnail:
        "https://www.loom.com/embed/5fb2e7c26cd04dc8b801fd6564cf4ae2?hide_owner=true&hide_share=true&hideEmbedTopBar=true&hide_title=true",
      title: "Making Sense of Your Metrics & Analytics",
    },
    {
      id: 5,
      thumbnail:
        "https://www.loom.com/embed/06a128c43fec4f8eabdd32bdf0d9bd11?hide_owner=true&hide_share=true&hideEmbedTopBar=true&hide_title=true",
      title: "Mastering the Dashboard: Features & Navigation",
    },
  ];

  return (
    <div>
      <Nav />

      <div className="pl-40 pr-4 md:pr-16 lg:pr-32 py-12 space-y-16 relative">
        {/* Main title section */}
        <div className="mb-24">
          <h1 className="text-4xl font-bold">
            Getting Started with OpenQ: Video Guide
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome to our comprehensive guide where we'll walk you through
            OpenQ's features and help you get started with your developer
            outreach journey.
          </p>
        </div>

        {/* Dotted line guide with stronger fade effects */}
        <div className="absolute left-40 top-32 bottom-10 border-l-2 border-dotted border-gray-300 -z-10">
          {/* Top fade - increased height and width */}
          <div className="absolute -top-4 h-16 w-1 bg-gradient-to-b from-white via-white to-transparent" />
          {/* Bottom fade - increased height and width */}
          <div className="absolute -bottom-4 h-16 w-1 bg-gradient-to-t from-white via-white to-transparent" />
        </div>

        {/* Section 1 */}
        <div className="space-y-6 relative">
          <div className="flex items-center">
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 relative z-20 -ml-4 md:-ml-4 lg:-ml-4">
              <span className="font-semibold">1</span>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">
                Start Here: Your Introduction to OpenQ
              </h2>
              <p className="text-gray-600 mt-1">
                In this video, we'll showcase the key problems OpenQ solves for
                you and guide you through how our platform works.
              </p>
            </div>
          </div>
          <div className="max-w-xl ml-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">{videos[0].title}</h3>
              <div className="relative aspect-video">
                <iframe
                  src={videos[0].thumbnail}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-6 relative">
          <div className="flex items-center">
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 relative z-20 -ml-4 md:-ml-4 lg:-ml-4">
              <span className="font-semibold">2</span>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">
                Essential Setup & Configuration Guide
              </h2>
              <p className="text-gray-600 mt-1">
                Learn to build targeted contact lists and set up dependency
                tracking to gain comprehensive insights into repositories and
                developer activities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-12">
            {videos.slice(1, 3).map((video) => (
              <div key={video.id} className="flex flex-col gap-2 max-w-xl">
                <h3 className="text-lg font-medium">{video.title}</h3>
                <div className="relative aspect-video">
                  <iframe
                    src={video.thumbnail}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-6 pb-10 relative">
          <div className="flex items-center">
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 relative z-20 -ml-4 md:-ml-4 lg:-ml-4">
              <span className="font-semibold">3</span>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">
                Understanding Your Data & Results
              </h2>
              <p className="text-gray-600 mt-1">
                Master your analytics dashboard and learn to interpret key
                metrics for data-driven decision making and improved outreach
                strategies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-12">
            {videos.slice(3, 5).map((video) => (
              <div key={video.id} className="flex flex-col gap-2 max-w-xl">
                <h3 className="text-lg font-medium">{video.title}</h3>
                <div className="relative aspect-video">
                  <iframe
                    src={video.thumbnail}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Section */}
        <div className="space-y-6 relative">
          <div className="flex items-center">
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 relative z-20 -ml-4 md:-ml-4 lg:-ml-4">
              <span className="font-semibold">4</span>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">Hungry for More?</h2>
              <p className="text-gray-600 mt-1">
                Check out our{" "}
                <a
                  href="/help"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Help Center
                </a>{" "}
                for a deep dive into every single feature and metric OpenQ has
                to offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guides;
