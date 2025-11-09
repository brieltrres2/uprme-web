import React from "react";
import SocialBox from "./socialMediaBox";

const SOCIAL_LINKS = {
  instagram: "https://instagram.com/uprmesports",
  twitter: "https://twitter.com/uprmesports",
  discord: "https://discord.gg/CS4g3b8ySP",
  youtube: "https://youtube.com/@uprmesports",
  tiktok: "https://www.tiktok.com/@uprmesports",
  twitch: "https://www.twitch.tv/uprmesports",
};

const SocialGrid = () => {
  const socials = [
    { imageUrl: "./discord.png", backgroundColor: "#5865F2", link: SOCIAL_LINKS.discord },
    { imageUrl: "./twitch.png", backgroundColor: "#9146FF", link: SOCIAL_LINKS.twitch },
    { imageUrl: "./x.png", backgroundColor: "#111", link: SOCIAL_LINKS.twitter },
    { imageUrl: "./instagram.png", backgroundColor: "#e4405f", link: SOCIAL_LINKS.instagram },
    { imageUrl: "./youtube.png", backgroundColor: "#FF0000", link: SOCIAL_LINKS.youtube },
    { imageUrl: "./tiktok.png", backgroundColor: "#000000", link: SOCIAL_LINKS.tiktok },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          width: "80%",
          maxWidth: "1200px",

        }}
      >
        {socials.map((s, index) => (
          <a
            key={index}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
             
            }}
          >
            <SocialBox
              imageUrl={s.imageUrl}
              backgroundColor={s.backgroundColor}
              size={170}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialGrid;
