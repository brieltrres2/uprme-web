import '../App.css';
import "../index.css";
import { Link } from "react-router-dom";
import "../SideMenu.css";
import SideMenu from './sideMenu';
import SearchSideMenu from '../search';
import haikei from '../haikei.svg';
import footerLogo from '../footer-logo.png';
import heartGif from '../heart.gif';
import MediaHeader from './mediaHeader';
import Footer from './footerTags';

function FullFooter (){

return(
    <> 
       <div className="black" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
         <div className="footer-container"  >
           <MediaHeader />
         </div>
                    <Footer />
       </div>
    </>
);
 }
export default FullFooter;