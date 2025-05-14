import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import About from './About';
import ToS from './ToS';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Safe now — inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-of-service" element={<ToS />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
