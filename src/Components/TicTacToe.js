import React, { useState } from "react";

function TicTacToe() {
  const [turn, setTurn] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [click, setClick] = useState(0);
  const [score, setScore] = useState(0)
  const [score2, setScore2] = useState(0)

  const handleClick = (i) => {
    if (click === 9) {
      const draw = "draw"
      game_reset(draw);
    }
    if (calculateWinner(square) || square[i]) {
      return;
    }
    square[i] = "X"
    setTurn(!turn);
    setClick(click + 1);
  };

  const calculateWinner = (square) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        game_reset();
        return true;
      }
    }
    return null;
  };

  const game_reset = (value) => {
    setSquare(Array(9).fill(null));
    setTurn(true);
    setClick(0);
      if (value !== "draw") {
       turn ? setScore(score + 1) : setScore2(score2 + 1)
      }
  };

  return (
    <>
      <main className="flex h-screen bg-slate-200">
        <div className="m-auto grid h-96 w-96 grid-flow-col grid-rows-3 gap-0.5 text-center text-8xl font-light">
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(0);
            }}
          >
            {square[0]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(1);
            }}
          >
            {square[1]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(2);
            }}
          >
            {square[2]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(3);
            }}
          >
            {square[3]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(4);
            }}
          >
            {square[4]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(5);
            }}
          >
            {square[5]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(6);
            }}
          >
            {square[6]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(7);
            }}
          >
            {square[7]}
          </div>
          <div
            className="border-2 border-solid border-sky-500"
            onClick={() => {
              handleClick(8);
            }}
          >
            {square[8]}
          </div>
        </div>
        <div className="">
          <button className="" onClick={() => { game_reset }}>
            Reset
          </button>
        </div>
      </main>
    </>
  );
}

export default TicTacToe;
