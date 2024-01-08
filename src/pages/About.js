import React from "react";
import FadeIn from "react-fade-in";
export default function About() {
  return (
    <div className="content">
      <FadeIn delay={500}>
        <h1 className="title">About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          incidunt praesentium, rerum voluptatem in reiciendis officia harum
          repudiandae tempore suscipit ex ea, adipisci ab porro.
        </p>
      </FadeIn>
    </div>
  );
}
