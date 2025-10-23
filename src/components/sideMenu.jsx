import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../SideMenu.css";
import MediaHeader from "./mediaHeader";

const SOCIAL_LINKS = {
  instagram: "https://instagram.com/uprmesports",
  twitter: "https://twitter.com/uprmesports",
  discord: "https://discord.gg/CS4g3b8ySP",
  youtube: "https://youtube.com/@uprmesports",
  tiktok: "https://www.tiktok.com/@uprmesports",
  twitch: "https://www.twitch.tv/uprmesports",
};

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  const openMenu = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
    document.body.style.overflow = "auto";
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const toggleTeams = () => setTeamsOpen((prev) => !prev);
  const toggleSocial = () => setSocialOpen((prev) => !prev);

  return (
    <>
      <button className="menu-btn" onClick={toggleMenu}>
        <i
          className="material-icons"
          style={{
            marginTop: "-6px",
            fontSize: "50px",
            width: "20px",
            height: "20px",
          }}
        >
          menu
        </i>
      </button>

      {isVisible && (
        <div
          className={`overlay ${isOpen ? "show" : ""}`}
          onClick={closeMenu}
        />
      )}

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          {/* DIRECTORY */}
          <div
            className="menu-element-A"
            style={{ color: "lime", fontSize: "20px", marginTop: "30px" }}
          >
            DIRECTORY
          </div>
          <hr className="menu-line" />
          <Link to="/" style={{margin:"40px"}}>
            <span className="menu-element"> HOME </span>
          </Link>
          <Link to="/contact" style={{margin:"40px"}}>
            <span className="menu-element"> CONTACT US </span>
          </Link>
          <hr
            className="menu-line"
            style={{ borderTop: "2px solid #111", marginBottom: "100px" }}
          />

          {/* TEAMS Dropdown */}
          <div
            className="menu-element-B"
            onClick={toggleTeams}
            style={{
              fontWeight: "300",
              fontSize: "20px",
              marginTop: "30px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            TEAMS
            <i
              className="material-icons"
              style={{ fontSize: "24px", marginLeft: "8px" }}
            >
              {teamsOpen ? "arrow_drop_up" : "arrow_drop_down"}
            </i>
          </div>
          <hr className="menu-line" />
          <div className={`dropdown-links ${teamsOpen ? "open" : ""}`}>
            <Link to="/teams/overwatch/green-roster" style={{margin:"40px"}}>
              <span className="menu-element"> OVERWATCH </span>
            </Link>
            <Link
            
              to="/teams/rocket-league/green-roster" style={{margin:"40px"}}
            >
              <span className="menu-element"> ROCKET LEAGUE GREEN </span>
            </Link>
            <Link
              
              to="/teams/rocket-league/white-roster"style={{margin:"40px"}}
            >
              <span className="menu-element"> ROCKET LEAGUE WHITE </span>
            </Link>
            <Link to="teams/rainbow-six-siege/green-roster" style={{margin:"40px"}}>
              <span className="menu-element"> RAINBOW SIX </span>
            </Link>
            <Link
              className="menu-element"
              to="/teams/marvel-rivals/green-roster"
              style={{ marginBottom: "100px" }}
            >
              <span className="menu-element"> MARVEL RIVALS </span>
            </Link>
          </div>
          <hr
            className="menu-line"
            style={{ borderTop: "2px solid #111", marginBottom: "100px" }}
          />

          {/* SOCIAL MEDIA Dropdown */}
          <div
            className="menu-element-B"
            onClick={toggleSocial}
            style={{
              fontWeight: "300",
              fontSize: "20px",
              marginTop: "30px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            SOCIAL MEDIA
            <i
              className="material-icons"
              style={{ fontSize: "24px", marginLeft: "8px" }}
            >
              {socialOpen ? "arrow_drop_up" : "arrow_drop_down"}
            </i>
          </div>
          <hr className="menu-line" />
          <div className={`dropdown-links ${socialOpen ? "open" : ""}`}>
            <a  href={SOCIAL_LINKS.discord} style={{margin:"40px"}}>
              <span className="menu-element"> DISCORD SERVER </span>
            </a>
            <a  href={SOCIAL_LINKS.twitch} style={{margin:"40px"}}>
              <span className="menu-element"> TWITCH </span>
            </a>
            <a  href={SOCIAL_LINKS.twitter} style={{margin:"40px"}}>
              <span className="menu-element"> X (TWITTER) </span>
            </a>
            <a  href={SOCIAL_LINKS.instagram} style={{margin:"40px"}}>
              <span className="menu-element"> INSTAGRAM </span>
            </a>
            <a  href={SOCIAL_LINKS.youtube} style={{margin:"40px"}}>
             <span className="menu-element"> YOUTUBE </span>
            </a>
            <a
              
              href={SOCIAL_LINKS.tiktok}
              style={{ marginBottom: "200px" }}
            >
              <span className="menu-element"> TIKTOK </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
