import '../App.css';
import "../index.css";
import { Link } from "react-router-dom";
import "../SideMenu.css";
import SideMenu from './sideMenu';
import SearchSideMenu from '../search';
import haikei from '../haikei.svg';

function MediaHeader (){

return(
    <div className="media-footer" style={{justifyContent: "center", display: "flex" , marginTop: '10px'}}>
            <a href="https://discord.gg/CS4g3b8ySP" rel="noopener noreferrer">
  <img className="footerSmallLogo" src="/discord.png" alt="Discord" />
</a>
<a href="https://www.instagram.com/uprmesports/" rel="noopener noreferrer">
  <img className="footerSmallLogo" src="/instagram.png" alt="Instagram" />
</a>
<a href="https://www.twitch.tv/uprmesports" rel="noopener noreferrer">
  <img className="footerSmallLogo" src="/twitch.png" alt="Twitch" />
</a>
<a href="https://www.youtube.com/channel/UCNvvXwteEJSxKcllj5VfBuQ" rel="noopener noreferrer">
  <img className="footerSmallLogo" src="/youtube.png" alt="YouTube" />
</a>
<a href="https://x.com/UPRMEsports" rel="noopener noreferrer">
  <img className="footerSmallLogo" src="/x.png" alt="X" />
</a>
<a href="https://www.tiktok.com/@uprmesports" rel="noopener noreferrer">
  <img className="footerSmallLogo" src="/tiktok.png" alt="TikTok" />
</a>
          </div>
    );
 }
export default MediaHeader;