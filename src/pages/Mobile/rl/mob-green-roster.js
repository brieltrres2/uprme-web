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
import MobTopBar from "../../../components/mobTopBar";
import MobPlayerPortrait from "../../../components/mob-player-item";
import MobFooter from "../../../components/mobileFooter";

const players = [
    { user: "MEESTERFEESH", title: "Captain" },
    { user: "BREADNWATER", title: "Player" },
    { user: "SAUCYREXY", title: "Manager" },
    { user: "ELIUCHI", title: "Player" },
    { user: "CRIZ_ZY", title: "Player" },
];

const staff = [
    { user: "MEESTERFEESH", title: "Coach" },
    { user: "SAUCYREXY", title: "Manager" },
];

const titleIcons = {
    Player: "/player.svg",
    Captain: "/captain.svg",
    Coach: "/coach.svg",
    Manager: "/manager.svg",
};


function MobRLGreen() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsOverlayVisible(false);
        }, 1); // fade out instantly
    }, []);

    useEffect(() => {
        document.title = "ROCKET LEAGUE GREEN - UPRM Esports";
    }, []);

    return (
        <>
            <div className="App" style={{ background: "black" }}>
                <div className="divider" style={{ marginTop: "80px" }}></div>
                <FadeOutEffect />
                <MobTopBar />
                <SmartLink />

                <div className="title" style={{display:'flex', justifyContent:"center", backgroundRepeat:"no-repeat", backgroundPosition: 'center 50%',
                    backgroundSize:'1000px', backgroundColor: 'darkgreen'}}>
                    <div className="roster-title-container" style={{marginTop:'20px'}}>
                        <h2 className="teams-h2" style={{fontSize:"30px"}}>MEET</h2>
                        <h1 className="teams-h1" style={{fontSize:"60px"}}>THE ROSTER</h1>
                        <img style={{width:"150px",margin:"10px"}} src='../../../rocketico.png' alt="Rocket League Icon" />
                    </div>
                </div>
            </div>

            <div id="players-section" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <hr style={{ marginTop: "0px", marginBottom: "50px" }}></hr>

                <h1 className="teams-h1" style={{ fontSize:"50px",marginLeft: "40px", textAlign: "left" }}>PLAYERS</h1><br />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px", color: "white", marginLeft: "40px", textAlign: "left", display: "block", marginBottom: "20px" }}>
          <span style={{ fontWeight: "500" }}>LEGEND: </span> <br /><br />
          <img style={{ width: "20px" }} src={titleIcons.Captain} alt="Captain icon" /> - Captain<br />
          <img style={{ width: "20px" }} src={titleIcons.Player} alt="Player icon" /> - Player<br />
          <img style={{ width: "20px" }} src={titleIcons.Coach} alt="Coach icon" /> - Coach<br />
          <img style={{ width: "20px" }} src={titleIcons.Manager} alt="Manager icon" /> - Manager<br />
        </span>

                <div className="mob-portraits-wrapper">
                    <>
                        {players.map(({ user, title }) => (
                            <MobPlayerPortrait
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

                <h1 className="teams-h1" style={{ fontSize:"40px",marginLeft: "40px", textAlign: "left" }}>COACHING & MANAGEMENT</h1>
                <div className="mob-portraits-wrapper">
                    <>
                        {staff.map(({ user, title }) => (
                            <MobPlayerPortrait
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

            <MobFooter />
        </>
    );
}

export default MobRLGreen