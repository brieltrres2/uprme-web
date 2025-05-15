import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import ToS from './pages/ToS';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/scrollToTop';

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
