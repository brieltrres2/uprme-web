import React, { useEffect } from "react";
import FadeOutEffect from "../../components/openEffect.jsx";
import TopBar from "../../components/topBar.jsx";
import FullFooter from "../../components/fullFooter.jsx";
import ContactUs from "../../components/contactUs.jsx";

function Contact() {
    useEffect(() => {
        document.title = "CONTACT US - UPRM Esports";
    }, []);

    return (
        <div className="App" style={{ background: "#111", minHeight: "100vh" }}>
            <FadeOutEffect />
            <TopBar />

            <div style={{ color: "white", textAlign: "center" }}>
                <ContactUs />
            </div>

            <FullFooter />
        </div>
    );
}

export default Contact;
