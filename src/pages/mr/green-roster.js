import { useEffect, useState } from "react";
import FullFooter from "../../components/fullFooter";
import FadeOutEffect from "../../components/openEffect";
import SmartLink from "../../components/smartLink";
import TopBar from "../../components/topBar";
import "../../App.css";
import "../../index.css";
import "../../SideMenu.css";
import txtr from "../../txtr.svg";
import PlayerPortrait from "../../components/player-item";
import { Navigate } from "react-router-dom";

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

      <hr style={{ marginTop: "0px", marginBottom: "100px" }}></hr>

      <h1 className="teams-h1" style={{marginLeft:"40px", textAlign:"left"}}>PLAYERS</h1>
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
            name="pookyraccoon2"
          />
        </>
      </div>

      <hr style={{ marginTop: "0px", marginBottom: "100px" }}></hr>

      <h1 className="teams-h1" style={{marginLeft:"40px", textAlign:"left"}}>COACHING & MANAGEMENT</h1>
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

      <FullFooter />
    </>
  );
}

export default MRGreen;
