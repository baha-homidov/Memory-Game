import React from "react";
import "../assets/styles/Scoreboard.css";

function Scoreboard(props) {
  return (
    <div className="scoreboard-container">
      <div>Current score: {props.currentScore}</div>
      <div>Best score: {props.highestScore }</div>
      <div>Best possible score: 12</div>
    </div>
  );
}

export default Scoreboard;
