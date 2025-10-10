import { Routes, Route } from "react-router-dom";
import Home from "../pages/Desktop/Home";
import About from "../pages/Desktop/About";
import ToS from "../pages/Desktop/ToS";
import NotFound from "../pages/Desktop/NotFound";
import R6Green from "../pages/Desktop/r6s/green-roster";
import OWGreen from "../pages/Desktop/ow/green-roster";
import MRGreen from "../pages/Desktop/mr/green-roster";
import RLGreen from "../pages/Desktop/rl/green-roster";
import RLWhite from "../pages/Desktop/rl/white-roster";

export default function DesktopRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/teams/rainbow-six-siege/green-roster" element={<R6Green />} />
      <Route path="/teams/overwatch/green-roster" element={<OWGreen />} />
      <Route path="/teams/marvel-rivals/green-roster" element={<MRGreen />} />
      <Route path="/teams/rocket-league/green-roster" element={<RLGreen />} />
      <Route path="/teams/rocket-league/white-roster" element={<RLWhite />} />
      <Route path="/terms-of-service" element={<ToS />} />
    </Routes>
  );
}
