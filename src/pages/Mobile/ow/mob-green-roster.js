import { useEffect, useState } from "react";
import MobFooter from "../../../components/mobileFooter";
import FadeOutEffect from "../../../components/openEffect";
import SmartLink from "../../../components/smartLink";
import MobTopBar from "../../../components/mobTopBar";
import '../../../App.css';
import "../../../index.css";
import "../../../SideMenu.css";
import bgImage from '../../../txtr2.svg';
import MobPlayerPortrait from "../../../components/mob-player-item";



const players = [
    { user: "THESEABASS", title: "Player" },
    { user: "GABSTER", title: "Player" },
    { user: "GHFTHJHK", title: "Player" },
    { user: "FORESTFORKEY", title: "Player" },
    { user: "CRESCENTIA", title: "Player" },
    { user: "STARLIGHT", title: "Player" },
    { user: "PYNCHIS", title: "Player" },
    { user: "ROLINDO", title: "Player" },
];

const staff = [
    { user: "MOTLEYMAIN", title: "Coach" },
];

const titleIcons = {
    Player: "/player.svg",
    Captain: "/captain.svg",
    Coach: "/coach.svg",
    Manager: "/manager.svg",
};




function MobOWGreen() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsOverlayVisible(false);
        }, 1); // fade out instantly
    }, []);

    useEffect(() => {
        document.title = "OVERWATCH GREEN - UPRM Esports";
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
                        <img style={{width:"150px",margin:"10px"}} src='../../../overico.png' alt="Overwatch Icon" />
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

export default MobOWGreen;