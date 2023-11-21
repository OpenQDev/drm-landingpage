import React from "react";
import Nav from "../components/sales/nav";
import FooterBanner from "@/components/sales/footer-banner";
import Footer from "@/components/sales/footer";

const Imprint = () => {
  return (
    <div>
      <Nav />
      <main className="top-content-padding px-content-padding -mt-10">
        <div className="">
          <div className="text-3xl font-bold">Imprint</div>
          <div className="font-bold pt-5">Information according to § 5 TMG</div>
          <div>OpenQ Labs GmbH</div>
          <div>
            Rheinsberger Str. 76/77, <br />
            10115 Berlin
          </div>
          <br />
          <div>Register number: HRB 236736 B</div>
          <div>Register court: Charlottenburg (Berlin)</div>
          <div>Authorized to represent: Riccardo Lamanna & Andrew O'Brien</div>
          <br />
          <div className="font-bold">
            Responsible for the content according to § 55 Abs. 2 RStV:
          </div>
          <div>Riccardo Lamanna</div>
          <div>Managing Director OpenQ Labs GmbH</div>
          <div>
            Rheinsberger Str. 76/77, <br />
            10115 Berlin
          </div>
          <br />
          <div>Andrew O'Brien</div>
          <div>Managing Director OpenQ Labs GmbH</div>
          <div>
            Rheinsberger Str. 76/77, <br />
            10115 Berlin
          </div>
          <br />
          <div className="font-bold">Contact</div>
          <div>Mail: info@openq.dev</div>
        </div>
        <br />
        <div className="font-bold">§1 Liability for content</div>
        <div>
          As a service provider, we bear responsibility for the content we
          create in accordance with § 7 Abs.1 of the TMG (German Telemedia Act)
          and in compliance with applicable laws. However, we are not obligated,
          under §§ 8 to 10 of the TMG, to monitor or investigate transmitted or
          stored information for signs of illegal activity. Our obligations to
          remove or block information under general laws remain intact.
          Nevertheless, our liability in this matter arises only when we become
          aware of a specific violation of the law. Upon such awareness, we will
          promptly remove the relevant content.
        </div>
        <br />
        <div className="font-bold">§2 Liability for links</div>
        <div>
          Our website contains links to external third-party websites over which
          we have no control or influence regarding content. Therefore, we
          disclaim any liability for the content of these external websites. The
          respective provider or operator of the linked pages is solely
          responsible for their content. We conducted checks for potential legal
          violations when initially linking to these pages, and at that time, no
          illegal content was evident. However, it is unreasonable to conduct
          ongoing monitoring of linked page content without concrete evidence of
          legal violations. Should we become aware of any legal infringements,
          we will immediately remove the respective links.
        </div>
        <br />
        <div className="font-bold">§3 Copyright</div>
        <div>
          The content and materials on our website, created by the site
          operators, are subject to German copyright law. Any duplication,
          processing, distribution, or commercial use beyond the scope of
          copyright law requires prior written consent from the respective
          author or creator. Downloads and copies from this site are permitted
          solely for private, non-commercial use. In cases where content on this
          site was not created by the operator, we respect the copyrights of
          third parties and clearly identify third-party content as such. If you
          should nonetheless become aware of a copyright infringement, please
          notify us accordingly, and we will promptly remove the infringing
          content upon awareness.
        </div>
      </main>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Imprint;
