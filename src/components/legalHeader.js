import '../App.css';
import "../index.css";
import { Link } from "react-router-dom";
import "../SideMenu.css";
import SideMenu from '../homeSlideMenu';
import SearchSideMenu from '../search';
import haikei from '../haikei.svg';

function LegalHeader (){

return(
    <div className="legal-footer">
            <img className="footer-logo" src="./footer-logo.png" alt="logo"></img>
          <p>Copyright © UPRM Esports 2025. All Rights Reserved<br></br>University of Puerto Rico - Mayagüez Campus<br></br>eSports Student Organization</p>
          </div>
    );
 }
export default LegalHeader;