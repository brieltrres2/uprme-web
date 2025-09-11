import { Link } from "react-router-dom";


export default function TeamItem({
  icon,
  logo,
  alt,
  btn1Link,
  btn1Text,
  btn2Link,
  btn2Text,
  btn3Link,
  btn3Text,
  isActive,
  onClick,
}) {
  return (
    <div
      className="team-item"
      onClick={onClick}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <img src={icon} alt={alt} className="overlay-icon" />
      <img src={logo} alt={alt} className="team-logo" />

      <div className={`team-buttons ${isActive ? "show" : ""}`}>
        <Link to={btn1Link}>
          <button id="btn1" className="team-btn">{btn1Text}</button>
        </Link>
        {btn2Text != null && btn2Link != null && (
          <Link to={btn2Link}>
            <button id="btn2" className="team-btn">{btn2Text}</button>
          </Link>
        )}
          {btn3Text != null && btn3Link != null && (
          <Link to={btn3Link}>
            <button id="btn3" className="team-btn">{btn3Text}</button>
          </Link>
        )}
      </div>
    </div>
  );
}
