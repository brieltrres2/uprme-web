import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./SideMenu.css"; 

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
      className="menu-btn" onClick={toggleMenu}> <i className="material-icons" style={{ width: '20px', height: '20px' }}>menu</i></button>

      {isVisible && (
        <div
          className={`overlay ${isOpen ? "show" : ""}`}
          onClick={closeMenu} 
        />
      )}

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <hr className="menu-line" />
        <Link className="menu-element" to="/" >HOME</Link>
        <Link className="menu-element" to="/teams">TEAMS</Link>
        <Link className="menu-element" to="/about">ABOUT US</Link>
      </div>
      <div className="menu-media-header-wrapper">
  </div>
    </>
  );
}

export default SideMenu;
