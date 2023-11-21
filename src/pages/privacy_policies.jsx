import React from "react";
import Nav from "../components/sales/nav";
import FooterBanner from "@/components/sales/footer-banner";
import Footer from "@/components/sales/footer";

const Imprint = () => {
  return (
    <div>
      <Nav />
      <main classNameNameName="top-content-padding">
        <div className="px-content-padding">
          <div class="container mx-auto p-4">
            <h1 class="text-2xl font-bold mb-4">Privacy Policy</h1>
            <p class="mb-4">As of November 21, 2023</p>

            <h2 class="text-xl font-semibold mt-4 pb-1">Table of Contents</h2>
            <ul class="list-disc pl-6">
              <li>Data Controller</li>
              <li>Overview of Processing Activities</li>
              <li>Applicable Legal Bases</li>
              <li>Security Measures</li>
              <li>Transmission of Personal Data</li>
              <li>International Data Transfers</li>
              <li>Use of Cookies</li>
              <li>Business Services</li>
              {/*  <!-- Add more list items here --> */}
            </ul>

            <h2 class="text-xl font-semibold mt-4">Data Controller</h2>
            <p>Riccardo Lamanna & Andrew O'Brien</p>
            <p>
              Email Address:{" "}
              <a href="mailto:info@openq.dev" class="text-blue-500">
                info@openq.dev
              </a>
            </p>
            <p>
              Imprint:{" "}
              <a href="https://openq.dev/imprint" class="text-blue-500">
                https://openq.dev/imprint
              </a>
            </p>

            <h2 class="text-xl font-semibold mt-4">
              Overview of Processing Activities
            </h2>
            {/*   <!-- Add content for "Overview of Processing Activities" here --> */}

            <h2 class="text-xl font-semibold mt-4">Applicable Legal Bases</h2>
            {/*   <!-- Add content for "Applicable Legal Bases" here --> */}

            <h2 class="text-xl font-semibold mt-4">Security Measures</h2>
            {/*  <!-- Add content for "Security Measures" here --> */}

            <h2 class="text-xl font-semibold mt-4">
              Transmission of Personal Data
            </h2>
            {/*     <!-- Add content for "Transmission of Personal Data" here --> */}

            <h2 class="text-xl font-semibold mt-4">
              International Data Transfers
            </h2>
            {/*   <!-- Add content for "International Data Transfers" here --> */}

            <h2 class="text-xl font-semibold mt-4">Use of Cookies</h2>
            {/*   <!-- Add content for "Use of Cookies" here --> */}

            <h2 class="text-xl font-semibold mt-4">Business Services</h2>
            {/* <!-- Add content for "Business Services" here --> */}

            {/*   <!-- Add more sections here --> */}
          </div>
        </div>
      </main>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Imprint;
