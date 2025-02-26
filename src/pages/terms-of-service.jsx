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
          <p className="pt-1">Last Updated Jan 12 2024</p>
          <br />

          <div className="pt-2">
            <h2>
              <br />
              <strong>OpenQ Terms of Use</strong>
            </h2>
            <br />
            <p>
              These Terms of Use ("
              <strong>Terms</strong>") are an agreement between the user (“
              <strong>user</strong>”, “<strong>you</strong>” or “
              <strong>a party</strong>”) and OpenQ Labs GmbH (“
              <strong>OpenQ</strong>”) with its principal offices at
              <strong> Rheinsberger Str. 76/77 10115 Berlin Germany</strong> and
              applies to your use of www.openq.dev (“
              <strong>Website</strong>”), any subdomains and any products,
              services, API’s, or content (“
              <strong>Application</strong>”) found on the proceeding. OpenQ and
              User are sometimes referred to herein individually as a (“
              <strong>Party</strong>”) and collectively as the (“
              <strong>Parties</strong>”).
            </p>
            <p>
              OpenQ is a Developer Relationship Management (DRM) platform
              designed to address the unique challenges of developer engagement.
              OpenQ provides actionable insights beyond surface-level metrics,
              allowing businesses to understand the impact of each developer
              account on their objectives.
            </p>
            <p>
              Use of OpenQ, the Website, or Application, amounts to acceptance
              of these policies and all users must read, agree with, and accept
              all of the terms. When you access OpenQ via its website or use its
              API’s, you affirm your commitment to be bound by all terms and
              conditions within these Terms and express your acceptance of the
              same. These Terms also apply to any subsequent updates (as
              permitted by these Terms), whether or not these updates are
              manually or automatically installed.
            </p>
            <p>
              Any rights not explicitly conferred upon you within these Terms
              remain solely with OpenQ.
            </p>
            <ol>
              <br />
              <li>
                <strong>1. Definitions</strong>
              </li>
            </ol>
            <ul>
              <li>
                - "Account" refers to the unique User profile established within
                the Application, granting the holder access to specific features
                and functionalities of the Application.
              </li>
              <li>
                - "Application" refers to the SaaS product developed by OpenQ
                Labs GmbH which allows Users to interact with, pay, and track
                their developer community.
              </li>
              <li>
                - "Content" refers to any data, code, information, text,
                graphics, images, music, audio, video, and any other materials
                or elements uploaded, shared, streamed, displayed, or otherwise
                made accessible or available through the Application.
              </li>
              <li>
                - "Site" refers to the online platform accessible via the URL
                https://www.openq.dev.
              </li>
              <li>
                - "Services" means any and all services currently provided or to
                be provided in the future by OpenQ to Users, as made available
                through the Application.
              </li>
              <li>
                - “Third-Party Platforms” refers to platforms, websites, and
                applications managed and operated by external parties distinct
                from OpenQ.
              </li>
              <li>
                - “User” denotes any individual, company, or organization,
                engaging with, downloading, or accessing the Site, the
                Application, or utilizing Services.
              </li>
            </ul>
            <br />
            <strong>2. Services</strong>
            <p>
              <br />
              <strong>2.1 Application Features and Use:</strong> The Application
              offers Users the ability to interact with their developer
              community and offers various features and capabilities to engage
              developers. The platform can be used for Developer Relationship
              Management (DRM), as an On-Chain Work Platform for software
              development feature bounties and additional features as they are
              rolled out. Users of the Application are expected to utilize these
              features in adherence to the terms and guidelines set forth in
              these Terms.
            </p>
            <br />
            <p>
              {" "}
              <strong>2.2. Software-as-a-Service: </strong>SaaS Services means
              the specific OpenQ’s internet-accessible service (“Saas”)
              identified in these Terms provides use of OpenQ and is hosted by
              OpenQ or its services provider and made available to you over a
              network on a term-use basis. User acknowledges that this is a SaaS
              product and OpenQ will not be delivering copies of the Software to
              Users as part of the SaaS Services.
              <br />
              <br />
              <strong>2.3.</strong> Scope. Unless agreed to otherwise, OpenQ
              will provide the services set out in these Terms.
            </p>

            <p>
              <br />
              <strong>2.4.</strong> The specific version of the SaaS may be
              limited to certain features and functionalities, a certain number
              of users or seats, a certain subscription terms or a combination
              of the forgoing or similar parameters.
            </p>
            <p>
              <br />
              <strong>2.5.</strong> The Parties may agree on further features
              not listed in Annex 1 on an individual basis. This may also
              include additional services such as programming, support, or
              similar services.
            </p>
            <p>
              <br />
              <strong>2.6. </strong>In the event of any inconsistency, conflict,
              or ambiguity as to the rights and obligations of the parties under
              these Terms or any additional ancillary document, contract, or
              agreement, the terms of that ancillary document, contract, or
              agreement shall contract and supersede any such inconsistency,
              conflict or ambiguity.
            </p>
            <ol>
              <li>
                <br />
                <strong>3. Terms and Payment</strong>
              </li>
            </ol>
            <p>
              <br />
              <strong>3.1.</strong> OpenQ shall make the SaaS Edition available
              to the User via the
            </p>
            <p>
              Internet as software as a service during the term of the
              subscription contract. The subscription will be effective on the
              date of its activation by OpenQ.
            </p>
            <p>
              <br />
              <strong>3.2. </strong>Monthly or annual subscriptions will be
              automatically renewed 30 days before their expiration, unless
              notice has been given by the User to OpenQ to cancel the service.
            </p>
            <p>
              <br />
              <strong>3.3. Suspension for Non-Payment.</strong>{" "}
              <p>
                OpenQ reserves the right to suspend delivery of the SaaS
                Services if User fails to timely pay any undisputed amounts due
                to OpenQ under this Terms, but only after OpenQ notifies User of
                such failure and such failure continues for fifteen (15) days.
                Suspension of the SaaS Services shall not release User of its
                payment obligations under this Terms. User agrees that OpenQ
                shall not be liable to User or to any third party for any
                liabilities, claims or expenses arising from or relating to
                suspension of the SaaS Services resulting from User’s
                nonpayment. In the event of default, statutory interest may be
                charged.
              </p>
            </p>
            <p>
              <br />
              <strong>3.4. </strong>
              <strong>Suspension for Ongoing Harm. </strong>OpenQ reserves the
              right to suspend delivery of the SaaS Services if OpenQ reasonably
              concludes that User or Cuistomer’s Clients use of the SaaS
              Services is causing immediate and ongoing harm to OpenQ or others.
              In the extraordinary case that OpenQ must suspend delivery of the
              SaaS Services, OpenQ shall immediately notify User of the
              suspension and the parties shall diligently attempt to resolve the
              issue. OpenQ shall not be liable to User or to any third party for
              any liabilities, claims or expenses arising from or relating to
              any suspension of the SaaS Services in accordance with
              terminations under this section.
              <br />
              <br />
              <strong>3.5.</strong> Unless otherwise agreed to between the
              Parties, the fees applicable for the SaaS Services will be those
              found on the OpenQ website when the service is agreed to. Fees are
              payable and will be invoiced in advance, unless agreed otherwise.
              OpenQ will send invoices to the User and those invoices are due 14
              days after receipt. All remuneration is subject to statutory value
              added tax and all other applicable duties if any.
            </p>
            <ol>
              <li>
                <br />
                <strong>4. SaaS Services</strong>
              </li>
            </ol>
            <p>
              <br />
              <strong>4.1.</strong> During the Subscription Term, User will
              receive a nonexclusive, non-assignable, royalty free, worldwide
              right to access and use the SaaS Services solely for your internal
              business operations subject to the terms of these Terms and
              including Any other additional agreements concluded between the
              Parties.
              <br /> <br />
              <strong>4.2.</strong> Non-Exclusive Service. User acknowledges
              that SaaS Services is provided on a non-exclusive basis. Nothing
              shall be deemed to prevent or restrict OpenQ’s ability to provide
              the SaaS Services or other technology, including any features or
              functionality
            </p>
            <p>first developed for User, to other parties.</p>
            <p>
              <br />
              <strong>4.3. System Availability.</strong> The SaaS Services will
              achieve System Availability of at least 97% during each calendar
              month of the Subscription Term. OpenQ reserves the right to take
              the Service offline for scheduled maintenance for which Customer
              has been provided reasonable notice and Supplier reserves the
              right to change its maintenance window upon prior notice to
              Customer. OpenQ reserves the right to carry out unannounced
              maintenance work in case this is necessary, in particular, if this
              is required for data and operational security.
            </p>
            <p>
              <br />
              <strong>4.4.</strong> OpenQ may, at its sole discretion, develop
              new features and functionalities of the SaaS Services. These new
              features and improvements may be offered to the User on the basis
              of a new contract or they may be offered free of charge.
            </p>
            <p>
              <br />
              <strong>4.5. </strong>OpenQ may reasonably change the functional
              scope of the services at any time. This may be done due to safety
              or security concerns or disruptions in the provision of services
              by subcontractors.
            </p>
            <ol>
              <li>
                <br />
                <strong>5. Restrictions</strong>
              </li>
            </ol>
            <p>
              <br />
              <strong>5.1. </strong> User shall not, and shall not permit anyone
              to: (i) copy or republish the SaaS Services or Software, (ii) make
              the SaaS Services available to any person other than authorized
              users, (iii) use or access the SaaS Services to provide service
              bureau, time-sharing or other computer hosting services to third
              parties, (iv) modify or create derivative works based upon the
              SaaS Services or Documentation, (v) remove, modify or obscure any
              copyright, trademark or other proprietary notices contained in the
              software used to provide the SaaS Services or in the
              Documentation, (vi) reverse engineer, decompile, disassemble, or
              otherwise attempt to derive the source code of the Software used
              to provide the SaaS Services, except and only to the extent such
              activity is expressly permitted by applicable law, or (vii) access
              the SaaS Services or use the Documentation in order to build a
              similar product or competitive product. Subject to the limited
              licenses granted herein, OpenQ shall own all right, title and
              interest in and to the Software, services, Documentation, and
              other deliverables provided under this Terms, including all
              modifications, improvements, upgrades, derivative related thereto
              and intellectual property rights therein. User agrees to assign
              all right, title and interest it may have in the foregoing to
              OpenQ.
              <br /> <br />
              <p>
                <strong>5.2.</strong> Violation of these restrictions may result
                in the unilateral suspension of the Users account at the sole
                discretion of OpenQ.
              </p>
            </p>
            <ol>
              <li>
                <br />
                <strong>6. User Responsibilities</strong>
              </li>
            </ol>
            <p>
              <br />
              <strong>6.1. </strong>
              <strong>Assistance.</strong> User shall provide commercially
              reasonable information and assistance to OpenQ to enable OpenQ to
              deliver the SaaS Services. Prior to any productive use of the SaaS
              Services as part of the respective contractual use, User shall
              test the Software to ensure that it is free of defects and that it
              is operable by the User. Upon request from OpenQ, User shall
              promptly deliver User Content to OpenQ in an electronic file
              format specified and accessible by OpenQ. User acknowledges that
              OpenQ’s ability to deliver the SaaS Services in the manner
              provided in this Terms may depend upon the accuracy and timeliness
              of such information and assistance.
            </p>
            <p>
              <br />
              <strong>6.2. </strong>
              <strong>Compliance with Laws</strong>. User shall comply with all
              applicable local, state, national and foreign laws in connection
              with its use of the SaaS Services, including those laws related to
              data privacy, international communications, and the transmission
              of technical or personal data. User acknowledges that OpenQ
              exercises no control over the content of the information
              transmitted by User or User’s Clients through the SaaS Services.
              User shall not upload, post, reproduce or distribute any
              information, software or other material protected by copyright,
              privacy rights, or any other intellectual property right without
              first obtaining the permission of the owner of
            </p>
            <p>such rights.</p>
            <p>
              <br />
              <strong>6.3. </strong>
              <strong>Unauthorized Use; False Information.</strong> User shall:
              (a) notify OpenQ immediately of any unauthorized use of any
              password or user id or any other known or suspected breach of
              security, (b) report to OpenQ immediately and use reasonable
              efforts to stop any unauthorized use of the SaaS Services that is
              known or suspected by User or User’s Clients, and (c) not provide
              false identity information to gain access to or use the SaaS
              Services.
            </p>
            <p>
              <br /> <br />
              <strong>6.4. </strong>
              <strong>Administrator Access</strong>. User shall be solely
              responsible for the acts and omissions of its Administrator Users.
              OpenQ shall not be liable for any loss of data or functionality
              caused directly or indirectly by the Administrator Users.
              <br /> <br />
              <strong>6.5. </strong>
              <strong>User Input. </strong>User is solely responsible for
              collecting, inputting and updating all User Content stored on the
              Host, and for ensuring that the User Content does not (i) include
              anything that actually or potentially infringes or misappropriates
              the copyright, trade secret, trademark or other intellectual
              property right of any third party, or (ii) contain anything that
              is obscene, defamatory, harassing, offensive or malicious. User
              shall: (i) notify OpenQ immediately of any unauthorized use of any
              password or user id or any other known or suspected breach of
              security, (ii) report to OpenQ immediately and use reasonable
              efforts to stop any unauthorized use of the Service that is known
              or suspected by User or User Client’s, and (iii) not provide false
              Identity information to gain access to or use the Service.
            </p>
            <p>
              <br />
              <strong>6.6. </strong>
              <strong>License from User.</strong> Subject to the terms and
              conditions of these Terms, User shall grant to OpenQ a limited,
              non-exclusive and non-transferable license, to copy, store,
              configure, perform, display and transmit User Content solely as
              necessary to provide the SaaS Services to User.
            </p>
            <p>
              <br />
              <strong>6.7. </strong>
              <strong>Ownership and Restrictions. </strong>User retains
              ownership and intellectual property rights in and to its User
              Content. OpenQ or its OpenQs retain all ownership and intellectual
              property rights to the services, Software programs, and anything
              developed and delivered under these Terms. Third party technology
              that may be appropriate or necessary for use with some OpenQ
              programs is specified in the program Documentation or ordering
              document as applicable. User’s right to use such third party
              technology is governed by the terms of the third party technology
              license agreement specified by OpenQ and not under these Terms.
            </p>
            <p>
              <br />
              <strong>6.8. </strong>
              <strong>Suggestions.</strong> OpenQ shall have a royalty-free,
              worldwide, irrevocable, perpetual license to use and incorporate
              into the SaaS Services any suggestions, enhancement requests,
              recommendation or other feedback provided by User, including
              Users, relating to the operation of the SaaS Services.
            </p>
            <p>
              <br />
              <strong>6.9. Backups.</strong> User shall take adequate
              precautions for the event that the Saas Services do not work
              properly as a whole or partially. This includes, without
              limitation, User being responsible for generating daily back-ups
              of all data processed and regular checking of the data processing
              results.
            </p>
            <ol>
              <li>
                <br />
                <strong>7. Representations and Warranties</strong>
                <p>
                  <br />
                  <strong>7.1.</strong> OpenQ represents and warrants to that:
                  it is a limited liability company, duly organized, validly
                  existing, and in good standing under the laws of the
                  jurisdiction where it is registered, it is duly qualified to
                  do business and is in good standing in every jurisdiction in
                  which such qualification is required for purposes of these
                  Terms, it has the full right, power, and authority to enter
                  into these Terms nd to perform its obligations hereunder, the
                  execution of these Terms by the individual whose signature is
                  set forth at the end of these Terms, and the delivery of these
                  Terms by OpenQ, have been duly authorized by all necessary
                  action on the part of OpenQ, these Terms has been executed and
                  delivered by OpenQ and (assuming due authorization, execution,
                  and delivery by the other Parties) constitutes the legal,
                  valid, and binding obligation of OpenQ, enforceable against
                  OpenQ in accordance with its terms.
                </p>
              </li>
            </ol>
            <p>
              <br />
              <strong>7.2.</strong> User represents and warrants to the other
              Parties that: it is a limited liability company, duly organized,
              validly existing, and in good standing under the laws of the
              jurisdiction where it is registered, it is duly qualified to do
              business and is in good standing in every jurisdiction in which
              such qualification is required for purposes of these Terms, it has
              the full right, power, and authority to enter into these Terms and
              to perform its obligations hereunder, the execution of these Terms
              by the individual whose signature is set forth at the end of these
              Terms, and the delivery of these Terms by User, have been duly
              authorized by all necessary action on the part of User, these
              Terms has been executed and delivered by User and (assuming due
              authorization, execution, and delivery by the other Parties)
              constitutes the legal, valid, and binding obligation of User,
              enforceable against User in accordance with its terms.
            </p>
            <p>
              <br />
              <strong> 7.3. </strong>OpenQ represents and warrants that it will
              provide the SaaS Services in a professional manner consistent with
              general industry standards and that the SaaS Services will perform
              substantially in accordance with the reasonable expectations.
              OpenQ shall maintain the SaaS Services in a satisfactory working
              condition suitable that enables User to use the SaaS Services in
              accordance with these Terms. However, OpenQ reserves the right to
              remedy defects exclusively by providing an update, an upgrade or a
              new version of the SaaS Service. Such new versions may contain new
              or slightly modified features. The responsibility of OpenQ is
              excluded to the extent of defects resulting from User not
              complying with operating conditions for the SaaS Service or
              instructions from OpenQ or modifications User made to the SaaS
              Service.
            </p>
            <p>
              <br />
              <strong>7.4.</strong> OPENQ WARRANTS THAT THE SAAS SERVICES WILL
              PERFORM IN ALL MATERIAL RESPECTS IN ACCORDANCE WITH THE
              DOCUMENTATION. OPENQ DOES NOT GUARANTEE THAT THE SAAS SERVICES
              WILL BE PERFORMED ERROR-FREE OR UNINTERRUPTED, OR THAT OPENQ WILL
              CORRECT ALL SAAS SERVICES ERRORS. User ACKNOWLEDGES THAT OPENQ
              DOES NOT CONTROL THE TRANSFER OF DATA OVER COMMUNICATIONS
              FACILITIES, INCLUDING THE INTERNET OR BLOCKCHAIN NETWORKS, AND
              THAT THE SAAS SERVICE MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND
              OTHER PROBLEMS INHERENT IN THE USE OF SUCH COMMUNICATIONS
              FACILITIES. THIS SECTION SETS FORTH THE SOLE AND EXCLUSIVE
              WARRANTY GIVEN BY OpenQ (EXPRESS OR IMPLIED) WITH RESPECT TO THE
              SUBJECT MATTER OF THESE TERMS. NEITHER OPENQ NOR ANY OF ITS OPENQ
              OR OTHER OPENQ WARRANT OR GUARANTEE THAT THE OPERATION OF THE
              SUBSCRIPTION SERVICE WILL BE UNINTERRUPTED, VIRUS-FREE OR
              ERROR-FREE, NOR SHALL OPENQ OR ANY OF ITS SERVICE PROVIDERS BE
              LIABLE FOR UNAUTHORIZED ALTERATION, THEFT OR DESTRUCTION OF USER’S
              OR ANY USER’S DATA, FILES, OR PROGRAMS.
            </p>
            <p>
              <br />
              <strong>7.5. </strong> NO OTHER REPRESENTATIONS OR WARRANTIES;
              NON-RELIANCE. EXCEPT FOR THE EXPRESS REPRESENTATIONS AND
              WARRANTIES CONTAINED IN THIS SECTION. NO PARTY TO THESE TERMS, NOR
              ANY OTHER PERSON ON SUCH PARTY’S BEHALF, HAS MADE OR MAKES ANY
              EXPRESS OR IMPLIED REPRESENTATION OR WARRANTY, EITHER ORAL OR
              WRITTEN, WHETHER ARISING BY LAW, COURSE OF DEALING, COURSE OF
              PERFORMANCE, USAGE, TRADE OR OTHERWISE, ALL OF WHICH ARE EXPRESSLY
              DISCLAIMED, AND EACH PARTY ACKNOWLEDGES THAT IT HAS NOT RELIED
              UPON ANY REPRESENTATION OR WARRANTY MADE BY THE OTHER PARTY, OR
              ANY OTHER PERSON ON SUCH PARTY’S BEHALF, EXCEPT AS SPECIFICALLY
              PROVIDED IN THIS SECTION.
            </p>
            <p>
              <br />
              <strong>8. Liability </strong>
              <br /> <br />
              <strong>8.1. </strong>The limitations and exclusions of liability
              set out here and elsewhere in these Terms: govern all liabilities
              arising under these Terms or relating to the subject matter of
              these Terms, including liabilities arising in contract, in tort
              (including negligence) and for breach of statutory duty, except to
              the extent expressly provided otherwise in these Terms. OpenQ
              shall not be liable to the User in respect of any loss of profits
              or anticipated savings. OpenQ shall not be liable to the User in
              respect of any loss of revenue or income. OpenQ shall not be
              liable to the User in respect of any loss of use or production.
              OpenQ shall not be liable to the User in respect of any loss of
              business, contracts or opportunities. OpenQ shall not be liable to
              the User in respect of any special, indirect or consequential loss
              or damage.
            </p>
            <p>
              <br />
              <strong>8.2.</strong> NEITHER PARTY’S AGGREGATE LIABILITY FOR
              DAMAGES UNDER THESE TERMS, REGARDLESS OF THE NATURE OF THE CLAIM
              (INCLUDING NEGLIGENCE), SHALL EXCEED THE FEES PAID OR PAYABLE BY
              USER UNDER THIS TERMS DURING THE 12 MONTHS PRECEDING THE DATE THE
              CLAIM AROSE. The foregoing limitations shall not apply to the
              parties’ obligations (or any breach thereof) under Sections
              entitled “Restrictions”, “Indemnification.”
            </p>
            <p>
              <br />
              <strong>9. Indemnification </strong>
              <br />
              <br />
              <strong>9.1.</strong> The User agree to defend, indemnify and hold
              harmless OpenQ, and any respective directors, shareholders,
              affiliates, officers, agents, employees, and permitted successors
              and assigns against any and all claims, losses, damages,
              liabilities, penalties, punitive damages, expenses, reasonable
              legal fees and costs of any kind or amount whatsoever, which
              result from or arise out of any act or omission of the indemnified
              party, its respective directors, shareholders, affiliates,
              officers, agents, employees, and permitted successors and assigns
              that occurs in connection with these Terms. These include against
              any costs or expenses (including reasonable attorneys' fees),
              judgments, fines, losses, claims, damages, liabilities and amounts
              paid in settlement in connection with any claim, action, suit,
              proceeding or investigation, including without limitation
              liabilities arising out of these Terms.
            </p>
            <p>
              <br />
              <strong>10. Non-Disclosure of Confidential Information</strong>
            </p>
            <p>
              <br />
              <strong>10.1.</strong> The Parties agree that all Confidential
              Information (whether communicated in written or oral form and as
              identified by the disclosing Party) disclosed to the other Parties
              to this agreement shall, for a period of two (2) years from the
              date of disclosure, refrain from disclosing such Confidential
              Information until such time as all the Confidential Information
              becomes publicly known and made generally available by the
              disclosing Party.
            </p>
            <p>
              <br />
              <strong>10.2.</strong> All Parties will keep in strict confidence
              the Confidential Information and shall not, without prior written
              consent of the disclosing Party in each instance, disclose, use or
              otherwise disseminate the Confidential Information, directly or
              indirectly, to any third party. In the event that the Parties are
              legally required to disclose the Confidential Information, then,
              if legally permitted, they will promptly notify the disclosing
              Party of the nature of the requirement and the Confidential
              Information affected.
            </p>
            <p>
              <br />
              <strong>11. Personal Data</strong>
            </p>
            <p>
              <br />
              <strong> 11.1. Personal Data. </strong>User hereby acknowledges
              and agrees that OpenQ’s performance of these Terms may require
              OpenQ to process, transmit and/or store User personal data or the
              personal data of User employees and Affiliates. By submitting
              personal data to OpenQ, User agrees that OpenQ and its Affiliates
              may process, transmit and/or store personal data only to the
              extent necessary for, and for the sole purpose of, enabling OpenQ
              to perform its obligations to under these Terms. In relation to
              all Personal Data provided by or through User to OpenQ, User will
              be responsible as sole Data Controller for complying with all
              applicable data protection or similar laws such as EU Directive
              95/46/EC and laws implementing that Directive that regulate the
              processing of Personal Data and special categories of data as such
              terms are defined in that Directive. User agrees to obtain all
              necessary consents and make all necessary disclosures before
              including Personal Data in Content and using the Enabling Software
              and OpenQ SaaS. User confirms that User is solely responsible for
              any Personal Data that may be contained in Content, including any
              information which any OpenQ SaaS User shares with third parties on
              User’s behalf. User is solely responsible for determining the
              purposes and means of processing User Personal Data by OpenQ under
              this Agreement, including that such processing according to User’s
              instructions will not place OpenQ in breach of applicable data
              protection laws. Prior to processing, User will inform OpenQ about
              any special categories of data contained within User Personal Data
              and any restrictions or special requirements in the processing of
              such special categories of data, including any cross border
              transfer restrictions. User is responsible for ensuring that OpenQ
              meets such restrictions or special requirements. OpenQ to process
              any Personal Data that meets the requirements set forth in this
              Section according to these Terms of Use.
            </p>
            <p>
              <br />
              <strong>11.2.</strong> <br />
              <strong>OpenQ Personal Data Obligations.</strong> In performing
              the SaaS Services, OpenQ will comply with the OpenQ Services
              Privacy Policy, which is available at
              https://openq.dev/privacy_policies and incorporated herein by
              reference. The OpenQ Services Privacy Policy is subject to change
              at OpenQ’s discretion; however, OpenQ policy changes will not
              result in a material reduction in the level of protection provided
              for User data during the period for which fees for the services
              have been paid. The services policies referenced in these Terms
              specify our respective responsibilities for maintaining the
              security of User data in connection with the SaaS Services. OpenQ
              reserves the right to provide the SaaS Services from Host
              locations, and/or through use of subcontractors, worldwide. OpenQ
              subscribes to the United States/European Union Safe Harbor
              Principles, and as a result, appears on the U.S. Department of
              Commerce Safe Harbor list (available at
              http://www.export.gov/safeharbor) as of the effective date of
              these Terms. OpenQ’s Safe Harbor certification specifically
              includes OpenQ’s performance of services for User provided
              personal information. OpenQ will only process User Personal Data
              in a manner that is reasonably necessary to provide SaaS
            </p>
            <p>
              Services and only for that purpose. OpenQ will only process User
              Personal Data in delivering OpenQ SaaS. User agrees to provide any
              notices and obtain any consent related to OpenQ’s use of the data
              for provisioning the SaaS Services, including those related to the
              collection, use, processing, transfer and disclosure of personal
              information. User shall have sole responsibility for the accuracy,
              quality, integrity, legality,
            </p>
            <p>
              reliability, appropriateness and retains ownership of all of User
              data.
            </p>
            <p>
              <br />
              <strong>11.3. </strong>
              <strong>Statistical Information.</strong> OpenQ may anonymously
              compile statistical information related to the performance of the
              Services for purposes of improving the SaaS service, provided that
              such information does not identify User’s data or include User’s
              name.
            </p>
            <p>
              <br />
              <strong>12. Dispute Resolution. </strong>
            </p>
            <p>
              <br />
              <strong>12.1.</strong> User’s satisfaction is an important
              objective to OpenQ in performing its obligations under these
              Terms. Except with respect to intellectual property rights, if a
              dispute arises between the parties relating to the interpretation
              or performance of these Terms or the grounds for the termination
              hereof, the parties agree to hold a meeting within fifteen (15)
              days of written request by either party, attended by individuals
              with decision-making authority, regarding the dispute, to attempt
              in good faith to negotiate a resolution of the dispute prior to
              pursuing other available remedies. If, within 15 days after such
              meeting, the parties have not succeeded in resolving the dispute,
              either party may protect its interests by any lawful means
              available to it.
            </p>
            <p>
              <br />
              <strong>13. General provisions</strong>
            </p>
            <p>
              <br />
              <strong>13.1. </strong>
              <strong>Integral Part of Agreement.</strong> All relevant
              agreements and notices regarding the OpenQ SaaS Services shall
              form part of these Terms.
            </p>
            <p>
              <br />
              <strong>13.2. No Third Party Beneficiaries. </strong>This
              Agreement is an agreement between the parties, and confers no
              rights upon either party’s employees, agents, contractors,
              partners of customers or upon any other person or entity.
            </p>
            <p>
              <br />
              <strong>13.3. Undertakings.</strong> The Parties agree to do
              everything necessary to ensure that the terms of this Agreement
              take effect.
            </p>
            <p>
              <br />
              <strong>13.4. Breach. </strong>No breach of any provision of this
              Agreement shall be waived except with the express written consent
              of the party not in breach.
            </p>
            <p>
              <br />
              <strong>13.5. Force Majeure.</strong> Notwithstanding anything to
              the contrary contained herein, no party shall be liable for any
              delays or failures in performance resulting from acts beyond its
              reasonable control including, without limitation, acts of God,
              acts of war or terrorism, shortage of supply, breakdowns or
              malfunctions, interruptions or malfunction of computer facilities,
              or loss of data due to power failures or mechanical difficulties
              with information storage or retrieval systems, labor difficulties
              or civil unrest. Notwithstanding the foregoing, in the event of
              such an occurrence, each party agrees to make a good faith effort
              to perform its obligations hereunder.
            </p>
            <p>
              <br />
              <strong>13.6. Severability</strong>. If a court decides that any
              part of this agreement is invalid or unenforceable for any reason
              the other provisions of the Agreement will continue in effect. If
              any unlawful and/or unenforceable provision would be lawful or
              enforceable if part of it were deleted, that part will be deemed
              to be deleted, and the rest of the provision will continue in
              effect (unless that would contradict the clear intention of the
              parties, in which case the entirety of the relevant provision will
              be deemed to be deleted).
            </p>
            <p>
              <br />
              <strong>13.7. Written Amendments and Waivers</strong>. The parties
              will amend these Terms only by cosigned, written agreement. The
              parties will waive parts of this agreement, if at all, only by a
              written waiver describing the specific terms waived and in what
              particular instance, signed by the party waiving.
            </p>
            <p>
              <br />
              <strong>13.8. Governing Law and Dispute Resolution</strong>. These
              Terms and any dispute or claim arising out of or in connection
              with it or its subject matter or formation shall be governed by
              and construed in accordance with the law of Germany.
            </p>
            <p>
              <br />
              <strong>13.9. </strong>Feedback, questions, or complaints should
              be addressed to: info@openq.dev.
            </p>
            <p>
              <br />
              <strong>13.10. Updates.</strong> OpenQ reserves the right to
              revise these Terms of Use at any time and for any reason. The most
              current and recent version can be found at this page and with the
              date at the top of this page. We expect our users to stay aware of
              these legally binding changes by watching this page for changes.
              Certain elements of these Terms may be superseded by changes in
              the law of our governing jurisdiction as well as by other notices
              found on OpenQ or communicated to our users as per these Terms.
            </p>
          </div>
        </div>
      </main>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Imprint;
