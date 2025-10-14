import FadeOutEffect from '../../components/openEffect.jsx';
import TopBar from '../../components/topBar.jsx';
import '../../App.css';
import "../../index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FullFooter from '../../components/fullFooter.jsx';



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
   <p ><span style={{textDecoration: 'underline'}}>PORTIC</span> <br></br> UPRM ESPORTS</p>
   <h6 style={{fontSize: '20px', fontStyle: 'oblique', color: 'rgb(75,75,75)'}}>Portal of Information & Contact</h6>
  </div>
  <div style={{marginTop:'500px'}}>
  
  <FullFooter />
  </div>
        </div>

  );
}

export default About;
