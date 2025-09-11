import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import ToS from './pages/ToS';
import R6Green from './pages/r6s/green-roster';
import OWGreen from './pages/ow/green-roster';
import MRGreen from './pages/mr/green-roster';
import RLGreen from './pages/rl/green-roster';
import RLWhite from './pages/rl/white-roster';



import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
{/*       <Route path="/teams" element={<Teams />} /> */}
        <Route path="/teams/rainbow-six-siege/green-roster" element={<R6Green />} />
        <Route path="/teams/overwatch/green-roster" element={<OWGreen />} />
        <Route path="/teams/marvel-rivals/green-roster" element={<MRGreen />} />
        <Route path="/teams/rocket-league/green-roster" element={<RLGreen />} />
        <Route path="/teams/rocket-league/white-roster" element={<RLWhite />} />
        
        
        <Route path="/terms-of-service" element={<ToS />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
