import '../App.css';
import "../index.css";
import { Link } from "react-router-dom";
import "../SideMenu.css";
import SideMenu from './sideMenu';
import SearchSideMenu from '../search';
import haikei from '../haikei.svg';

import Footer from './footerTags';

function FullFooter (){

return(
    <> 
       <div className="black" style={{backgroundColor: 'rgba(0, 0, 0, 1)'}}>
         <div className="footer-container"  >

         </div>
                    <Footer />
       </div>
    </>
);
 }
export default FullFooter;