import React from "react";
import "./Window.css"; // Import CSS for styling
import Draggable from "react-draggable";

function Window({ title, open, onClose, children }) {
  return open ? (
    <Draggable handle=".window-header">
      <div className="window">
        <header className="window-header">
          <p>{title}</p>
          <button className="window-close-button" onClick={onClose}>
            <p>×</p>
          </button>
        </header>
        <div className="window-content">{children}</div>
      </div>
    </Draggable>
  ) : null;
}

export default Window;
