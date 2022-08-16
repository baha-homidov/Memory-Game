import React, { useState } from "react";
import "../assets/styles/Cardgrid.css";
import Scoreboard from "./Scoreboard";

function Cardgrid() {
  const [cardArray, setCardArray] = useState([
    { img: "", number: 1, isClicked: false },
    { img: "", number: 2, isClicked: false },
    { img: "", number: 3, isClicked: false },
    { img: "", number: 4, isClicked: false },
    { img: "", number: 5, isClicked: false },
    { img: "", number: 6, isClicked: false },
    { img: "", number: 7, isClicked: false },
    { img: "", number: 8, isClicked: false },
    { img: "", number: 9, isClicked: false },
    { img: "", number: 10, isClicked: false },
    { img: "", number: 11, isClicked: false },
    { img: "", number: 12, isClicked: false },
    { img: "", number: 13, isClicked: false },
    { img: "", number: 14, isClicked: false },
    { img: "", number: 15, isClicked: false },
    { img: "", number: 16, isClicked: false },
    { img: "", number: 17, isClicked: false },
    { img: "", number: 18, isClicked: false },
  ]);

  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  function shuffleCardArray() {
    let newArr = cardArray;
    newArr = newArr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCardArray(newArr);
  }

  function toggleClicked(index) {
    const newArr = cardArray;
    newArr[index].isClicked = true;
    setCardArray(newArr);
  }

  function updateScore() {
    setCurrentScore(currentScore + 1);
    if (currentScore + 1 > highestScore) {
      setHighestScore(currentScore + 1);
    }
  }

  function restartGame() {
    setCurrentScore(0);
    const newArr = cardArray.map((elem) => {
      elem.isClicked = false;
      return elem;
    });
    setCardArray(newArr);
  }

  function makeMove(e, index) {
    if (cardArray[index].isClicked === true) {
      restartGame();
    } else {
      toggleClicked(index);
      shuffleCardArray();
      updateScore();
    }
  }

  return (
    <div>
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <div className="grid">
        {cardArray.map((item, index) => {
          return (
            <div
              className="card"
              onClick={(e) => {
                makeMove(e, index);
              }}
              key={index}
            >
              {item.number}
              <div>Is clicked: {item.isClicked ? "true" : "false"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cardgrid;
