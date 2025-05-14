import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../SideMenu.css"; 
import MediaHeader from "./mediaHeader";

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
    <div className="play-regular" style={{color:'white', fontSize:'30px', marginTop:'30px'}}>DIRECTORY</div>
    <hr className="menu-line" />
    <Link className="menu-element" to="/">HOME</Link>
    <Link className="menu-element" to="/about">ABOUT US</Link>
    <Link className="menu-element" to="/about">CONTACT</Link>

    <hr className="menu-line" />
        <div className="menu-element-A" style={{fontWeight:'300',color:'white', fontSize:'30px', marginTop:'30px'}}>TEAMS</div>

    
    
  </div>
</div>
</>

  );
}

export default SideMenu;
