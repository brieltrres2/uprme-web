import React from "react";

const SocialBox = ({ imageUrl, size = 300, backgroundColor }) => {
  return (
    <div
      className="fullscreen-grid"
      style={{
        display: "grid",
        placeItems: "center",
        
      }}
    >
      <div
        className="image-square"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "12px",
          border: "2px solid #ccc",
          backgroundColor: backgroundColor || "transparent",
        }}
      >
        <img
          src={imageUrl}
          alt="Centered"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default SocialBox;
