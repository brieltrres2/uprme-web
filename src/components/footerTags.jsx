import '../App.css';
import "../index.css";
import { Link } from "react-router-dom";
import "../SideMenu.css";
import SideMenu from './sideMenu';
import SearchSideMenu from '../search';
import haikei from '../haikei.svg';

function Footer (){

const uprmSeal = 'https://www.uprm.edu/wdt/resources/seal-rum-uprm.svg';

return(
    <>

        <div className="footerXM" >
            <img className='icon-left' src="/UPRM-LOGO.svg" alt="sealUPRME" style={{width:'50px', height:'50px'}}/>
            <p>
                Copyright © UPRM Esports 2025. All Rights Reserved<br />
                University of Puerto Rico - Mayagüez Campus<br />
                eSports Student Organization<br />
                made for UPRM Esports by <a className='jiffkami' href='https://jiffkami.space'> jiffkami</a>
            </p>
            <img className='icon-right' src={uprmSeal} alt="sealUPRM" style={{width:'50px', height:'50px'}} />
        </div>
        <div className="legal-container">
            <Link to="/terms-of-service" className="legal-link" style={{paddingRight: '10px'}}>Terms of Service</Link>
            <div class="white">|</div>
            <Link to="/about" className="legal-link">About Us</Link>
            <div class="white">|</div>
            <Link to="/credits" className="legal-link">Credits</Link>
        </div>
                  <div className="divider"></div>
    </>
);
 }
export default Footer;