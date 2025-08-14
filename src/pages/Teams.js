import { useEffect, useState } from "react";
import FullFooter from '../components/fullFooter';
import FadeOutEffect from '../components/openEffect';
import SmartLink from '../components/smartLink';
import TopBar from '../components/topBar';
import '../App.css';
import "../index.css";
import "../SideMenu.css";

function Teams() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "Our Teams - UPRM Esports";
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
      <p className="play-bold" style={{ marginBottom: "50px" }}>OUR TEAMS</p>
    </div>
{/*
<div classname="stripe-teams-container">

  <div className="stripe-item rainbow-six">
    <a href="/teams/rainbow-six-siege">
      <img src="./stripe-r6s.jpg" alt="Rainbow Six: Siege" style={{width:'50%'}} />
    </a>
  </div>



</div>
*/}
  </div>
  <FullFooter />
  </>

  );
}



export default Teams;
