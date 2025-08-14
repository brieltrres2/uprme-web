import FadeOutEffect from '../components/openEffect';
import TopBar from '../components/topBar.jsx';
import '../App.css';
import "../index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FullFooter from '../components/fullFooter';



function About() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 1); 
    }, []);

      useEffect(() => {
        document.title = "About Us - UPRM Esports";
      }, []);
    

  return (
    <div className="App" style={{background: '#111'}}>
     <FadeOutEffect />
     <TopBar />

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
   <p className="p2">hi hello this is placeholder :3</p>
  </div>
  <FullFooter />
        </div>

  );
}

export default About;
