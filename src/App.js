import logo from "./logo.svg";
import linkedin from "./img/LinkedIn_logo.png";
import linkedinshadow from "./img/LinkedIn_logo_shadow.png";
import "./App.css";
import "animate.css";
import SplitText from "./components/SplitText";
import Draggable from "react-draggable";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Card,
  CardContent,
  CardMedia,
  Switch,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "./components/Navbar";
import DraggableDialog from "./components/DraggableDialog";

export default function App() {
  // state to manage the dark mode
  //const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem("toggleDarkMode");
    if (data !== null) setToggleDarkMode(JSON.parse(data));
  }, []);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    localStorage.setItem("toggleDarkMode", JSON.stringify(!toggleDarkMode));
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  /*darkTheme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [darkTheme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };*/

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [toggleDarkMode]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Card sx={{ width: "30%", borderRadius: 3, padding: 1 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 180, borderRadius: 3 }}
              image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              title="semaphore"
            />
            <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
              Programming Blogs
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by Semaphore
            </Typography>
            <Typography variant="body1">
              Checkout the latest blogs on Semaphore. Semaphore provides you the
              best CI/CD solution for high-performance engineering teams.
            </Typography>
          </CardContent>
        </Card> */}
        {/* <DraggableDialog toggleDarkMode={toggleDarkMode}></DraggableDialog> */}
        <h1>
          <SplitText copy="Under Construction!" role="heading"></SplitText>
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Typography style={{ marginTop: "65%" }} fontSize="1.2rem">
          Toggle Dark/Light mode
        </Typography>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
      </div>
    </ThemeProvider>
  );
}
