import ScrollingBgText from "../components/ScrollingBgText";
import React, { useEffect, useState } from "react";
import Window from "../components/Window";
import FadeIn from "react-fade-in";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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
    <div className="content">
      <FadeIn delay={500}>
        <h1 className="name">Eli Conley</h1>
        <div className="card-blur">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            incidunt praesentium, rerum voluptatem in reiciendis officia harum
            repudiandae tempore suscipit ex ea, adipisci ab porro.
          </p>
        </div>
      </FadeIn>
      {/* <button
        className="button-animated default"
        onClick={() => setOpen(true)}
        style={{
          marginTop: "10%",
          marginBottom: "10%",
        }}
      >
        Open Window
      </button>
      <Window title="My Window" open={open} onClose={handleClose}>
        <p className="window-content">This is the content of the window.</p>
      </Window> */}
    </div>
  );
}
