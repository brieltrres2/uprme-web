import { useEffect, useState } from "react";
import "../App.css";
import "../SideMenu.css";
import FullFooter from "../components/fullFooter";
import FadeOutEffect from "../components/openEffect";
import SmartLink from "../components/smartLink";
import TopBar from "../components/topBar.jsx";
import "../index.css";

function Home() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "HOME - UPRM Esports";
  }, []);

  return (
    <div
      className="App"
      style={{ background: "linear-gradient(to top, #000001, #1d1d1d)" }}
    >
      <FadeOutEffect />
      <TopBar />
      <SmartLink />
      <div className="divider" style={{ marginTop: "80px" }}></div>
 <div style={{ position: "relative", width: "100%", height: "56%" }}>
        <div> 
          <video autoPlay loop muted className="cutscene">
          <source src="/asset.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            paddingTop: "150px",
            paddingBottom: "150px",
          }}
        >
          <p className="title-1">
            FROM THE WEST, <br></br>
          </p>
          <p className="title-2">TO THE TOP.</p>
        </div>
      </div>
      </div>


<div className="home-about-section" 
    style={{
    paddingTop: '50px',
    color: 'white',
    marginBottom: "200px",

    }}>

<p>ABOUT US</p>
      <p> This is where the about section overview will go. A brief description of the organization will be placed. </p>

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
          <div className="team-item rainbow-six">
            <img src="./rainbow.ico" alt="rainbow" className="overlay-icon" />
            <a href="/teams/rainbow-six-siege">
              <img
                src="./rainbow.png"
                alt="Rainbow Six: Siege"
                className="team-logo z-effect"
              />
            </a>
          </div>

          <div className="divider"></div>

          <div className="team-item rivals">
            <img src="./rivals.ico" alt="rivals" className="overlay-icon" />
            <a href="/teams/marvel-rivals">
              <img
                src="./rivals.png"
                alt="Marvel Rivals"
                className="team-logo z-effect"
              />
            </a>
          </div>

          <div className="divider"></div>

          <div className="team-item overwatch">
            <img src="./over.ico" alt="overwatch" className="overlay-icon" />
            <a href="/teams/overwatch">
              <img
                src="./overwatch.png"
                alt="Overwatch"
                className="team-logo z-effect"
              />
            </a>
          </div>

          <div className="divider"></div>

          <div className="team-item rocket-league">
            <img src="./rocket.ico" alt="rocket" className="overlay-icon" />
            <a href="/teams/rocket-league">
              <img
                src="./rocket.png"
                alt="Rocket League"
                className="team-logo z-effect"
              />
            </a>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: "300px" }}></div>

        <div className="calendar" style={{ fontSize: "30px" }}>
          <a href="/" style={{ marginBottom: "100px", textDecoration: "none" }}>
            PLACE HOLDER <br></br>&#40;can be used for calendar, about us,
            contact, etc&#41; <br></br>
          </a>
        </div>

        <FullFooter />
      </div>
    </div>
  );
}

export default Home;
