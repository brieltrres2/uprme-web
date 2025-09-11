import { useEffect } from "react";

export default function PlayerPortrait({ icon, logo, alt, name }) {


  return (
    <div className="player-portrait">
      {icon && <img src={icon} alt={`${alt} icon`} className="overlay-icon" />}
      {logo && <img src={logo} alt={alt} className="player-photo" />}
      {name && <div className="headerLinks player-name">{name}</div>}
    </div>
  );
}
