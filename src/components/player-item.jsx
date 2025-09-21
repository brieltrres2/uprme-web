import { useLayoutEffect, useRef } from "react";

function useFitText(max = 20, min = 10) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const resize = () => {
      let size = max;
      el.style.fontSize = size + "px";
      while (el.scrollWidth > el.clientWidth && size > min) {
        size--;
        el.style.fontSize = size + "px";
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [max, min]);

  return ref;
}

export default function PlayerPortrait({ icon, logo, alt, title, name }) {
  const titleIcons = {
    Player: "/player.svg",
    Captain: "/captain.svg",
    Coach: "/coach.svg",
    Manager: "/manager.svg",
  };

  const titleIconSrc = title && titleIcons[title];
  const nameRef = useFitText();

  return (
    <div className="player-portrait">
      {icon && <img src={icon} alt={`${alt} icon`} className="overlay-icon" />}
      {logo && <img src={logo} alt={alt} className="player-photo" />}

      {(titleIconSrc || name) && (
        <div className="player-footer">
          {name && (
            <span ref={nameRef} className="player-name" style={{textAlign: "center", display: "flex", alignItems: "center"}}>
              {titleIconSrc && (
                <img src={titleIconSrc} alt={`${title} icon`} className="title-icon" />
              )}
              {name}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
