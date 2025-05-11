import '../App.css';
import "../index.css";
import { useLocation, Link } from "react-router-dom";
import "../SideMenu.css";
import SideMenu from '../homeSlideMenu';
import SearchSideMenu from '../search';
import haikei from '../haikei.svg';
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

function TopBar (){

return(
    <><div // black stripe to make space for header

        style={{
            position: 'relative',
            top: 0,
            width: '100%',
            height: '80px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            zIndex: 10,
        }}
    ></div><div
        style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            height: '80px',
            backgroundImage: `url(${haikei})`,
            display: 'flex',
            alignItems: 'center',
            zIndex: 10,
            borderColor: "green",
            borderBottomWidth: "10px",
            borderTopWidth: "0px",
            borderLeftWidth: "0px",
            borderRightWidth: "0px",
            borderStyle: "double",
        }}
    >
        
            <SmartLink to="/"><img className="logo" src="./uprmlogo.ico" alt="logo"></img></SmartLink>
            <SmartLink className="headerLinks" to="/" style={{marginLeft: '20px' }}>Home</SmartLink>
            <SmartLink className="headerLinks" to="/about" style={{marginLeft: '20px' }}>About</SmartLink>
            <SmartLink className="headerLinks" to="/teams" style={{marginLeft: '20px' }}>Teams</SmartLink>
            <SideMenu />
        </div></>

    );
 }
export default TopBar;