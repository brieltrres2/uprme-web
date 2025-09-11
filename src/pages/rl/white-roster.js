import { useEffect, useState } from "react";
import FullFooter from '../../components/fullFooter';
import FadeOutEffect from '../../components/openEffect';
import SmartLink from '../../components/smartLink';
import TopBar from '../../components/topBar';
import '../../App.css';
import "../../index.css";
import "../../SideMenu.css";
import txtr from '../../txtr.svg';

function R6Green() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "ROCKET LEAGUE WHITE - UPRM Esports";
  }, []);

return (
    <><div className="App" style={{ background: 'black' }}>
    <FadeOutEffect />
    <TopBar />
    <SmartLink />


    </div>
  <FullFooter />
  </>

  );
}



export default R6Green;
