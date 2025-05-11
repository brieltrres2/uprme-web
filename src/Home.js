import './App.css';
import "./index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./SideMenu.css";
import SideMenu from './homeSlideMenu';
import SearchSideMenu from './search';
import haikei from './haikei.svg';
import FadeOutEffect from './components/openEffect';
import TopBar from './components/topBar';
import SmartLink from './components/smartLink';
import MediaHeader from './components/mediaHeader';
import LegalHeader from './components/legalHeader';


function Home() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);
return (
    <div className="App">
      <FadeOutEffect />
      <TopBar />
      <SmartLink />

      <div style={{ position: 'relative', width: '100%', height: '56%', overflow: 'hidden'}}>
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
            left: "0px",
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
    <a href="/teams/overwatch">
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

<div className="calendar" style={{fontSize: '90px'}}>
<a href="/calendar" style={{textDecoration:'none'}}>CALENDAR</a>
</div>


        <div className="footer-container">
         <MediaHeader />

         <img className="footer-logo" src="./footer-logo.png" alt="logo"></img>
            
              <p>
  Copyright © UPRM Esports 2025. All Rights Reserved<br />
  University of Puerto Rico - Mayagüez Campus<br />
  eSports Student Organization<br />
 made with <img className="heart-gif" src="../heart.gif" alt="heart" /> by <a className='jiffkami' href='https://jiffkami.space'> jiffkami</a>
</p>
              </div>
        </div>
      </div>
  );
}

export default Home;
