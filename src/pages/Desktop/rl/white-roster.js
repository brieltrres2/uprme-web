import { useEffect, useState } from "react";
<<<<<<< HEAD:src/pages/Desktop/rl/white-roster.js
import FullFooter from "../../../components/fullFooter";
import FadeOutEffect from "../../../components/openEffect";
import SmartLink from "../../../components/smartLink";
import TopBar from "../../../components/topBar";
import '../../../App.css';
import "../../../index.css";
import "../../../SideMenu.css";
import txtr from "../../../txtr.svg";
import bgImage from '../../../txtr2.svg';
import PlayerPortrait from "../../../components/player-item";
import { Navigate } from "react-router-dom";

=======
import FullFooter from "../../components/fullFooter";
import FadeOutEffect from "../../components/openEffect";
import SmartLink from "../../components/smartLink";
import TopBar from "../../components/topBar";
import "../../App.css";
import "../../index.css";
import "../../SideMenu.css";
import txtr from "../../txtr3.svg";
import PlayerPortrait from "../../components/player-item";
import { Navigate } from "react-router-dom";
import bgImage from '../../txtr4.svg';
>>>>>>> ea097f9e0a1475ee2d18b597edf3ee2a526fed7f:src/pages/rl/white-roster.js

const titleIcons = {
  Player: "/player.svg",
  Captain: "/captain.svg",
  Coach: "/coach.svg",
  Manager: "/manager.svg",
};


function RLWhite() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const [roster, setRoster] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "ROCKET LEAGUE WHITE - UPRM Esports";
  }, []);

  useEffect(() => {
    const dragCursor = document.getElementById("dragCursor");
    if (!dragCursor) return;

    const handleMouseEnter = () => (dragCursor.hidden = false);
    const handleMouseMove = (e) => {
      if (!dragCursor.hidden) {
        const offsetX = dragCursor.offsetWidth / 2;
        const offsetY = dragCursor.offsetHeight / 2;
        dragCursor.style.left = `${e.clientX - offsetX}px`;
        dragCursor.style.top = `${e.clientY - offsetY}px`;
      }
    };
    const handleMouseLeave = () => (dragCursor.hidden = true);

    const portraits = document.querySelectorAll(".player-portrait");
    portraits.forEach((p) => {
      p.addEventListener("mouseenter", handleMouseEnter);
      p.addEventListener("mousemove", handleMouseMove);
      p.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      portraits.forEach((p) => {
        p.removeEventListener("mouseenter", handleMouseEnter);
        p.removeEventListener("mousemove", handleMouseMove);
        p.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="App" style={{ background: "black" }}>
        <div className="divider" style={{ marginTop: "80px" }}></div>
        <FadeOutEffect />
        <TopBar />
        <SmartLink />

        <div className="title" style={{ color: "white", padding: "20px" }}>
          <h2 className="teams-h2">MEET</h2>{" "}
          <h1 className="teams-h1">THE ROSTER</h1>
        </div>
      </div>


     
<div id="players-section" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
  <hr style={{ marginTop: "0px", marginBottom: "50px" }}></hr>

  <h1 className="teams-h1" style={{ marginLeft: "40px", textAlign: "left" }}>PLAYERS</h1><br />
  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px", color: "white", marginLeft: "40px", textAlign: "left", display: "block", marginBottom: "20px" }}>
    <span style={{ fontWeight: "500" }}>LEGEND: </span> <br /><br />
    <img style={{ width: "20px" }} src={titleIcons.Captain} alt="Captain icon" /> - Captain<br />
    <img style={{ width: "20px" }} src={titleIcons.Player} alt="Player icon" /> - Player<br />
    <img style={{ width: "20px" }} src={titleIcons.Coach} alt="Coach icon" /> - Coach<br />
    <img style={{ width: "20px" }} src={titleIcons.Manager} alt="Manager icon" /> - Manager<br />
  </span>

  <div className="portraits-wrapper">
    <>
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Captain"
        name="carnefrita456"
      />
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Player"
        name="yeudeedle"
      />
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Player"
        name="willtl84"
      />
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Player"
        name="ch335ycheese"
      />
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Player"
        name="sammy6352"
      />
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Player"
        name="urierodz"
      />
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Player"
        name="zeta.z"
      />
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Player"
        name="pookyraccoon2"
      />
    </>
  </div>

  <hr style={{ marginTop: "0px", marginBottom: "100px" }}></hr>

  <h1 className="teams-h1" style={{ marginLeft: "40px", textAlign: "left" }}>COACHING & MANAGEMENT</h1>
  <div className="portraits-wrapper">
    <>
      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Coach"
        name="skullmastex"
      />

      <PlayerPortrait
        logo={process.env.PUBLIC_URL + "/overwatch.png"}
        alt="jiffkami"
        title="Manager"
        name="willtl84"
      />
    </>
  </div>
</div>


      <FullFooter />
    </>
  );
}

export default RLWhite;
