import { useEffect, useState, useRef } from "react";
import '../../App.css';
import "../../index.css";
import "../../SideMenu.css";
import FullFooter from "../../components/mobileFooter.jsx";
import FadeOutEffect from "../../components/openEffect.jsx";
import SmartLink from "../../components/smartLink.jsx";
import TopBar from "../../components/mobTopBar.jsx";
import TeamItem from "../../components/team-item.jsx";
import SocialGrid from "../../components/socialMediaContainer.jsx";

function RoC() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1);
  }, []);

  useEffect(() => {
    document.title = "RUMBLE OF CHAMPIONS - UPRM Esports";
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

const [registerHover, setRegisterHover] = useState(false);

  const teams = [

    {
      id: "rivals",
      icon: "./rivals.ico",
      logo: "./rivals.png",
      alt: "Marvel Rivals",
      btn1Link: "/teams/marvel-rivals/green-roster",
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

  const stadiumSvg = [<svg viewBox="0 0 15.00 15.00" version="1.1" id="stadium" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00015000000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="path4177" d="M7,1v2v1.5v0.5098C4.1695,5.1037,2.0021,5.9665,2,7v4.5c0,1.1046,2.4624,2,5.5,2s5.5-0.8954,5.5-2V7
	c-0.0021-1.0335-2.1695-1.8963-5-1.9902V4.0625L11,2.75L7,1z M3,8.1465c0.5148,0.2671,1.2014,0.4843,2,0.6328v2.9668
	C3.7948,11.477,3,11.0199,3,10.5V8.1465z M12,8.1484V10.5c0,0.5199-0.7948,0.977-2,1.2461V8.7812
	C10.7986,8.6328,11.4852,8.4155,12,8.1484z M6,8.9219C6.4877,8.973,6.9925,8.9992,7.5,9C8.0073,8.9999,8.5121,8.9743,9,8.9238
	v2.9844C8.5287,11.964,8.0288,12,7.5,12S6.4713,11.964,6,11.9082V8.9219z"></path> </g></svg>]

  /*college svg*/
  const collegeSvg = [
    <svg
      fill="#ffffff"
      viewBox="-1 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      className="cf-icon-svg"
      stroke="#ffffff"
      strokeWidth="0.00019"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM3.024 8.034s-.15.06-.15.155.15.155.15.155l5.117 2.171a1.074 1.074 0 0 0 .73 0l3.1-1.315 2.015-.855a.464.464 0 0 0 .05-.025l.006-.004.016-.01a.148.148 0 0 0 .078-.116c0-.057-.05-.112-.15-.155L8.87 5.863a.922.922 0 0 0-.312-.063h-.053a.969.969 0 0 0-.364.063L3.024 8.034zm8.948 1.853-2.854 1.211a1.699 1.699 0 0 1-1.225 0L5.04 9.887v1.565c0 1.009 1.552 1.826 3.466 1.826s3.467-.817 3.467-1.826zm1.882 1.992a.595.595 0 0 0-1.19 0v.79h1.19zm-.595-1.959a.396.396 0 1 0-.396-.395.396.396 0 0 0 .396.395zm-.396.672a.396.396 0 1 0 .396-.396.396.396 0 0 0-.396.396z"></path>
      </g>
    </svg>
  ]

  /*school svg*/
  const schoolSvg = [
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6.1519V19.3095C3.99197 18.8639 5.40415 18.4 7 18.4C8.58915 18.4 9.9999 18.8602 11 19.3094V6.1519C10.7827 6.02653 10.4894 5.8706 10.1366 5.71427C9.31147 5.34869 8.20352 5 7 5C5.26385 5 3.74016 5.72499 3 6.1519ZM13 6.1519V19.3578C13.9977 18.9353 15.41 18.5 17 18.5C18.596 18.5 20.0095 18.9383 21 19.3578V6.1519C20.2598 5.72499 18.7362 5 17 5C15.7965 5 14.6885 5.34869 13.8634 5.71427C13.5106 5.8706 13.2173 6.02653 13 6.1519ZM12 4.41985C11.7302 4.26422 11.3734 4.07477 10.9468 3.88572C9.96631 3.45131 8.57426 3 7 3C4.69187 3 2.76233 3.97065 1.92377 4.46427C1.30779 4.82687 1 5.47706 1 6.11223V20.0239C1 20.6482 1.36945 21.1206 1.79531 21.3588C2.21653 21.5943 2.78587 21.6568 3.30241 21.3855C4.12462 20.9535 5.48348 20.4 7 20.4C8.90549 20.4 10.5523 21.273 11.1848 21.6619C11.6757 21.9637 12.2968 21.9725 12.7959 21.6853C13.4311 21.32 15.0831 20.5 17 20.5C18.5413 20.5 19.9168 21.0305 20.7371 21.4366C21.6885 21.9075 23 21.2807 23 20.0593V6.11223C23 5.47706 22.6922 4.82687 22.0762 4.46427C21.2377 3.97065 19.3081 3 17 3C15.4257 3 14.0337 3.45131 13.0532 3.88572C12.6266 4.07477 12.2698 4.26422 12 4.41985Z"
          fill="#ffffff"
        ></path>
      </g>
    </svg>
  ]

  /*public svg*/
  const openSvg = [
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      stroke="#ffffff"
      strokeWidth="3.6"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>{`.a{fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;}`}</style>
        </defs>
        <circle className="a" cx="24" cy="24" r="21.5"></circle>
        <path className="a" d="M36,41.84A33.32,33.32,0,0,1,13,5.55"></path>
        <path className="a" d="M2.5,23.65a33.21,33.21,0,0,1,43,0"></path>
        <path className="a" d="M35.1,5.79a34.7,34.7,0,0,1,.27,3.84A33.21,33.21,0,0,1,12,41.82"></path>
      </g>
    </svg>
  ];

  const clockSvg = [<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>]




  return (
    <><div
      className="App"
      style={{ background: "linear-gradient(to top, #000001, #1d1d1d)" }}
    >
      <FadeOutEffect />
      <TopBar />
      <SmartLink />
      <div className="cutscene-container" style={{ position: "relative", height: "101vh", overflow: "hidden", borderBottom: "5px solid lime", }}>
        <video
          className="cutscene-video"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.2)",
            zIndex: 0,
          }}
        >
          <source src="./output.webm" type="video/webm" />
        </video>

        <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
          {/* Side title containers over the background video */}
          <div className="video-title left">
            <div className="type-up" style={{filter:'brightness(0.3)',display: "flex", gap: 6 }}>
              <span style={{ color: "white" }}>RUMBLE</span>
              <span style={{ color: "white" }}>OF</span>
              <span style={{ color: "lime" }}>CHAMPIONS</span>
            </div>
          </div>
          <div className="video-title right">
            <div className="type-down" style={{filter:'brightness(0.3)', display: "flex", gap: 6 }}>
              <span style={{ color: "white" }}>FEBRUARY</span>
              <span style={{ color: "white" }}>28TH</span>
              <span style={{ color: "lime" }}>•</span>
              <span style={{ color: "lime" }}>UPRM</span>
            </div>
          </div>

          {/* Center title container over the background video */}
          <div
            style={{
              whiteSpace: "pre-wrap",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              color: "white",
              textAlign: "center",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: 40, filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.3))", color: "white", display: "block" }}>ALL ROADS</span>
            <span style={{ fontSize: 80, color: "lime", display: "block" }}>TO</span>
            <span style={{ fontSize: 100, filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.3))", color: "white", display: "block" }}>THE WEST</span>
          </div>

          <div className="scroll-indicator">
            <span className="arrow"></span>
            <span className="arrow"></span>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <div style={{ fontFamily: "Montserrat, sans-serif", marginTop: 60, marginBottom: 70, textAlign: "center" }}>
          <h2 style={{ paddingLeft: "20px", textAlign: "left", color: "white", fontSize: 30, fontWeight: "bold" }}>HOW IT WORKS</h2>
        </div>
        {/* Categories label above the centered three containers */}
        <div style={{ fontFamily: "Montserrat, sans-serif", padding: "0 20px" }}>
          <div
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: 40,
              display: "flex",
              textAlign: "center",
              gap: 8,
              justifyContent: "center",
              marginBottom: 16,
              filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.4))",
            }}
          >
            <span>CATEGORIES</span>
            <span style={{ color: "lime" }}>⬎</span>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: 8,
              paddingBottom: 40,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* College */}
            <div
              style={{
                flex: "1 1 0",
                maxWidth: "33.33%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                border: "2px solid lime",
                borderRadius: 12,
                padding: 8,
                background: "rgba(0,0,0,0.4)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {collegeSvg}
              </div>
              <div style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 20, paddingBottom: '30px' }}>COLLEGE</div>
              <p style={{ color: "white", fontSize:17.5}}> Campuses clash for the title. Represent yours with pride.</p>

            </div>

            {/* School */}
            <div
              style={{
                flex: "1 1 0",
                maxWidth: "33.33%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                border: "2px solid lime",
                borderRadius: 12,
                padding: 8,
                background: "rgba(0,0,0,0.4)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {schoolSvg}
              </div>
              <div style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 20, paddingBottom: '20px' }}>SCHOOL</div>
              <p style={{ color: "white", fontSize:16 }}>Open for schools. It's your turn to show your talent and get noticed.</p>
            </div>

            {/* Open */}
            <div
              style={{
                flex: "1 1 0",
                maxWidth: "33.33%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                border: "2px solid lime",
                borderRadius: 12,
                padding: 8,
                background: "rgba(0,0,0,0.4)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {openSvg}
              </div>
              <div style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 20, paddingBottom: '20px' }}>OPEN</div>
              <p style={{ color: "white", fontSize:16 }}> For anybody and everybody. Get in. Compete. Stand Out.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories label above the centered three containers */}
      <div style={{ fontFamily: "Montserrat, sans-serif", padding: "0 20px" }}>
        <div
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: 40,
            display: "flex",
            textAlign: "center",
            gap: 8,
            justifyContent: "center",
            marginBottom: 16,
            filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.4))",
          }}
        >
          
         <span style={{ color: "lime" }}>⬐</span>
         <span>THE TITLES</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 24,
            paddingBottom: 60,
          }}
        >
          {/* Rocket League */}
          <div
            style={{
              flex: "0 1 280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              
              borderRadius: 12,
              padding: 20,
             
              
            }}
          >
            <div style={{ width: 80, height: 'auto', display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="./rocketleague-roc.webp" alt="Rocket League" style={{ width: "160px", height: 'auto', borderRadius:'20px', border:'3px solid lime' }} />
            </div>
            </div>


          {/* Marvel Rivals */}
          <div
            style={{
              flex: "0 1 280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
             
              borderRadius: 12,
              padding: 20,
              
              
            }}
          >
            <div style={{ width: 80, height: 'auto', display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="./rivals-roc.webp" alt="Marvel Rivals" style={{ width: "160px", height: 'auto', borderRadius:'20px', border:'3px solid lime'}} />
            </div>
          
          </div>

        </div>
      </div>
      <div style={{ fontFamily: "Montserrat, sans-serif", padding: "0 20px" }}>
       <div style={{ fontFamily: "Montserrat, sans-serif", padding: "0 20px" }}>
          <div
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: 40,
              display: "flex",
              textAlign: "center",
              gap: 8,
              justifyContent: "center",
              marginBottom: 16,
              filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.4))",
            }}
          >
            <span>THE EVENT</span>
            <span style={{ color: "lime" }}>⭣</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 24,
              paddingBottom: 60,
            }}
          >
            {/* College */}
            <div
              style={{
                flex: "0 1 280px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                border: "2px solid lime",
                borderRadius: 12,
                padding: 20,
                background: "rgba(0,0,0,0.4)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {stadiumSvg}
              </div>
              <a href="https://maps.app.goo.gl/feZ92Bv7kqk6N9vx7" target="_blank" rel="noreferrer"><div style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 20, paddingBottom: '20px' }}><span style={{textDecoration:"underline"}}>RAFAEL A. MANGUAL COLOSSEUM</span>
                <p style={{textDecoration:"none", color:"lime", fontSize:14, paddingTop:'10px'}}>URPM CAMPUS</p></div></a>
              <div style={{ width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {clockSvg}
              </div>
              <p style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 20, paddingBottom: '30px' }}> Saturday, Februrary 28th, 2026<br></br><span style={{color:'lime', fontSize:14}}>DOORS OPEN AT 7am</span></p>

              <p style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 20, paddingBottom: '30px' }}> Top <span style={{color:'lime'}}>2</span> teams of each category earn a pass to the live event.</p>

            </div>
          
            
            </div>
            </div>
            
          <div className="were-ready" style={{marginTop:"20px",marginBottom: "100px"}}>
            <h2 style={{ color: "white", fontSize: 52, fontWeight: "bold",marginTop:'50px', marginBottom: '80px', fontFamily: "Montserrat, sans-serif" }}>WE'RE READY. ARE YOU?</h2>
            <a href="https://www.start.gg/tournament/uprm-esports-rumble-of-champions/details" target="_blank" rel="noopener noreferrer">
              <button 
            
              style={{  
                padding: "35px 50px", 
                fontSize: 24, 
                fontWeight: "bold", 
                color: registerHover ? "black" : "lime", 
                backgroundColor: registerHover ? "lime" : "black", 
                border: "2px solid lime", 
                borderRadius: 8, 
                cursor: "pointer", 
                fontFamily: "Montserrat, sans-serif",
                transition: "background-color 0.3s ease, color 0.3s ease"
              }} 
              onMouseEnter={() => setRegisterHover(true)}
              onMouseLeave={() => setRegisterHover(false)}
              
            >
              REGISTER NOW
            </button>
            </a>
            <p style={{paddingTop:'10px',color:'gray'}}>You will be redirected to <a href="https://www.start.gg" target="_blank" rel="noopener noreferrer">start.gg</a> </p>
          </div>
    </div><FullFooter /></div></>




  );
}

export default RoC;
