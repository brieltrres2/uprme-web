import { useEffect, useState } from "react";
import FullFooter from '../components/fullFooter';
import FadeOutEffect from '../components/openEffect';
import SmartLink from '../components/smartLink';
import TopBar from '../components/topBar';
import '../App.css';
import "../index.css";
import "../SideMenu.css";

function ToS() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "Terms of Service - UPRM Esports";
  }, []);

return (
    <><div className="App" style={{ background: 'black' }}>
    <FadeOutEffect />
    <TopBar />
    <SmartLink />


    <div
      style={{
        position: 'relative',
        zIndex: 2,
        color: 'white',
        textAlign: 'center',
        paddingTop: '150px',
        fontSize: '100px',
        fontFamily: "Montserrat, sans-serif",
        fontOpticalSizing: "auto",
        fontWeight: "900",
        fontStyle: "normal",
      }}
    >
      <p className="play-bold" style={{ marginBottom: "50px" }}>TERMS OF SERVICE</p>
    </div>
    <div style={{ color: 'white', fontSize: "20px", fontFamily: "Play, sans-serif", fontWeight: "400", marginLeft: "20%", textAlign: "left", maxWidth: "50%" }}>

      <p>This document governs the use of our website.</p>
      <p>in a legally binding way.</p>
      <p>You must read this document carefully.</p>
      <h2>TERMS OF USE</h2>
      <p>Unless stated otherwise, the terms in this section apply generally when using our website.</p>
      <p>Specific or additional conditions may apply in certain situations and are noted in this document.</p>
      <p>By using our website, you confirm you are older than <strong>13 years</strong> of age.</p>
      <h3>Account registration</h3>
      <p>You can use the service without an account</p>
      <p>You must immediately inform us using the contact details in this document if you believe your personal information, account, or login details have been violated, disclosed, or stolen.</p>
      <h3>Content on the website</h3>
      <p>Unless otherwise noted, all content on our website is owned or provided by us or our licensors.</p>
      <p>This service may feature content inspired by or referencing properties owned by Riot Games, Blizzard Entertainment, Ubisoft, Psyonix/Epic Games, and NetEase. All respective trademarks and copyrighted content are property of their respective owners and used in accordance with their fan content policies where applicable.</p>
      <ul>
        <li>
          <strong>Riot Games (Valorant, League of Legends): </strong>
          <a href="https://www.riotgames.com/en/legal" target="_blank" rel="noopener noreferrer">Legal Jibber Jabber</a>
        </li>
        <li>
          <strong>Blizzard (Overwatch): </strong>
          <a href="https://www.blizzard.com/en-us/legal/dd76b654-f2c4-4aaa-ba49-ca3122de2376/blizzard-video-policy" target="_blank" rel="noopener noreferrer">Blizzard Video Policy</a>
        </li>
        <li>
          <strong>Ubisoft (Rainbow Six): </strong>
          <a href="https://www.ubisoft.com/legal/documents/VideoPolicy/en-INTL" target="_blank" rel="noopener noreferrer">Ubisoft Video Policy</a>
        </li>
        <li>
          <strong>Psyonix (Rocket League): </strong>
          <a href="https://www.epicgames.com/site/en-US/fan-art-policy" target="_blank" rel="noopener noreferrer">Epic Games’ Fan Content Policy</a>
        </li>
        <li>
          <strong>NetEase/Marvel Rivals: </strong>
          <a href="https://unisdk.update.netease.com/html/latest_v21.html" target="_blank" rel="noopener noreferrer">NetEase Terms of Use</a>
        </li>
      </ul>
      <p>We do our best to ensure the content on our website complies with all laws and respects third-party rights. However, this may not always be achievable. <br></br>
        If you believe your rights are being infringed, without prejudice to any legal prerogatives to enforce your rights, please report any issues using the contact details provided in this document.</p>
      <h4>Rights regarding content on our website - All rights reserved</h4>
      <p>We hold and reserve all intellectual property rights for all content.</p>
      <p>You may not use such content in any way that is not necessary or implied for the proper use of the service.</p>
      <p>Specifically, but without limitation, you may not copy, download, share (beyond the limits mentioned below), modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer, assign to third parties, or create derivative works from the content on our website. You also cannot allow any third party to do so through your account or device, even unknowingly.</p>
      <p>Where explicitly stated, you may download, copy, and share some content from our website for personal and non-commercial use, provided you correctly implement copyright and other required attributions.</p>
      <p>Any statutory limitations or exceptions to copyright remain unaffected.</p>
      <h3>Access to external resources</h3>
      <p>Through our website, you may access external resources provided by third parties. You acknowledge and accept that we have no control over these resources and are not responsible for their content or availability.</p>
      <p>Conditions for third-party resources, including any rights granted in their content, are governed by those third parties' terms and conditions or by applicable law.</p>
      <h3>Acceptable use</h3>
      <p>Our website and service may only be used within the scope of what is provided for, under these terms and applicable law.</p>
      <p>You are solely responsible for ensuring your use of our website and service does not violate any laws, regulations, or third-party rights.</p>
      <p>We reserve the right to protect our interests by denying you access to our website or service, terminating contracts, and reporting any misconduct to the appropriate authorities if you are involved in or suspected of the following:</p>
      <ul>
        <li>violating laws, regulations, or these terms;</li>
        <li>infringing on third-party rights;</li>
        <li>significantly impairing our legitimate interests;</li>
        <li>offending us or any third party.</li>
      </ul>
      <h2>LIABILITY AND INDEMNIFICATION</h2>
      <p>We limit our liability as much as legally allowed when executing agreements with you. This means our responsibility for damages is reduced to the maximum extent permitted by law unless explicitly stated otherwise or agreed upon with you.</p>
      <h4>Indemnification</h4>
      <p>You agree to indemnify us and our affiliates, officers, directors, and employees from any claims or demands made by third parties due to or in connection with any culpable violation of these terms or third-party rights related to your use of the service to the extent allowed by law.</p>
      <h4>Limitation of liability</h4>
      <p>Unless explicitly stated otherwise and subject to applicable law, you cannot claim damages against us (or any individual or entity acting on our behalf).</p>
      <p>However, this exclusion does not apply to damages affecting life, health, or physical integrity, damages arising from the breach of significant contractual obligations (such as those necessary to fulfill the contract's purpose), and/or damages resulting from intentional or gross negligence, provided that our website has been used appropriately and correctly by you.</p>
      <p>Unless damages stem from intentional or gross negligence, or they impact life, health, or physical integrity, our liability is limited to typical and foreseeable damages at the time the contract was entered into.</p>
      <h3>US users</h3>
      <h4>Disclaimer of warranties</h4>
      <p>Our website is provided on an “as is” and “as available” basis. When you use our service, you are doing so at your own risk. We explicitly state that we are not making any promises or guarantees, whether they are express, implied, or even required by law. These include assurances about the quality of the service, its suitability for your specific needs, or whether it infringes on anyone else's rights. Please keep in mind that any advice or information you receive from us or through our service does not create any warranties beyond what we have explicitly stated here.</p>
      <p>Additionally, while we strive to provide accurate and reliable content, we cannot guarantee that it is always going to be the case. We do not guarantee that the service will always meet your requirements or be available when you need it. There might be interruptions, or it might not function correctly due to factors beyond our control. While we do our best to keep everything running smoothly, we cannot ensure that the service will be free of harmful elements like viruses. If you choose to download any content from our service, you are assuming the risk, and we are not responsible for any damage it might cause to your devices or data.</p>
      <p>We do not endorse or guarantee any products or services advertised through our service or any links we provide. We are not involved in any transactions between you and third-party providers, so any interactions or agreements you make with them are solely your responsibility.</p>
      <p>Our service might not always be accessible or may not work correctly with your web browser, mobile device, or operating system. While we strive to provide a seamless experience, we cannot guarantee it in every situation. As such, we want to clarify that we cannot be held responsible for any perceived or actual damages that result from issues related to the content, operation, or use of our service.</p>
      <p>While we may have certain exclusions and limitations in our agreement, these may not apply to you depending on the laws of your jurisdiction. Federal law, as well as laws in some states and other jurisdictions, may offer protections that supersede our disclaimers and exclusions. This means that you may have specific legal rights that are not affected by our agreement. It is essential to understand your rights, as they may vary from state to state or country to country. We want to emphasize that any disclaimers or exclusions in our agreement will only be enforced to the extent permitted by applicable law.</p>
      <h4>Limitation of liability</h4>
      <p>To the maximum extent permitted by applicable law, in no event shall we, along with our subsidiaries, affiliates, officers, directors, agents, partners, suppliers, or employees, be liable for:</p>
      <ul>
        <li>any indirect, punitive, incidental, special, consequential, or exemplary damages arising from or related to your use of, or inability to use, the service. This includes damages for loss of profits, goodwill, use, data, or other intangible losses;</li>
        <li>any damage, loss, or injury resulting from hacking, tampering, or unauthorized access to your account or the information within it;</li>
        <li>errors, mistakes, or inaccuracies in the content provided;</li>
        <li>personal injury or property damage resulting from your use of the service;</li>
        <li>unauthorized access to our secure servers or personal information stored therein;</li>
        <li>interruption or cessation of transmission to or from the service;</li>
        <li>bugs, viruses, trojan horses, or similar harmful elements transmitted through the service;</li>
        <li>errors or omissions in any content posted, transmitted, or made available through the service;</li>
        <li>defamatory, offensive, or illegal conduct of any user or third party.</li>
      </ul>
      <p>This limitation of liability section will apply to the fullest extent permitted by law in the applicable jurisdiction whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if you have been advised of the possibility of such damage.</p>
      <p>Please note that in some jurisdictions, the exclusion or limitation of incidental or consequential damages may not be allowed. This means that these limitations or exclusions might not apply to you. You have specific legal rights, which may vary depending on your jurisdiction. The disclaimers, exclusions, and limitations of liability outlined here may not apply to the extent prohibited by applicable law.</p>
      <h4>Indemnification</h4>
      <p>By using and accessing the service, you agree to defend, indemnify, and hold us, our subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees harmless from any claims, damages, losses, liabilities, costs, or expenses, including legal fees, arising from:</p>
      <ul>
        <li>your use of the service, including any data or content you transmit or receive;</li>
        <li>your violation of these terms, including any breach of representations and warranties;</li>
        <li>your violation of third-party rights, such as privacy or intellectual property rights;</li>
        <li>your violation of statutory laws, rules, or regulations;</li>
        <li>any content submitted from your account, including third-party access using username, password, or other security measures, including misleading, false, or inaccurate information;</li>
        <li>your intentional misconduct; or</li>
        <li>any statutory provision by you or your affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees to the extent permitted by law.</li>
      </ul>
      <h2>COMMON PROVISIONS</h2>
      <h3>No waiver</h3>
      <p>Our failure to assert any right or provision under these terms does not waive that right or provision. No waiver will constitute a continuing waiver of such term or any other term.</p>
      <h3>Service interruption</h3>
      <p>To maintain the best service level, we reserve the right to interrupt the service for maintenance, updates, or other changes, with appropriate notification.</p>
      <p>We may suspend or discontinue the service within legal limits. If discontinued, we will assist you in withdrawing personal data and respect your rights regarding continued product use and compensation under applicable law.</p>
      <p>The service may be unavailable due to events beyond our reasonable control, such as infrastructure breakdowns or blackouts.</p>
      <h3>Service reselling</h3>
      <p>You may not reproduce, duplicate, copy, sell, or exploit any part of our website or its service without our express written permission, granted either directly or through a legitimate reselling program.</p>
      <h3>Privacy policy</h3>
      <p>We do not collect any personal data through the use of our website's standard features.</p>
      <h3>Intellectual property rights</h3>
      <p>Without prejudice to any more specific provisions in these terms, all intellectual property rights associated with our website, including copyrights, trademark rights, patent rights, and design rights, are exclusively owned by us or our licensors. These rights are protected by applicable laws and international treaties concerning intellectual property.</p>
      <p>All trademarks, whether nominal or figurative, and any other marks, trade names, service marks, word marks, illustrations, images, or logos associated with our website, are and remain the exclusive property of us or our licensors. These are also protected by applicable laws and international treaties related to intellectual property.</p>
      <h3>Changes to the terms</h3>
      <p>We reserve the right to modify these terms at any time, informing you of any changes.</p>
      <p>Such changes will only affect the relationship with you from the date communicated onwards.</p>
      <p>Your continued use of the service will signify your acceptance of the revised terms. If you do not wish to be bound by the changes, you must stop using the service and terminate the agreement.</p>
      <p>The applicable previous version will govern the relationship prior to your acceptance. You can obtain any previous version from us.</p>
      <p>If legally required, we will notify you in advance of when the modified terms will take effect.</p>
      <h3>Assignment of contract</h3>
      <p>We reserve the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these terms, considering your legitimate interests. Provisions about changes to these terms will apply accordingly.</p>
      <p>You cannot assign or transfer your rights or obligations under these terms without our written permission.</p>
      <h3>Contact</h3>
      <p>All communications regarding the use of our website must be sent using the contact information provided in this document.</p>
      <h3>Severability</h3>
      <p>Invalidity or unenforceability of any provision under applicable law will not affect the validity of other provisions, which will remain in full force and effect.</p>
      <h4>US users</h4>
      <p>Any invalid or unenforceable provision will be interpreted to the extent reasonably required to render it valid, enforceable, and consistent with its original intent. This document constitutes the entire agreement between you and us and supersedes all other communications, including but not limited to prior agreements concerning such subject matter, to the fullest extent permitted by law.</p>
      <h4>EU users</h4>
      <p>If any provision of this document is void, invalid, or unenforceable, we both agree to do our best to find, in an amicable way, an agreement on valid and enforceable provisions. <br></br>
        In case of failure to do so, the void, invalid, or unenforceable provisions will be replaced by the applicable statutory provisions.</p>
      <p>Regardless of the above, the nullity, invalidity, or impossibility of enforcing a particular provision of this document will not nullify the entire agreement, unless the severed provisions are essential for it, or of such importance that we both would not have entered into the contract if we had known that the provision would not be valid, or in cases where the remaining provisions would translate into an unacceptable hardship for you or us.</p>
      <h3>Governing law</h3>
      <p>These terms are governed by the law of the Commonwealth of Puerto Rico.</p>
      <h4>Prevalence of national law</h4>
      <p>However, regardless of the above, if the law of the country that you are based on provides for higher applicable consumer protection standards, such higher standards will prevail.</p>
      <h3>Venue of jurisdiction</h3>
      <p>The jurisdiction over any controversy related to these terms lies with the courts of the place where we are based, as outlined in the relevant section of this document.</p>
      <h4>Exception for consumers in Europe</h4>
      <p>However, regardless of the above, this does not apply if you qualify as a European consumer or if you are a consumer based in the United Kingdom, Switzerland, Norway, or Iceland.</p>
      <h4>UK consumers</h4>
      <p>If you are a consumer based in England and Wales, you may bring legal proceedings related to these terms in the English and Welsh courts. If you are a consumer based in Scotland, you may bring legal proceedings in either the Scottish or the English courts. If you are a consumer based in Northern Ireland, you may bring legal proceedings in either the Northern Irish or the English courts.</p>
      <h4>US users</h4>
      <p>We both agree to waive any right to trial by jury in any court in connection with any action or litigation. <br></br>
        Any claims under these terms shall proceed individually and we both agree not to join in a class action or other proceeding with or on behalf of others.</p>
      <h3>US users</h3>
      <h4>Surviving provisions</h4>
      <p>Our agreement will continue in effect until it is terminated by either our website or you. Upon termination, the provisions contained in this document that by their context are intended to survive termination or expiration will survive, including but not limited to the following:</p>
      <ul>
        <li>your grant of licenses under this document will survive indefinitely;</li>
        <li>your indemnification obligations will survive for a period of five years from the date of termination;</li>
        <li>the disclaimer of warranties and representations, and the stipulations under the section containing indemnity and limitation of liability provisions, will survive indefinitely.</li>
      </ul>
      <h2>DISPUTE RESOLUTION</h2>
      <h3>Online dispute resolution for consumers</h3>
      <p>The European Commission has set up an online platform for alternative dispute resolution, providing an out-of-court solution for resolving disputes arising from online sale and service contracts.</p>
      <p>Therefore, European consumers or consumers based in Norway, Iceland, or Liechtenstein can use this platform to settle disputes arising from online contracts. You can access the platform <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage">via the following link</a>.</p>

    </div>

  </div>
  <FullFooter />
  </>

  );
}


export default ToS;
