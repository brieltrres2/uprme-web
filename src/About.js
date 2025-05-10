import FadeOutEffect from './components/openEffect';
import TopBar from './components/topBar';
import './App.css';
import "./index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";



function About() {
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
     
  <div
    style={{
      position: 'absolute',
      top: 0, left: 0,
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
   <p className="p2">MADE TO CONQUER</p>
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
  );
}

export default About;
