import React from "react";
import Head from "next/head";
import Nav from "../components/sales/nav";
import DevRelHero from "../components/sales/drm/devrel-hero";
import DevRelCore from "../components/sales/drm/devrel-core";
import DevRelProblems from "../components/sales/drm/devrel-problems";
import ProductShowcase from "../components/sales/drm/product-showcase/product-showcase";
import Faq from "../components/sales/drm/faq";
import LeadDiscovery from "@/components/sales/drm/lead-discovery";
import HowItWorks from "@/components/sales/drm/how-it-works";
import DeveloperDynamics from "@/components/sales/drm/developer-dynamics";
import FooterBanner from "@/components/sales/footer-banner";
import Footer from "@/components/sales/footer";
import StepTwoContent from "@/components/sales/drm/elements/step-two-content";
import { NextSeo } from "next-seo";

const DRM = () => {
  return (
    <>
      <NextSeo
        title="OpenQ DRM - Developer Relationship Management Platform"
        description="Harness the power of a CRM that helps you to better engage, understand, and grow your developer community."
        canonical="https://openq.dev"
        openGraph={{
          url: "https://openq.dev",
          title: "Developer Relationship Management Platform",
          description:
            "Harness the power of a CRM that helps you to better engage, understand, and grow your developer community.",
          images: [
            {
              url: "https://openq.dev/openq-website-thumbnail.png",
              width: 1200,
              height: 630,
              alt: "OpenQ",
              type: "image/png",
            },
          ],
          siteName: "OpenQ",
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
          title: "Developer Relationship Management Platform",
          description:
            "Harness the power of a CRM that helps you to better engage, understand, and grow your developer community.",
          image: "https://openq.dev/openq-website-thumbnail.png",
        }}
      />
      <main className="bg-bg-primary-color explore">
        <Nav />
        <div className="bg-bg-primary-color">
          <DevRelHero />
          <DevRelCore />
          <DevRelProblems />
          <ProductShowcase />
          <LeadDiscovery />
          <HowItWorks />
          <DeveloperDynamics />
          <Faq />
          <FooterBanner />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default DRM;
