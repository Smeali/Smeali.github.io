import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import styled from "styled-components";
import linkedin from "../img/LinkedIn_logo.png";

export default function Navbar() {
  const profileLink = "https://www.linkedin.com/in/eliconley?trk=profile-badge";

  return (
    <Toolbar sx={{ justifyContent: "flex-end" }}>
      <Button size="large" color="inherit">
        Home
      </Button>
      <Button size="large" color="inherit">
        About
      </Button>
      <button
        style={{
          width: 100,
          height: 50,
          backgroundColor: "rgb(255, 244, 176)",
          fontFamily: "Roboto",
          fontSize: 16,
        }}
        className="button-animated"
      >
        CONTACT
      </button>
      <a href={profileLink} target="_blank">
        <img
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
          }}
          src={linkedin}
          className="logo-animated"
          alt="LinkedIn-logo"
        />
      </a>
    </Toolbar>
  );
}
