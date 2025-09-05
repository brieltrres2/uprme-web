import { Link } from "react-router-dom";


export default function TeamItem({
  icon,
  logo,
  alt,
  btn1Link,
  btn1Text,
  btn2Link,
  btn2Text,
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
          <button className="team-btn">{btn1Text}</button>
        </Link>
        <Link to={btn2Link}>
          <button className="team-btn">{btn2Text}</button>
        </Link>
      </div>
    </div>
  );
}
