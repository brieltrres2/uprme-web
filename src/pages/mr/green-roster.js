import { useEffect, useState } from "react";
import FullFooter from '../../components/fullFooter';
import FadeOutEffect from '../../components/openEffect';
import SmartLink from '../../components/smartLink';
import TopBar from '../../components/topBar';
import '../../App.css';
import "../../index.css";
import "../../SideMenu.css";
import txtr from '../../txtr.svg';
import PlayerPortrait from "../../components/player-item";

function MRGreen() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

const [roster, setRoster] = useState([]);

    
  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "MARVEL RIVALS GREEN - UPRM Esports";
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
    <><div className="App" style={{ background: 'black' }}>
    <div className="divider" style={{ marginTop: "80px" }}></div>
    <FadeOutEffect />
    <TopBar />
    <SmartLink />


    <div className="title" style={{ color: 'white', padding: '20px' }}>
<h2 className="teams-h2">MEET</h2> <h1 className="teams-h1">THE ROSTER</h1>
</div>
    </div>

<hr style={{ marginTop: "0px", marginBottom: "20px" }}></hr>


  <div className="portraits-wrapper">

      <div id="dragCursor" className="custom-drag-cursor" hidden>
        <svg viewBox="0 0 120 120">
          <path
            d="M0 60C0 26.863 26.863 0 60 0s60 26.863 60 60-26.863 60-60 60S0 93.137 0 60z"
            fill="lime"
          />
          <path
            d="M46 50L36 60l10 10M74 50l10 10-10 10"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </div>

      <>
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 1"
        />  
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 2"
        /> 
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 3"
        /> 
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 4"
        /> 
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 5"
        />  
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 6"
        /> 
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 7"
        /> 
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 8"
        />
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 9"
        /> 
        <PlayerPortrait 
          logo={process.env.PUBLIC_URL + "/overwatch.png"} 
          alt="jiffkami"
          name="PLAYER 10"
        />
      </>

  </div>



  <FullFooter />
  </>

  );
}



export default MRGreen;
