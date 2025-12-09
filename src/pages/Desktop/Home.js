import { useEffect, useState, useRef } from "react";
import '../../App.css';
import "../../index.css";
import "../../SideMenu.css";
import FullFooter from "../../components/fullFooter.jsx";
import FadeOutEffect from "../../components/openEffect.jsx";
import SmartLink from "../../components/smartLink.jsx";
import TopBar from "../../components/topBar.jsx";
import TeamItem from "../../components/team-item.jsx";
import SocialGrid from "../../components/socialMediaContainer.jsx";

function Home() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1);
  }, []);

  useEffect(() => {
    document.title = "HOME - UPRM Esports";
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      const bg = document.querySelector(".about-parallax");
      if (bg) {
        bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setTitleVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeTeam, setActiveTeam] = useState(null);

  const teams = [
    {
      id: "rainbow",
      icon: "./rainbow.ico",
      logo: "./rainbow.png",
      alt: "Rainbow Six: Siege",
      btn1Link: "/teams/rainbow-six-siege/green-roster",
      btn1Text: "Green Team",
    },
    {
      id: "rivals",
      icon: "./rivals.ico",
      logo: "./rivals.png",
      alt: "Marvel Rivals",
      btn1Link: "/teams/marvel-rivals/green-roster",
      btn1Text: "Green Team",
    },
    {
      id: "overwatch",
      icon: "./over.ico",
      logo: "./overwatch.png",
      alt: "Overwatch",
      btn1Link: "/teams/overwatch/green-roster",
      btn1Text: "Green Team",
    },
    {
      id: "rocket",
      icon: "./rocket.ico",
      logo: "./rocket.png",
      alt: "Rocket League",
      btn1Link: "/teams/rocket-league/green-roster",
      btn1Text: "Green Team",
      btn2Link: "/teams/rocket-league/white-roster",
      btn2Text: "White Team",
    },
  ];









  return (
    <div
      className="App"
      style={{ background: "linear-gradient(to top, #000001, #1d1d1d)" }}
    >
      <FadeOutEffect />
      <TopBar />
      <SmartLink />
      
      <div style={{ position: "relative", width: "100%", height: "56%" }}>
        <div>
          <video autoPlay loop muted playsInline className="cutscene">
            <source src="/asset.mp4" type="video/mp4" />
          </video>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              paddingTop: "150px",
              paddingBottom: "140px",
            }}
          >
            <p className="title-1">
              FROM THE WEST, <br></br>
            </p>
            <p className="title-2">TO THE TOP.</p>
          </div>
        </div>
      </div>
      <div className="rumble-of-champion">
        <p style={{fontSize:"40px",paddingTop:'5px',alignItems: 'center',paddingLeft:'20px'}}><span style={{color:'lime',fontSize:'70px',fontWeight:900}}>RUMBLE OF CHAMPIONS</span><br></br>THE BIGGEST ESPORTS EVENT, <br></br><span style={{fontWeight:500, fontSize:'30px'}}>02.28.2026</span></p>
            <SmartLink to="/rumble-of-champions"><p className="rumble-learn-more">LEARN MORE &gt;</p></SmartLink>
      </div>

      <div className="home-about-section">
        <div className="about-parallax">
          <svg viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9_2)" filter="url(#filter0_i_9_2)">
              <rect width="1200" height="630" fill="#437840" />
              <path d="M259.5 496.5L303.5 520L357.5 605.5L359 607.5L377 564.5L204 329L203 327.5L446.5 190.5L300 -1H336.31L491.5 201.5L248 339.5L409.5 559.5L378.5 632.5H341.5L259.5 496.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M30 612L-0.5 606.5V569.5L32 612.5L30 612Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M-4 558.5L62 573L81 567.5L68.5 630V634.5H95.5L115.5 528L62 538L-4 526V558.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M75.5 520L-7.5 479.5V442.5L57 474L75.5 520Z" fill="#1E1E1E" fill-opacity="0.22" />
              <path d="M134 633L162.5 483.5L57 421V407L70.5 395.5L75.5 354L34 381.5L28.5 442.5L132 501L106.5 633H134Z" fill="#1E1E1E" fill-opacity="0.22" />
              <path d="M75.5 520L-7.5 479.5V442.5L57 474L75.5 520Z" stroke="#52B84E" stroke-width="7" />
              <path d="M134 633L162.5 483.5L57 421V407L70.5 395.5L75.5 354L34 381.5L28.5 442.5L132 501L106.5 633H134Z" stroke="#52B84E" stroke-width="7" />
              <path d="M274 632.5L163 467.5L75 411.5L141.5 438.5L105.5 380.5L182.5 313.5L276 479.5L237.5 467.5L176.5 360L144.5 388L309 632.5H274Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M400 636.5L433 547L278.5 342.5L549.5 187L552.5 150.5L510.5 196L356.5 -5.5H419.5L500.5 39.5V-5.5H525.5V90.5L419.5 30.5L510.5 150.5L583.5 73L572.5 213.5L324 353L463.5 541L426.5 636.5H400Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M153 639L171 509.5L255 627L236 647.5H190.5L218 620L182.5 574L161 639H153Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M35.5 -12.5L175 293.5V-4H146.5V155L68.5 -12.5H35.5Z" fill="#1E1E1E" fill-opacity="0.22" />
              <path d="M-16.5 14L109.5 265.5L146.5 283L1 -12.5L-16.5 14Z" fill="#1E1E1E" fill-opacity="0.22" />
              <path d="M35.5 -12.5L175 293.5V-4H146.5V155L68.5 -12.5H35.5Z" stroke="#52B84E" stroke-width="7" />
              <path d="M-16.5 14L109.5 265.5L146.5 283L1 -12.5L-16.5 14Z" stroke="#52B84E" stroke-width="7" />
              <path d="M3 448L14.5 381.5L64 327H23L29 291L7 182L5 172L101.5 361L158 309H113L110 314L18 126.5L-7 152V442.5L3 448Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M207 -14L198.5 307L418.5 177L271 171L253.5 37L244.5 205H309.5L227 254L233 -14H207Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M261.5 -38L271 40.5L338.5 120.5L285.5 140L398.5 150L277 -1.5L261.5 -38Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M1123.5 634.5L1142.5 618L1202.5 629.5L1123.5 634.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M739.5 -13L646 92L651 -13H677V14L699.5 -13H739.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M541.5 -2V94.5L607 10L581 245L770.5 -2H759.5L618 157.5L636.5 -17.5H596L567.5 12V-17.5H541.5V-2Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M448.5 644.5L493 534L362 365L563.5 240.5L521 305L408 375L524.5 527L476.5 644.5H448.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M1081.5 647.5L1058.5 539L1070 467.5L1085.5 536L1109 402L990.5 523L892 412.5L1127 184L1107.5 245L971.5 377.5L992 399L1120.5 269.5L1136.5 200L1144 288L990.5 441.5L951.5 399L933.5 412.5L990.5 478L1149.5 316L1122 478L1170 510L1117 506.5L1107 562L1170 573.5L1197.5 613.5L1101.5 596L1093 647.5H1081.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M497 640.5L519.5 579.5L554.5 563.5L532.5 620.5L602 564.5L596 498L711 564.5L690.5 637.5H662L678 582.5L626.5 553L630 580.5L569.5 631L497 640.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M122 58L78.5 -3L98.5 -3.5L122 58Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M487 16.5L454.5 -3.5H487V16.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M717.5 640.5L706.5 608L738 632.5L717.5 640.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M590.5 638L657 582L644 638H590.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M823 645L901.5 548L522.5 328.5L440.5 387L585 564L576 467L725 553L758 645L828.5 544.5L855 558.5L786.5 645H823ZM804.5 529.5L766 583.5L745 528L544 408.5L549 474L483.5 396L522.5 367L804.5 529.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M-6 633V622L49 631.5L-6 633Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M858 642L939.5 544L668.5 241.5L715.5 249.5L977.5 542L889.5 650.5L858 642Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M1035.5 643L1020.5 569.5L963 640H925L1035.5 508L1061.5 643H1035.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M1210.5 572L1153.5 558L1131.5 519L1210.5 536V572Z" fill="#1E1E1E" fill-opacity="0.22" />
              <path d="M1204 448.5L1193 439.5L1196.5 385.5L1200 382L1204 448.5Z" fill="#1E1E1E" fill-opacity="0.22" />
              <path d="M1210.5 572L1153.5 558L1131.5 519L1210.5 536V572Z" stroke="#52B84E" stroke-width="7" />
              <path d="M1204 448.5L1193 439.5L1196.5 385.5L1200 382L1204 448.5Z" stroke="#52B84E" stroke-width="7" />
              <path d="M1207 505L1136.5 468L1169 289.5L1141.5 169L1181.5 126L1202 163.5V229.5L1174 175L1172.5 184.5L1195 291L1189 326L1200.5 327L1202 358.5L1180.5 381.5L1169 446.5L1202 465L1207 505Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M797.5 -9L550.5 318.5L864.5 497.5L658 260.5V307L723.5 379L594.5 307L832 -9H797.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M1209 127L1163 44L1170 111.5L878.5 398L703.5 205L785.5 182.5L810.5 108L774 153.5L719.5 178.5L860.5 -9.5H874.5L806.5 211.5L763.5 222L878.5 353.5L1143 97.5L1129.5 -26H1156.5L1209 73.5V127Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M1082.5 -20L1094 71.5L866 305.5L907.5 303L1122.5 84L1107.5 -20H1082.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M959 -8L995.5 29.5L909.5 22.5L837.5 274.5L829.5 205L891.5 -9.5L959 -8Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
              <path d="M987 -5L1019 27L1053 34.5L914 180.5L940 80.5L985.5 78.5L957.5 45.5L921 47.5L861 275.5L1071.5 64L1064 -9.5L987 -5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="#52B84E" stroke-width="7" />
            </g>
            <defs>
              <filter id="filter0_i_9_2" x="0" y="0" width="1200" height="634" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="358" operator="erode" in="SourceAlpha" result="effect1_innerShadow_9_2" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="48.65" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9_2" />
              </filter>
              <clipPath id="clip0_9_2">
                <rect width="1200" height="630" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <div className="home-about-left">
          <img
            className="home-about-left-img"
            src="./UPRM-LOGO-BORDE-BLANCO.svg"
            alt="bulldog"
          />
          <h1
            ref={titleRef}
            className={`home-about-title ${titleVisible ? "animate" : ""}`}
          >
            ABOUT US
          </h1>
        </div>

        <div className="home-about-right">
          <p className={`home-about-text`}>
            UPRM Esports is a collegiate organization with a mission to unite
            gamers, develop skills, and foster a supportive & inclusive
            community. We host tournaments and events that help players grow
            both individually and as a team. Whether you’re aiming to compete or
            just enjoy hanging out with friends, UPRM Esports is your home.
          </p>
        </div>
      </div>
      <div
        className="full-teams-section"
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            textAlign: "center",
            marginTop: "100px",
            fontSize: "40px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
          }}
        >

          <p
            className="our-teams"
            style={{
              position: "relative",
              marginBottom: "70px",
            }}
          >
            OUR TEAMS
          </p>
        </div>

        <div className="teams-container">
          {teams.map((team, index) => (
            <div key={team.id}>
              <TeamItem
                {...team}
                isActive={activeTeam === team.id}
                onClick={() =>
                  setActiveTeam(prev => (prev === team.id ? null : team.id))
                }
              />
              {index < teams.length && <div className="divider"></div>}
            </div>
          ))}
        </div>

        <div className="divider" style={{ marginBottom: "300px" }}></div>


        <div className="our-teams" style={{ color: 'white' }}>FOLLOW US



        </div>
        <SocialGrid />

        <div className="contact-us-section">
          <h2 className="contact-us-title">GET INVOLVED</h2>
          <p className="home-about-right" style={{ justifyContent: "center", fontSize: "30px" }}>
            Have questions or want to learn more? Reach out to us!
          </p>
          <SmartLink to="/contact" className="contact-us-button">
            <span className="home-about-right" style={{ alignItems: "center", textAlign: "center", justifyContent: "center" }}> CONTACT US</span>
          </SmartLink>
        </div>

        <FullFooter />
      </div>
    </div>
  );
}

export default Home;
