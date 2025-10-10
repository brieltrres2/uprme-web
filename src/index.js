import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./components/scrollToTop";
import reportWebVitals from "./reportWebVitals";

import useDeviceType from "./routes/useDeviceType";
import DesktopRoutes from "./routes/DesktopRoutes";
import MobileRoutes from "./routes/MobileRoutes";

function AppRouter() {
  const isMobile = useDeviceType();

  return (
    <BrowserRouter>
      <ScrollToTop />
      {isMobile ? <MobileRoutes /> : <DesktopRoutes />}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals