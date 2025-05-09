import './App.css';
import "./index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./SideMenu.css";
import SideMenu from './homeSlideMenu';
import SearchSideMenu from './search';
import haikei from './haikei.svg';

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);
return (
    <div className="App">
      <div className={`fullpage-overlay ${!isOverlayVisible ? "overlay-fade-out" : ""}`} />
      <div
        style={{
          position: 'relative',
          top: 0,
          width: '100%',
          height: '80px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
          
        }}
      ></div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '80px',
          backgroundImage: `url(${haikei})`,
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
          borderColor: "green",
          borderBottomWidth: "10px",
          borderTopWidth: "0px",
          borderLeftWidth: "0px",
          borderRightWidth: "0px",
          borderStyle: "double",
        }}
      >
        <Link className="headerLinks" to="/" style={{ color: 'white'}}><img className="logo" src="./uprmlogo.ico" alt="logo"></img></Link>
        <Link className="headerLinks" to="/" style={{ color: 'white'}}>Home</Link>
        <Link className="headerLinks" to="/about" style={{ color: 'white', marginLeft: '20px'}}>About Us</Link>
        <a className="headerLinks" href="https://www.quora.com/Is-there-one-word-for-not-yet" style={{ color: 'white', marginLeft: '20px'}}>Teams</a>
        <SideMenu />
        <SearchSideMenu />
      </div>

      <div style={{ position: 'relative', width: '100%', height: '56%', overflow: 'hidden', marginLeft: "0px"}}>
        <video
          autoPlay
          loop
          muted
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
            position: 'absolute',
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            zIndex: 0,
            left: "10px",
            borderTopWidth: "0px",
            borderLeftWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "10px",
            borderColor: "green",
            borderStyle: "double",
          }}
        >
          <source src="/asset.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '500px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1
          }}
        />

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
          <p className="play-regular">FROM THE WEST, <br></br></p><p className="play-bold">TO THE TOP.</p>
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            color: 'white',
            textAlign: 'center',
            marginTop: '300px',
            fontSize: '40px',
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
          }}
        >
          {/* "Our Teams" with dynamic opacity */}
          <p className="our-teams" style={{ position: 'relative', marginTop: '200px', marginBottom: '70px' }}>OUR TEAMS</p>
        </div>

        <div className="teams-container">
  <div className="team-item rainbow-six">
    <img src="./rainbow.ico" alt="rainbow" className="overlay-icon" />
    <a href="/teams/rainbow-six">
      <img src="./rainbow.png" alt="Rainbow Six: Siege" className="team-logo z-effect" />
    </a>
  </div>

<div className="divider"></div>

  <div className="team-item rivals">
    <img src="./rivals.ico" alt="rivals" className="overlay-icon" />
    <a href="/teams/rivals">
      <img src="./rivals.png" alt="Marvel Rivals" className="team-logo z-effect" />
    </a>
  </div>

  <div className="divider"></div>

  <div className="team-item overwatch">
    <img src="./over.ico" alt="overwatch" className="overlay-icon" />
    <a href="/teams/rocket-league">
      <img src="./overwatch.png" alt="Overwatch" className="team-logo z-effect" />
    </a>
  </div>

  <div className="divider"></div>

  <div className="team-item rocket-league">
    <img src="./rocket.ico" alt="rocket" className="overlay-icon" />
    <a href="/teams/rocket-league">
      <img src="./rocket.png" alt="Rocket League" className="team-logo z-effect" />
    </a>
  </div>
</div>

  <div className="divider" style={{marginBottom:'300px'}}></div>

<div className="calendar play-bold" style={{fontSize: '90px'}}>
<a href="/calendar" style={{color: 'white', textDecoration:'none'}}>CALENDAR</a>
</div>


        <div className="footer-container">
          <div className="media-footer">
            <hr className="footer-line"/>
            <a href="https://www.quora.com/Is-there-one-word-for-not-yet" target="_blank" rel="noopener noreferrer">
              <img className="footerSmallLogo" src="./discord.png" alt="Discord" />
            </a>
            <a href="https://www.quora.com/Is-there-one-word-for-not-yet" target="_blank" rel="noopener noreferrer">
              <img className="footerSmallLogo" src="./instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.quora.com/Is-there-one-word-for-not-yet" target="_blank" rel="noopener noreferrer">
              <img className="footerSmallLogo" src="./twitch.png" alt="Twitch" />
            </a>
            <a href="https://www.quora.com/Is-there-one-word-for-not-yet" target="_blank" rel="noopener noreferrer">
              <img className="footerSmallLogo" src="./youtube.png" alt="YouTube" />
            </a>
            <a href="https://www.quora.com/Is-there-one-word-for-not-yet" target="_blank" rel="noopener noreferrer">
              <img className="footerSmallLogo" src="./x.png" alt="X" />
            </a>
            <a href="https://www.quora.com/Is-there-one-word-for-not-yet" target="_blank" rel="noopener noreferrer">
              <img className="footerSmallLogo" src="./tiktok.png" alt="TikTok" />
            </a>
            <hr className="footer-line"/>
          </div>

          <img className="footer-logo" src="./footer-logo.png" alt="logo"></img>
          <p>Copyright © UPRM Esports 2025. All Rights Reserved<br></br>University of Puerto Rico - Mayagüez Campus<br></br>eSports Student Organization</p>
        </div>
      </div>
      </div>
  );
}

export default App;
