import React, { useState, useEffect } from "react";
import "./App.css"; // Assuming the styles are in App.css

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  // Use effect to trigger the fade-out effect when the page is loaded
  useEffect(() => {
    // After 2 seconds, start the fade-out transition
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 2000); // Fade out after 2 seconds
  }, []);

  return (
    <div className="App">
      {/* Full page overlay */}
      <div className={`fullpage-overlay ${!isOverlayVisible ? "overlay-fade-out" : ""}`} />

      {/* Rest of your page content */}
      <div>
        <h1>Welcome to the page!</h1>
        <p>Some other content here...</p>
      </div>
    </div>
  );
}

export default App;
