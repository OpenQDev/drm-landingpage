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

const DRM = () => {
  return (
    <>
      <Head>
        <title>OpenQ DRM - Developer Relationship Management Platform</title>
        <meta
          name="description"
          content="Harness the power of a CRM that helps you to better engage, understand and grow your developer community."
        />
        <meta
          property="og:title"
          content="Developer Relationship Management Platform"
        />
        <meta
          property="og:description"
          content="Harness the power of a CRM that helps you to better engage, understand and grow your developer community."
        />
        <meta
          property="og:image"
          content="https://openq.dev/openq-website-thumbnail.png"
        />
        <meta property="og:url" content="https://openq.dev" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Developer Relationship Management Platform"
        />
        <meta
          property="twitter:description"
          content="Harness the power of a CRM that helps you to better engage, understand and grow your developer community."
        />
        <meta property="twitter:image" content="/openq-website-thumbnail.png" />
      </Head>
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
