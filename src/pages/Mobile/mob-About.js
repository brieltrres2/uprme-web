import React from "react";
import FadeOutEffect from "../../components/openEffect.jsx";
import MobTopBar from "../../components/mobTopBar.jsx";
import FullFooter from "../../components/fullFooter.jsx";
import ContactUs from "../../components/contactUs.jsx";

function MobAbout() {
    return (
        <div className="App" style={{ background: "#111", minHeight: "100vh" }}>
            <FadeOutEffect />
            <MobTopBar />

            <div style={{ color: "white", textAlign: "center" }}>
                <ContactUs />
            </div>

            <FullFooter />
        </div>
    );
}

export default MobAbout;
