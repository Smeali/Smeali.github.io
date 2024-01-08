import "animate.css";
import KUTE from "kute.js";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  let location = useLocation();
  /* var animateOpacity = KUTE.fromTo(
    "#page-container",
    { opacity: 1 },
    { opacity: 0.1 },
    { offset: 100, duration: 800 }
  ); */

  return (
    <div className="page-container">
      {/*    <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <defs>
          <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stop-color="#001220" stop-opacity="1"></stop>
            <stop offset="80%" stop-color="#001220" stop-opacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
            <stop offset="20%" stop-color="#001220" stop-opacity="1"></stop>
            <stop offset="80%" stop-color="#001220" stop-opacity="1"></stop>
          </linearGradient>
        </defs>
        <g transform="translate(900, 0)">
          <path
            d="M0 378.6C-39.9 348.5 -79.8 318.5 -125.5 303C-171.2 287.6 -222.8 286.8 -263 263C-303.3 239.3 -332.4 192.5 -349.8 144.9C-367.1 97.2 -372.9 48.6 -378.6 0L0 0Z"
            fill="#FBAE3C"
          ></path>
        </g>
        <g transform="translate(0, 600)">
          <path
            d="M0 -378.6C53.5 -376.9 107 -375.2 144.9 -349.8C182.8 -324.3 205.1 -275.1 239 -239C272.9 -202.9 318.5 -180 343.7 -142.4C368.9 -104.7 373.7 -52.4 378.6 0L0 0Z"
            fill="#FBAE3C"
          ></path>
        </g>
      </svg> */}
      <div className="content-wrap">
        <Navbar />
        <Routes location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
