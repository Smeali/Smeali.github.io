import logo from "./logo.svg";
import "./App.css";
import "animate.css";
import SplitText from "./components/SplitText";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
          <div class="animate__animated animate__heartBeat animate__delay-3s">
            try dragging me!
          </div>
        </Draggable>

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
