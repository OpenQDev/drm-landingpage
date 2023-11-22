import React from "react";
import Nav from "../components/sales/nav";
import FooterBanner from "@/components/sales/footer-banner";
import Footer from "@/components/sales/footer";

const Imprint = () => {
  return (
    <div>
      <Nav />
      <main className="top-content-padding px-content-padding md:-mt-10">
        <div>
          <h1 className="text-3xl font-bold border-b border-gray-400 pb-10">
            Terms of Use
          </h1>

          <br />
        </div>
      </main>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Imprint;
