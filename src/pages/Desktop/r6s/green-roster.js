import { useEffect, useState } from "react";
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
import coverPhoto from '../../../rainbowCover.png';

const players = [
  { user: "ANGEL", title: "Captain" },
  { user: "RANDOMFISH", title: "Manager" },
  { user: "CHAOS", title: "Player" },
  { user: "FERNI18", title: "Player" },
  { user: "BOBCAT0", title: "Player" },
  { user: "YONI", title: "Player" },
];

const staff = [
  { user: "ANGEL", title: "Coach" },
  { user: "RANDOMFISH", title: "Manager" },
];

const titleIcons = {
  Player: "/player.svg",
  Captain: "/captain.svg",
  Coach: "/coach.svg",
  Manager: "/manager.svg",
};


function OWGreen() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const [roster, setRoster] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "RAINBOW SIX GREEN - UPRM Esports";
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

        <div className="title" style={{display:'flex', justifyContent:"center", backgroundRepeat:"no-repeat", backgroundPosition: 'center 30%',
    backgroundSize: 'cover',backgroundImage:`
      linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8)),
      url(${coverPhoto})`, color: "white", padding: "50px" }}>
          <div style={{marginTop:"270px"}}><h2 className="teams-h2">MEET</h2>{" "}
          <h1 className="teams-h1">THE ROSTER</h1>
          <img src='../../../rainbowico.png' style={{width:"200px"
          }}></img></div>
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


{players.map(({ user, title }) => (
  <PlayerPortrait
    key={user}
    logo={`${process.env.PUBLIC_URL}/rainbowsix-portrait/${user.toLowerCase()}.png`}
    alt={user}
    title={title}
    user={user}
  />
))}

    </>
  </div>

  <hr style={{ marginTop: "0px", marginBottom: "100px" }}></hr>

  <h1 className="teams-h1" style={{ marginLeft: "40px", textAlign: "left" }}>COACHING & MANAGEMENT</h1>
  <div className="portraits-wrapper">
    <>
      {staff.map(({ user, title }) => (
  <PlayerPortrait
    key={user}
    logo={`${process.env.PUBLIC_URL}/rainbowsix-portrait/${user.toLowerCase()}.png`}
    alt={user}
    title={title}
    user={user}
  />
))}
    </>
  </div>
</div>


      <FullFooter />
    </>
  );
}

export default OWGreen;
