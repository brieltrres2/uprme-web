export default function PlayerPortrait({ icon, logo, alt, title, name }) {
  const titleIcons = {
    Player: "/player.svg",
    Captain: "/captain.svg",
    Coach: "/coach.svg",
    Manager: "/manager.svg",
  };

  const titleIconSrc = title && titleIcons[title];

  return (
    <div className="player-portrait">
      {icon && <img src={icon} alt={`${alt} icon`} className="overlay-icon" />}
      {logo && <img src={logo} alt={alt} className="player-photo" />}

      {(titleIconSrc || name) && (
        <div className="player-footer">
          {titleIconSrc && (
            <img
              src={titleIconSrc}
              alt={`${title} icon`}
              className="title-icon"
            />
          )}
          {name && <span className="player-name">{name}</span>}
        </div>
      )}
    </div>
  );
}
