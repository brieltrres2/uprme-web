import '../App.css';
import "../index.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../mobSideMenu.css";
import SideMenu from './mobSideMenu';
import SearchSideMenu from '../search';
import txtr from '../txtr3.svg';
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

function MobTopBar() {

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
        justifyContent: 'center',
        borderColor: "#FFFFFF",
        borderBottomWidth: "5px",
        borderTopWidth: "0px",
        borderLeftWidth: "0px",
        borderRightWidth: "0px",
        borderStyle: "solid",
        zIndex: 999,
      }}
    >
      <a href="/" style={{ display: 'inline-block' }}>
        <img className="logo" style={{ width: '170px', alignItems: "center" }} src="/LETRAS-UPRM.svg" alt="logo" />
      </a>
    </div>

      <SideMenu />
    </>

  );
}
export default MobTopBar;