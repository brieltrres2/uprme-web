import { useEffect, useState } from "react";
import FullFooter from "../../../components/fullFooter";
import FadeOutEffect from "../../../components/openEffect";
import SmartLink from "../../../components/smartLink";
import TopBar from "../../../components/topBar";
import '../../../App.css';
import "../../../index.css";
import "../../../SideMenu.css";
import txtr from "../../../txtr.svg";
import PlayerPortrait from "../../../components/player-item";
import { Navigate } from "react-router-dom";
import coverPhoto from '../../../rivalsCover.webp';

const players = [
  { user: "SAYO", title: "Captain" },
  { user: "CARNEFRITA456", title: "Player" },
  { user: "YEUDEEDLE", title: "Player" },
  { user: "WILLTL84", title: "Manager" },
  { user: "CH33SE", title: "Player" },
  { user: "URIERODZ", title: "Player" },
  { user: "ZETA", title: "Player" },
  { user: "POOKYRACOON", title: "Player" },
];

const staff = [
  { user: "SKULLMASTEX", title: "Coach" },
  { user: "WILLTL84", title: "Manager" },
];

const titleIcons = {
  Player: "/player.svg",
  Captain: "/captain.svg",
  Coach: "/coach.svg",
  Manager: "/manager.svg",
};


function MRGreen() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const [roster, setRoster] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1); // fade out instantly
  }, []);

  useEffect(() => {
    document.title = "MARVEL RIVALS GREEN - UPRM Esports";
  }, []);

  useEffect(() => {
    const dragCursor = document.getElementById("dragCursor");
    if (!dragCursor) return;

    const handleMouseEnter = () => (dragCursor.hidden = false);
    const handleMouseMove = (e) => {
      if (!dragCursor.hidden) {
        const offsetX = dragCursor.offsetWidth / 2;
        const offsetY = dragCursor.offsetHeight / 2;
        dragCursor.style.left = `${e.clientX - offsetX}px`;
        dragCursor.style.top = `${e.clientY - offsetY}px`;
      }
    };
    const handleMouseLeave = () => (dragCursor.hidden = true);

    const portraits = document.querySelectorAll(".player-portrait");
    portraits.forEach((p) => {
      p.addEventListener("mouseenter", handleMouseEnter);
      p.addEventListener("mousemove", handleMouseMove);
      p.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      portraits.forEach((p) => {
        p.removeEventListener("mouseenter", handleMouseEnter);
        p.removeEventListener("mousemove", handleMouseMove);
        p.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="App" style={{ background: "black" }}>
        <div className="divider" style={{ marginTop: "80px" }}></div>
        <FadeOutEffect />
        <TopBar />
        <SmartLink />

        <div className="title" style={{
          display: 'flex', justifyContent: "center", backgroundRepeat: "no-repeat", backgroundPosition: 'center 50%',
          backgroundSize: 'cover', backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0) 50%, rgba(0,0,0,0.8)),
      url(${coverPhoto})`, color: "white", padding: "50px"
        }}>
          <div style={{ marginTop: "270px" }}><h2 className="teams-h2">MEET</h2>{" "}
            <h1 className="teams-h1">THE ROSTER</h1>
            <img src='../../../rivalsico.png'></img></div>
        </div>
      </div>


<div id="players-section" style={{ position: 'relative', objectFit: 'cover' }}>

<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', zIndex: 0, pointerEvents: 'none' }}>
<g clip-path="url(#clip0_13_113)" filter="url(#filter0_i_13_113)">
<rect width="1200" height="630" fill="black"/>
<path d="M259.5 496.5L303.5 520L357.5 605.5L359 607.5L377 564.5L204 329L203 327.5L446.5 190.5L300 -1H336.31L491.5 201.5L248 339.5L409.5 559.5L378.5 632.5H341.5L259.5 496.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint0_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M30 612L-0.5 606.5V569.5L32 612.5L30 612Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint1_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M-4 558.5L62 573L81 567.5L68.5 630V634.5H95.5L115.5 528L62 538L-4 526V558.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint2_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M75.5 520L-7.5 479.5V442.5L57 474L75.5 520Z" fill="#1E1E1E" fill-opacity="0.22"/>
<path d="M134 633L162.5 483.5L57 421V407L70.5 395.5L75.5 354L34 381.5L28.5 442.5L132 501L106.5 633H134Z" fill="#1E1E1E" fill-opacity="0.22"/>
<path d="M75.5 520L-7.5 479.5V442.5L57 474L75.5 520Z" stroke="url(#paint3_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M134 633L162.5 483.5L57 421V407L70.5 395.5L75.5 354L34 381.5L28.5 442.5L132 501L106.5 633H134Z" stroke="url(#paint4_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M274 632.5L163 467.5L75 411.5L141.5 438.5L105.5 380.5L182.5 313.5L276 479.5L237.5 467.5L176.5 360L144.5 388L309 632.5H274Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint5_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M400 636.5L433 547L278.5 342.5L549.5 187L552.5 150.5L510.5 196L356.5 -5.5H419.5L500.5 39.5V-5.5H525.5V90.5L419.5 30.5L510.5 150.5L583.5 73L572.5 213.5L324 353L463.5 541L426.5 636.5H400Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint6_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M153 639L171 509.5L255 627L236 647.5H190.5L218 620L182.5 574L161 639H153Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint7_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M35.5 -12.5L175 293.5V-4H146.5V155L68.5 -12.5H35.5Z" fill="#1E1E1E" fill-opacity="0.22"/>
<path d="M-16.5 14L109.5 265.5L146.5 283L1 -12.5L-16.5 14Z" fill="#1E1E1E" fill-opacity="0.22"/>
<path d="M35.5 -12.5L175 293.5V-4H146.5V155L68.5 -12.5H35.5Z" stroke="url(#paint8_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M-16.5 14L109.5 265.5L146.5 283L1 -12.5L-16.5 14Z" stroke="url(#paint9_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M3 448L14.5 381.5L64 327H23L29 291L7 182L5 172L101.5 361L158 309H113L110 314L18 126.5L-7 152V442.5L3 448Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint10_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M207 -14L198.5 307L418.5 177L271 171L253.5 37L244.5 205H309.5L227 254L233 -14H207Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint11_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M261.5 -38L271 40.5L338.5 120.5L285.5 140L398.5 150L277 -1.5L261.5 -38Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint12_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1123.5 634.5L1142.5 618L1202.5 629.5L1123.5 634.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint13_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M739.5 -13L646 92L651 -13H677V14L699.5 -13H739.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint14_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M541.5 -2V94.5L607 10L581 245L770.5 -2H759.5L618 157.5L636.5 -17.5H596L567.5 12V-17.5H541.5V-2Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint15_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M448.5 644.5L493 534L362 365L563.5 240.5L521 305L408 375L524.5 527L476.5 644.5H448.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint16_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1081.5 647.5L1058.5 539L1070 467.5L1085.5 536L1109 402L990.5 523L892 412.5L1127 184L1107.5 245L971.5 377.5L992 399L1120.5 269.5L1136.5 200L1144 288L990.5 441.5L951.5 399L933.5 412.5L990.5 478L1149.5 316L1122 478L1170 510L1117 506.5L1107 562L1170 573.5L1197.5 613.5L1101.5 596L1093 647.5H1081.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint17_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M497 640.5L519.5 579.5L554.5 563.5L532.5 620.5L602 564.5L596 498L711 564.5L690.5 637.5H662L678 582.5L626.5 553L630 580.5L569.5 631L497 640.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint18_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M122 58L78.5 -3L98.5 -3.5L122 58Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint19_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M487 16.5L454.5 -3.5H487V16.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint20_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M717.5 640.5L706.5 608L738 632.5L717.5 640.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint21_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M590.5 638L657 582L644 638H590.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint22_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M823 645L901.5 548L522.5 328.5L440.5 387L585 564L576 467L725 553L758 645L828.5 544.5L855 558.5L786.5 645H823ZM804.5 529.5L766 583.5L745 528L544 408.5L549 474L483.5 396L522.5 367L804.5 529.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint23_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M-6 633V622L49 631.5L-6 633Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint24_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M858 642L939.5 544L668.5 241.5L715.5 249.5L977.5 542L889.5 650.5L858 642Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint25_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1035.5 643L1020.5 569.5L963 640H925L1035.5 508L1061.5 643H1035.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint26_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1210.5 572L1153.5 558L1131.5 519L1210.5 536V572Z" fill="#1E1E1E" fill-opacity="0.22"/>
<path d="M1204 448.5L1193 439.5L1196.5 385.5L1200 382L1204 448.5Z" fill="#1E1E1E" fill-opacity="0.22"/>
<path d="M1210.5 572L1153.5 558L1131.5 519L1210.5 536V572Z" stroke="url(#paint27_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1204 448.5L1193 439.5L1196.5 385.5L1200 382L1204 448.5Z" stroke="url(#paint28_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1207 505L1136.5 468L1169 289.5L1141.5 169L1181.5 126L1202 163.5V229.5L1174 175L1172.5 184.5L1195 291L1189 326L1200.5 327L1202 358.5L1180.5 381.5L1169 446.5L1202 465L1207 505Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint29_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M797.5 -9L550.5 318.5L864.5 497.5L658 260.5V307L723.5 379L594.5 307L832 -9H797.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint30_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1209 127L1163 44L1170 111.5L878.5 398L703.5 205L785.5 182.5L810.5 108L774 153.5L719.5 178.5L860.5 -9.5H874.5L806.5 211.5L763.5 222L878.5 353.5L1143 97.5L1129.5 -26H1156.5L1209 73.5V127Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint31_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M1082.5 -20L1094 71.5L866 305.5L907.5 303L1122.5 84L1107.5 -20H1082.5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint32_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M959 -8L995.5 29.5L909.5 22.5L837.5 274.5L829.5 205L891.5 -9.5L959 -8Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint33_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<path d="M987 -5L1019 27L1053 34.5L914 180.5L940 80.5L985.5 78.5L957.5 45.5L921 47.5L861 275.5L1071.5 64L1064 -9.5L987 -5Z" fill="#1E1E1E" fill-opacity="0.22" stroke="url(#paint34_linear_13_113)" stroke-opacity="0.37" stroke-width="7"/>
<rect x="-80" y="120" width="1291" height="614" fill="url(#paint35_linear_13_113)"/>
</g>
<defs>
<filter id="filter0_i_13_113" x="0" y="0" width="1200" height="634" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="358" operator="erode" in="SourceAlpha" result="effect1_innerShadow_13_113"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="48.85"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_13_113"/>
</filter>
<linearGradient id="paint0_linear_13_113" x1="347.25" y1="-1" x2="347.25" y2="632.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint1_linear_13_113" x1="15.75" y1="569.5" x2="15.75" y2="612.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint2_linear_13_113" x1="55.75" y1="526" x2="55.75" y2="634.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint3_linear_13_113" x1="77.5" y1="354" x2="77.5" y2="633" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint4_linear_13_113" x1="77.5" y1="354" x2="77.5" y2="633" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint5_linear_13_113" x1="192" y1="313.5" x2="192" y2="632.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint6_linear_13_113" x1="431" y1="-5.5" x2="431" y2="636.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint7_linear_13_113" x1="204" y1="509.5" x2="204" y2="647.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint8_linear_13_113" x1="79.25" y1="-12.5" x2="79.25" y2="293.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint9_linear_13_113" x1="79.25" y1="-12.5" x2="79.25" y2="293.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint10_linear_13_113" x1="75.5" y1="126.5" x2="75.5" y2="448" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint11_linear_13_113" x1="308.5" y1="-14" x2="308.5" y2="307" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint12_linear_13_113" x1="330" y1="-38" x2="330" y2="150" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint13_linear_13_113" x1="1163" y1="618" x2="1163" y2="634.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint14_linear_13_113" x1="692.75" y1="-13" x2="692.75" y2="92" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint15_linear_13_113" x1="656" y1="-17.5" x2="656" y2="245" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint16_linear_13_113" x1="462.75" y1="240.5" x2="462.75" y2="644.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint17_linear_13_113" x1="1044.75" y1="184" x2="1044.75" y2="647.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint18_linear_13_113" x1="604" y1="498" x2="604" y2="640.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint19_linear_13_113" x1="100.25" y1="-3.5" x2="100.25" y2="58" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint20_linear_13_113" x1="470.75" y1="-3.5" x2="470.75" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint21_linear_13_113" x1="722.25" y1="608" x2="722.25" y2="640.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint22_linear_13_113" x1="623.75" y1="582" x2="623.75" y2="638" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint23_linear_13_113" x1="671" y1="328.5" x2="671" y2="645" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint24_linear_13_113" x1="21.5" y1="622" x2="21.5" y2="633" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint25_linear_13_113" x1="823" y1="241.5" x2="823" y2="650.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint26_linear_13_113" x1="993.25" y1="508" x2="993.25" y2="643" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint27_linear_13_113" x1="1171" y1="382" x2="1171" y2="572" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint28_linear_13_113" x1="1171" y1="382" x2="1171" y2="572" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint29_linear_13_113" x1="1171.75" y1="126" x2="1171.75" y2="505" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint30_linear_13_113" x1="707.5" y1="-9" x2="707.5" y2="497.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint31_linear_13_113" x1="956.25" y1="-26" x2="956.25" y2="398" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint32_linear_13_113" x1="994.25" y1="-20" x2="994.25" y2="305.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint33_linear_13_113" x1="912.5" y1="-9.5" x2="912.5" y2="274.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint34_linear_13_113" x1="966.25" y1="-9.5" x2="966.25" y2="275.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#255223"/>
</linearGradient>
<linearGradient id="paint35_linear_13_113" x1="565.5" y1="120" x2="565.5" y2="734" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<clipPath id="clip0_13_113">
<rect width="1200" height="630" fill="white"/>
</clipPath>
</defs>
</svg>



        <div style={{ position: 'relative', zIndex: 1 }}>
        <hr style={{ marginTop: "0px", marginBottom: "50px" }}></hr>

        <h1 className="teams-h1" style={{ marginLeft: "40px", textAlign: "left" }}>PLAYERS</h1><br />
        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px", color: "white", marginLeft: "40px", textAlign: "left", display: "block", marginBottom: "20px" }}>
          <span style={{ fontWeight: "500" }}>LEGEND: </span> <br /><br />
          <img style={{ width: "20px" }} src={titleIcons.Captain} alt="Captain icon" /> - Captain<br />
          <img style={{ width: "20px" }} src={titleIcons.Player} alt="Player icon" /> - Player<br />
          <img style={{ width: "20px" }} src={titleIcons.Coach} alt="Coach icon" /> - Coach<br />
          <img style={{ width: "20px" }} src={titleIcons.Manager} alt="Manager icon" /> - Manager<br />
        </span>

        <div className="portraits-wrapper">


          <>


            {players.map(({ user, title }) => (
              <PlayerPortrait
                key={user}
                logo={`${process.env.PUBLIC_URL}/sd/webp/${user.toLowerCase()}.webp`}
                alt={user}
                title={title}
                user={user}
              />
            ))}

          </>
        </div>

        <hr style={{ marginTop: "0px", marginBottom: "100px" }}></hr>

        <h1 className="teams-h1" style={{ marginLeft: "40px", textAlign: "left" }}>COACHING & MANAGEMENT</h1>
        <div className="portraits-wrapper">
          <>
            {staff.map(({ user, title }) => (
              <PlayerPortrait
                key={user}
                logo={`${process.env.PUBLIC_URL}/sd/webp/${user.toLowerCase()}.webp`}
                alt={user}
                title={title}
                user={user}
              />
            ))}
          </>
        </div>
        </div>
      </div>


      <FullFooter />
    </>
  );
}

export default MRGreen;
