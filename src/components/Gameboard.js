import React, { useState, useEffect } from "react";
import "../assets/styles/Gameboard.css";
import Scoreboard from "./Scoreboard";

function Gameboard() {
  const [cardArray, setCardArray] = useState([
    {
      title: "I, robot",
      author: "Isaac Asimov",
      img: "https://covers.openlibrary.org/b/olid/OL16521070M-M.jpg",
      number: 1,
      isClicked: false,
    },
    {
      title: "The Time Machine",
      author: "H. G. Wells",
      img: "https://covers.openlibrary.org/b/olid/OL37044446M-M.jpg",
      number: 2,
      isClicked: false,
    },
    {
      title: "The Invisible Man",
      author: "Isaac Asimov",
      img: "https://covers.openlibrary.org/b/olid/OL1548615M-M.jpg",
      number: 3,
      isClicked: false,
    },
    {
      title: "The Martian",
      author: "Andy Weir",
      img: "https://covers.openlibrary.org/b/olid/OL32815550M-M.jpg",
      number: 4,
      isClicked: false,
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      img: "https://covers.openlibrary.org/b/olid/OL30036715M-M.jpg",
      number: 5,
      isClicked: false,
    },
    {
      title: "The War Of The Worlds",
      author: "H. G. Wells",
      img: "https://covers.openlibrary.org/b/olid/OL10352018M-M.jpg",
      number: 6,
      isClicked: false,
    },
    {
      title: "The Island of Doctor Moreau",
      author: "H. G. Wells",
      img: "https://covers.openlibrary.org/b/olid/OL797411M-M.jpg",
      number: 7,
      isClicked: false,
    },
    {
      title: "Foundation",
      author: "Isaac Asimov",
      img: "https://covers.openlibrary.org/b/olid/OL7431780M-M.jpg",
      number: 8,
      isClicked: false,
    },
    {
      title: "1984",
      author: "George Orwell",
      img: "https://covers.openlibrary.org/b/olid/OL24199103M-M.jpg",
      number: 9,
      isClicked: false,
    },
    {
      title: "The Forever War",
      author: "Joe Haldeman",
      img: "https://covers.openlibrary.org/b/olid/OL9002736M-M.jpg",
      number: 10,
      isClicked: false,
    },
    {
      title: "Do Androids Dream Of Electric Sheel",
      author: "Philip K. Dick",
      img: "https://covers.openlibrary.org/b/olid/OL21419612M-M.jpg",
      number: 11,
      isClicked: false,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      img: "https://covers.openlibrary.org/b/olid/OL6504102M-M.jpg",
      number: 12,
      isClicked: false,
    },
  ]);

  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    shuffleCardArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="gameboard-container">
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
              <img src={item.img} alt="" />
              <div className="book-title">{item.title}</div>
              
              {/* {item.number}
              <div>Is clicked: {item.isClicked ? "true" : "false"}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gameboard;
