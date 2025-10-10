import { useEffect, useState, useRef } from "react";
import '../../App.css';
import "../../index.css";
import "../../SideMenu.css";
import FullFooter from "../../components/fullFooter.jsx";
import FadeOutEffect from "../../components/openEffect.jsx";
import SmartLink from "../../components/smartLink.jsx";
import TopBar from "../../components/topBar.jsx";
import TeamItem from "../../components/team-item.jsx";

function Home() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1);
  }, []);

  useEffect(() => {
    document.title = "HOME - UPRM Esports";
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      const bg = document.querySelector(".about-parallax");
      if (bg) {
        bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setTitleVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const [activeTeam, setActiveTeam] = useState(null);

  const teams = [
    {
      id: "rainbow",
      icon: "./rainbow.ico",
      logo: "./rainbow.png",
      alt: "Rainbow Six: Siege",
      btn1Link: "/teams/rainbow-six-siege/green-roster",
      btn1Text: "Green Team",
    },
    {
      id: "rivals",
      icon: "./rivals.ico",
      logo: "./rivals.png",
      alt: "Marvel Rivals",
      btn1Link: "/teams/marvel-rivals/green-roster",
      btn1Text: "Green Team",
    },
    {
      id: "overwatch",
      icon: "./over.ico",
      logo: "./overwatch.png",
      alt: "Overwatch",
      btn1Link: "/teams/overwatch/green-roster",
      btn1Text: "Green Team",
    },
    {
      id: "rocket",
      icon: "./rocket.ico",
      logo: "./rocket.png",
      alt: "Rocket League",
      btn1Link: "/teams/rocket-league/green-roster",
      btn1Text: "Green Team",
      btn2Link: "/teams/rocket-league/white-roster",
      btn2Text: "White Team",
    },
  ];









  return (
    <div
      className="App"
      style={{ background: "linear-gradient(to top, #000001, #1d1d1d)" }}
    >
      <FadeOutEffect />
      <TopBar />
      <SmartLink />
      <div className="divider" style={{ marginTop: "80px" }}></div>
      <div style={{ position: "relative", width: "100%", height: "56%" }}>
        <div>
          <video autoPlay loop muted playsInline className="cutscene">
            <source src="/asset.mp4" type="video/mp4" />
          </video>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              paddingTop: "150px",
              paddingBottom: "150px",
            }}
          >
            <p className="title-1">
              FROM THE WEST, <br></br>
            </p>
            <p className="title-2">TO THE TOP.</p>
          </div>
        </div>
      </div>


      <div className="home-about-section">
        <div className="about-parallax"></div>
        <div className="home-about-left">
          <img
            className="home-about-left-img"
            src="./UPRM-LOGO-BORDE-BLANCO.svg"
            alt="bulldog"
          />
          <h1
            ref={titleRef}
            className={`home-about-title ${titleVisible ? "animate" : ""}`}
          >
            ABOUT US
          </h1>
        </div>

        <div className="home-about-right">
          <p className={`home-about-text ${titleVisible ? "animate" : ""}`}>
            UPRM Esports is a collegiate organization with a mission to unite
            gamers, develop skills, and foster a supportive & inclusive
            community. We host tournaments and events that help players grow
            both individually and as a team. Whether you’re aiming to compete or
            just enjoy hanging out with friends, UPRM Esports is your home.
          </p>
          <p className={`to-about ${titleVisible ? "animate" : ""}`}>
            <SmartLink className={`headerLinks to-about ${titleVisible ? "animate" : ""}`} to="/about">Learn More &rarr;</SmartLink>

          </p>
        </div>
      </div>
      <div
        className="full-teams-section"
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            textAlign: "center",
            marginTop: "100px",
            fontSize: "40px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
          }}
        >

          <p
            className="our-teams"
            style={{
              position: "relative",
              marginBottom: "70px",
            }}
          >
            OUR TEAMS
          </p>
        </div>

        <div className="teams-container">
      {teams.map((team, index) => (
        <div key={team.id}>
          <TeamItem
            {...team}
            isActive={activeTeam === team.id}
            onClick={() =>
              setActiveTeam(prev => (prev === team.id ? null : team.id))
            }
          />
          {index < teams.length - 1 && <div className="divider"></div>}
        </div>
  ))}
</div>

    <div className="divider" style={{ marginBottom: "300px" }}></div>


        <FullFooter />
      </div>
    </div>
  );
}

export default Home;
