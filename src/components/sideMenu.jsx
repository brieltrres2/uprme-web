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

  const openMenu = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10); 
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
  };


  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
   <>
  <button 
    className="menu-btn" 
    onClick={toggleMenu}
  > 
    <i 
      className="material-icons" 
      style={{ marginTop: '-6px', fontSize: '50px', width: '20px', height: '20px' }}
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
    <div className="menu-element" style={{color:'lime', fontSize:'20px', marginTop:'30px'}}>DIRECTORY</div>
    <hr className="menu-line" />
    <Link className="menu-element" to="/">HOME</Link>
    <Link className="menu-element" to="/about">ABOUT US</Link>
    <Link className="menu-element" to="/about">CONTACT</Link>

    <hr className="menu-line" style={{borderTop: '2px solid #111', marginBottom: '100px'}} /> 

        <div className="menu-element-A" style={{fontWeight:'300',color:'lime', fontSize:'20px', marginTop:'30px'}}>TEAMS</div> 
    <hr className="menu-line" />
        <Link className="menu-element" to="/overwatch">OVERWATCH 2</Link>
    <Link className="menu-element" to="/rocket-league">ROCKET LEAGUE</Link>
    <Link className="menu-element" to="/rainbow-six-siege">RAINBOW SIX: SIEGE</Link>
        <Link className="menu-element" to="/marvel-rivals" style={{marginBottom:'100px'}}>MARVEL RIVALS</Link>

         <hr className="menu-line" style={{borderTop: '2px solid #111', marginBottom: '100px'}} />
        <div className="menu-element-A" style={{fontWeight:'300',color:'lime', fontSize:'20px', marginTop:'30px'}}>SOCIAL MEDIA</div> 
    <hr className="menu-line" />
        <a className="menu-element" href={SOCIAL_LINKS.discord}>DISCORD SERVER</a>
    <a className="menu-element" href={SOCIAL_LINKS.twitch}>TWITCH</a>
        <a className="menu-element" href={SOCIAL_LINKS.twitter}>X</a>
            <a className="menu-element" href={SOCIAL_LINKS.instagram}>INSTAGRAM</a>
                <a className="menu-element" href={SOCIAL_LINKS.youtube}>YOUTUBE</a>
        <a className="menu-element" href={SOCIAL_LINKS.tiktok} style={{marginBottom:'200px'}}>TIKTOK</a>
    
    
  </div>
</div>
</>

  );
}

export default SideMenu;
