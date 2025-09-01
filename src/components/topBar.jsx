import '../App.css';
import "../index.css";
import { useLocation, Link } from "react-router-dom";
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

function TopBar (){

return(
    <><div // black stripe to make space for header

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
        
            <SmartLink to="/"><img className="logo" src="./UPRM-ICON.svg" alt="logo"></img></SmartLink>
            <SmartLink className="headerLinks" to="/" style={{marginLeft: '20px' }}>HOME</SmartLink>
            <SmartLink className="headerLinks" to="/about" style={{marginLeft: '20px' }}>ABOUT</SmartLink>
            <SmartLink className="headerLinks" to="/teams" style={{marginLeft: '20px' }}>TEAMS</SmartLink>
            <SideMenu />
        </div></>

    );
 }
export default TopBar;