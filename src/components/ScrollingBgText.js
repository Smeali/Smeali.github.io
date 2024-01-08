import React from "react";
import "./ScrollingBgText.css";

/* Set width of all animated text to match container */
let parent = document.querySelectorAll(".animate-text");
for (let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px";
}
export default function ScrollingBgText() {
  return (
    <div className="scrolling-bg">
      <div className="bg-text-container">
        <div className="animate-text">
          <span>
            <span className="filled">Welcome</span> to my site&nbsp;
          </span>
          <span>
            <span className="filled">Welcome</span> to my site&nbsp;
          </span>
        </div>
        <div className="animate-text left">
          <span>
            <span className="filled">Welcome</span> to my site&nbsp;
          </span>
          <span>
            <span className="filled">Welcome</span> to my site&nbsp;
          </span>
        </div>
      </div>

      <div className="container">
        <div className="col">
          <h1 className="heading-scroll-bg">Heading</h1>
          <p className="paragraph-scroll-bg">
            Lobortis primis, ultrices? Earum mollis! Ad consequuntur laboriosam
            ut possimus, minus expedita, adipisci fermentum, officia maecenas
            voluptatibus eiusmod, laboriosam maiores aspernatur ad egestas
            tenetur tempora.
          </p>
          <p className="dynamic-words">Test!</p>
        </div>
      </div>
    </div>
  );
}
