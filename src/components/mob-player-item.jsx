import { useLayoutEffect, useRef } from "react";

function useFitText(max = 17, min = 10) {
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

    const observer = new MutationObserver(resize);
    observer.observe(el, { childList: true, characterData: true, subtree: true });

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [max, min]);

  return ref;
}

export default function MobPlayerPortrait({ icon, logo, alt, title, title2, user }) {
  const titleIcons = {
    Player: "/player.svg",
    Captain: "/captain.svg",
    Coach: "/coach.svg",
    Manager: "/manager.svg",
  };

  const titles = [title, title2].filter(Boolean);
  const userRef = useFitText();

  return (
    <div className="player-portrait" style={{width:"150px",height:"250px"}}>
      {/* Main photo first, to ensure icons overlay it */}
      {logo && <img src={logo} alt={alt} className="player-photo"  />}
      {icon && <img src={icon} alt={`${alt} icon`} className="overlay-icon" />}

      {/* Stack of title icons */}
      {titles.length > 0 && (
        <div className="title-icons-stack">
          {titles.map((t, i) => (
            <img
              key={i}
              src={titleIcons[t]}
              alt={`${t} icon`}
              className="title-icon-small"
            />
          ))}
        </div>
      )}

      {/* Player footer */}
      {user && (
        <div className="player-footer">
          <span ref={userRef} className="player-name">
            {user}
          </span>
        </div>
      )}
    </div>
  );
}
