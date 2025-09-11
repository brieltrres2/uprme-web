import '../App.css';
import "../index.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../SideMenu.css";
import SideMenu from './sideMenu';
import SearchSideMenu from '../search';
import txtr from '../txtr.svg';
import SmartLink from "./smartLink"


function NavLink({ to, children }) {
    const location = useLocation();

    const handleClick = (e) => {
        if (location.pathname === to) {
            e.preventDefault(); // Already on the page
        }
    };
    return <Link to={to} onClick={handleClick}>{children}</Link>;
}

function TopBar() {

  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
    return (
        <><div 

            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '80px',
                backgroundImage: `url(${txtr})`,
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                borderColor: "#FFFFFF",
                borderBottomWidth: "5px",
                borderTopWidth: "0px",
                borderLeftWidth: "0px",
                borderRightWidth: "0px",
                borderStyle: "solid",
                zIndex: 10,
            }}
        ></div><div
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                zIndex: 10,
            }}
        >

                <SmartLink to="/"><img className="logo" src="/UPRM-ICON.svg" alt="logo"></img></SmartLink>
                <SmartLink className="headerLinks" to="/" style={{ marginLeft: '20px' }}>HOME</SmartLink>
                <SmartLink className="headerLinks" to="/about" style={{ marginLeft: '20px' }}>ABOUT</SmartLink>
                    <div className="dropdown" style={{ marginLeft: "20px" }}>
      <button className="dropbtn headerLinks" onClick={() => setOpen(!open)}>
        TEAMS
      </button>
      {open && (
        <div className="dropdown-content">
          <SmartLink className="headerLinks" to="/teams/marvel-rivals/green-roster">MARVEL RIVALS <br></br> GREEN TEAM</SmartLink>
          <SmartLink className="headerLinks" to="/teams/overwatch/green-roster">OVERWATCH <br></br> GREEN TEAM</SmartLink>
          <SmartLink className="headerLinks" to="/teams/rainbow-six-siege/green-roster">RAINBOW SIX <br></br> GREEN TEAM</SmartLink>
          <SmartLink className="headerLinks" to="/teams/rocket-league/green-roster">ROCKET LEAGUE <br></br> GREEN TEAM</SmartLink>
          <SmartLink className="headerLinks" to="/teams/rocket-league/white-roster">ROCKET LEAGUE <br></br> WHITE TEAM</SmartLink>
          {/* Add more links as needed */}
        </div>
      )}
    </div>
                </div>
                <SideMenu />
            </>

    );
}
export default TopBar;