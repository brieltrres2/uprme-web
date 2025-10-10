import { useEffect, useState, useRef } from "react";
import '../../App.css';
import "../../index.css";
import "../../SideMenu.css";
import FullFooter from "../../components/fullFooter.jsx";
import FadeOutEffect from "../../components/openEffect.jsx";
import SmartLink from "../../components/smartLink.jsx";
import TopBar from "../../components/topBar.jsx";
import MediaHeader from '../../components/mediaHeader.jsx';
import Footer from '../../components/footerTags.jsx';

function NotFound() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOverlayVisible(false);
        }, 1);
    }, []);

    useEffect(() => {
        document.title = "404 Not Found";
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









return (
    <div>
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
                    <div
                        style={{
                            position: "relative",
                            zIndex: 2,
                            textAlign: "center",
                            paddingTop: "150px",
                            paddingBottom: "150px",
                        }}
                    >
                        <p className="title-2" style={{ fontSize: "180px", color: "gray", fontWeight: "bold" }}>
                            404 <br></br>
                        </p>
                        <p className="title-2" style={{ fontSize: "30px", marginBottom: "40px" }}>We can't find the page you're looking for.</p>
                        <p className="title-2" style={{ color: "gray", fontWeight: 600, fontSize: "20px", fontStyle: "oblique" }}>Tarzan searched far and wide :(</p>
                    </div>
                </div>
            </div>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    padding: "10px 20px",
                    fontSize: "20px",
                    borderRadius: "10px",
                    backgroundColor: hovered ? "#064e04" : "darkgreen",
                    border: "solid 2px lime",
                    color: "white",
                    cursor: "pointer",
                    marginBottom: "100px",
                    transition: "background-color 0.3s ease",
                }}
            >
                <SmartLink
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "20px",
                        position: "relative",
                        zIndex: 10,
                        gap: "8px",
                        textDecoration: "none",
                    }}
                >
                    <i style={{
                        fontFamily: "Material Icons",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "20px",
                        fontStyle: "normal",
                    }} >
                        arrow_back</i>
                    <span className="hoverText" style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "20px"
                    }}>Back Home</span>
                </SmartLink>
            </button>
        </div>
        <div>
            <FullFooter />
        </div>
    </div>
);
}

export default NotFound;
