import logo from "./logo.svg";
import linkedin from "./img/LinkedIn_logo.png";
import linkedinshadow from "./img/LinkedIn_logo_shadow.png";
import "./App.css";
import "animate.css";
import SplitText from "./components/SplitText";
import Draggable from "react-draggable";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div
          class="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="eliconley"
          data-version="v1"
        >
          <a
            class="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/eliconley?trk=profile-badge"
          >
            Eli Conley
          </a>
        </div>
        <div>
          <img
            style={{
              width: 50,
              height: 50,
            }}
            src={linkedin}
            className="logo-animated"
            alt="LinkedIn-logo"
          />

          {/* <img
            style={{ width: 50, height: 50 }}
            src={linkedinshadow}
            className="logo-shadow"
          /> */}
        </div>
        <Draggable>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Draggable>
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
      </header>
    </div>
  );
}

export default App;
