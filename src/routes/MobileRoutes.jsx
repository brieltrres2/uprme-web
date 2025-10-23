import { Routes, Route } from "react-router-dom";
import MobHome from "../pages/Mobile/mob-Home";
import MobAbout from "../pages/Mobile/mob-About";
import MobToS from "../pages/Mobile/mob-ToS";
import MobNotFound from "../pages/Mobile/mob-NotFound";
import MobR6Green from "../pages/Mobile/r6s/mob-green-roster";
import MobOWGreen from "../pages/Mobile/ow/mob-green-roster";
import MobMRGreen from "../pages/Mobile/mr/mob-green-roster";
import MobRLGreen from "../pages/Mobile/rl/mob-green-roster";
import MobRLWhite from "../pages/Mobile/rl/mob-white-roster";

export default function MobileRoutes() {
  return (
    <Routes>
      <Route path="*" element={<MobNotFound />} />
      <Route path="/" element={<MobHome />} />
      <Route path="/contact" element={<MobAbout />} />
      <Route path="/teams/rainbow-six-siege/green-roster" element={<MobR6Green />} />
      <Route path="/teams/overwatch/green-roster" element={<MobOWGreen />} />
      <Route path="/teams/marvel-rivals/green-roster" element={<MobMRGreen />} />
      <Route path="/teams/rocket-league/green-roster" element={<MobRLGreen />} />
      <Route path="/teams/rocket-league/white-roster" element={<MobRLWhite />} />
      <Route path="/terms-of-service" element={<MobToS />} />
    </Routes>
  );
}
