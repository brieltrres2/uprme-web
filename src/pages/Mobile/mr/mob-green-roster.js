import { useEffect, useState } from "react";
import FullFooter from "../../../components/fullFooter";
import FadeOutEffect from "../../../components/openEffect";
import SmartLink from "../../../components/smartLink";
import TopBar from "../../../components/topBar";
import '../../../App.css';
import "../../../index.css";
import "../../../SideMenu.css";
import bgImage from '../../../txtr2.svg';
import PlayerPortrait from "../../../components/player-item";


const players = [
  { user: "SAYO", title: "Captain" },
  { user: "CARNEFRITA456", title: "Player" },
  { user: "YEUDEEDLE", title: "Player" },
  { user: "WILLTL84", title: "Manager" },
  { user: "CH33SE", title: "Player" },
  { user: "URIERODZ", title: "Player" },
  { user: "ZETA", title: "Player" },
  { user: "POOKYRACOON", title: "Player" },
];

const staff = [
  { user: "SKULLMASTEX", title: "Coach" },
  { user: "WILLTL84", title: "Manager"   },
];

const titleIcons = {
  Player: "/player.svg",
  Captain: "/captain.svg",
  Coach: "/coach.svg",
  Manager: "/manager.svg",
};


function MobMRGreen() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "MARVEL RIVALS GREEN - UPRM Esports";
  }, []);

  return (
    <>
      <div className="App" style={{ background: "black" }}>
        <div className="divider" style={{ marginTop: "80px" }}></div>
        <FadeOutEffect />
        <TopBar />
        <SmartLink />

        <div className="title" style={{display:'flex',justifyContent:"center", backgroundColor: '#004d00', color: "white", padding: "50px" }}>
          <div className="roster-title-container"><h2 className="teams-h2">MEET</h2>{" "}
          <h1 className="teams-h1">THE ROSTER</h1>
          <img src='../../../rivalsico.png' alt="Rivals Icon"></img></div>
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
          logo={`${process.env.PUBLIC_URL}/rivals-portrait/${user.toLowerCase()}.png`}
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
          logo={`${process.env.PUBLIC_URL}/rivals-portrait/${user.toLowerCase()}.png`}
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

export default MobMRGreen;
