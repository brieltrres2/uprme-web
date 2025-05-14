import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./SideMenu.css"; // Make sure this is your correct stylesheet
import SideMenu from './components/homeSlideMenu';  // Import your original side menu

function SearchSideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10); // Small delay to ensure transition
  };

const closeMenu = () => {
  setIsOpen(false); // Start fade-out
  // Delay unmount until transition ends
  setTimeout(() => {
    setIsVisible(false);
  }, 300); // Must match your CSS transition duration (0.3s)
};


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here, e.g., filter data
    console.log("Searching for: ", searchQuery);
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
  className="search-menu-btn" 
 onClick={toggleMenu}
>
  <i 
    className="material-icons" 
    style={{ marginRight: '20px', width: '30px', height: '30px' }}
  >
    search
  </i>
</button>



      {isVisible && (
        <div
          className={`overlay ${isOpen ? "show" : ""}`}
          onClick={closeMenu}
        />
      )}

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <hr className="menu-line" />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            style={{
              fontSize: '16px',
              width: '100%',
              margin: '20px 0',
              border: 'none',
              borderRadius: '5px',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchSideMenu;
