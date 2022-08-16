import React from "react";
import "../assets/styles/Title.css";

function Title() {
  return (
    <div className="header-container">
      <div className="title">Memory Game</div>
      <div className="instructions">
        Get points by clicking on an image but don't click on any more than once.
      </div>
    </div>
  );
}

export default Title;
