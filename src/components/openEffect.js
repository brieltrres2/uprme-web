import React, { useState, useEffect } from "react";
import "../App.css"; 

function FadeOutEffect() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  // Use effect to trigger the fade-out effect when the page is loaded
  useEffect(() => {
    // After 2 seconds, start the fade-out transition
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out time 
  }, []);

  return (
      <div className={`fullpage-overlay ${!isOverlayVisible ? "overlay-fade-out" : ""}`} />
  );
}

export default FadeOutEffect;
