import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import About from './About';
import ToS from './ToS';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-of-service" element={<ToS />} /> 
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
