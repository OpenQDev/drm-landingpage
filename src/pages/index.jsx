import React from "react";
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
  );
};

export default DRM;
