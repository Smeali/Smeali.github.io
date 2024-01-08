import { useState, useEffect } from "react";
import linkedin from "../img/LinkedIn_logo.png";
import "./Navbar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const profileLink = "https://www.linkedin.com/in/eliconley?trk=profile-badge";

  let path = useLocation().pathname;

  function PartialNavbar() {
    return (
      <>
        <Link to="/" className="site-title">
          Eli Conley
        </Link>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/FunStuff">Fun Stuff</Link>
          </li>
          <button className="button-animated">Contact</button>
          <a href={profileLink} target="_blank" rel="noreferrer">
            <img
              style={{
                width: "3rem",
                height: "3rem",
                marginTop: "0.4rem",
              }}
              src={linkedin}
              className="logo-animated"
              alt="LinkedIn-logo"
            />
          </a>
        </ul>
      </>
    );
  }

  return (
    <>
      {path == "/" ? (
        <nav className="nav slide-out" style={{}}>
          <PartialNavbar />
        </nav>
      ) : (
        <nav className="nav slide-in" style={{}}>
          <PartialNavbar />
        </nav>
      )}
    </>
  );
}
