import React, {useEffect, useState} from "react";

function TicTacToe() {
  const [turn, setTurn] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(""));
  const [click, setClick] = useState(0);
  const [xscore, setXScore] = useState(0);
  const [oscore, setOScore] = useState(0);
  const [winner, setWinner] = useState(false);
  const [mode, setMode] = useState("computerVS")

  const computer = () => {
    if (click < 8) {
      let x = Math.floor(Math.random() * square.length)
      while (square[x] !== "") {
        x = Math.floor(Math.random() * square.length)
      }
      square[x] = "O"
      setClick(p => { return p + 1 })
      setTurn(true)
    }
  }

  const handleClick = (i) => {  
    if (square[i]) {
      return
    }
    if (mode === "computerVS") {
      square[i] = "X"
      setClick(p => {return p + 1})
      setTurn(false)
    } 
    if (mode === "playerVS") {
      square[i] = turn ? "X" : "O"
      setTurn(!turn)
      setClick(click + 1)
    }
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
        return game_reset(square[a])
      }
    } 
  };

  const game_reset = (value) => {
    if (value === "full_reset") {
      setXScore(0);
      setOScore(0);
      setWinner("");
    }
    if (value === "X") {
      setXScore((p) => {
        return p + 1;
      });
      setWinner("X has WON!");
    }
    if (value === "O") {
      setOScore((p) => {
        return p + 1;
      });
      setWinner("O has WON!");
    }
    if (value === "draw") {
      setWinner("DRAW");
    }
    setSquare(Array(9).fill(""));
    setTurn(true);
    setClick(0);
  };

  const display = () => {
    if (turn) {
      return "it's X turn";
    } else {
      return "it's Y turn";
    }
  };

  useEffect(() => {
    if(calculateWinner(square)) {
      setWinner(true)
      return
    }
    if (click >= 9) {
      game_reset("draw");
    }
  })
  
  useEffect(() => {
    if (mode === "computerVS") {
      if (!turn) {
        computer()
      }
    }
  })

  return (
    <>
      <main className="flex h-screen w-screen max-h-full max-w-full min-h-full min-w-full flex-col bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <div className="m-auto font-thin border-2 border-solid border-sky-600 p-0.5 shadow-md shadow-sky-900">
          <div className="mb-1 border-2 border-solid border-sky-300 p-2 text-center font-serif text-5xl text-sky-300 shadow-md shadow-current">
            <p>Tic Tac Toe</p>
          </div>
          <div className="mb-1 max-h-24 border-2 border-solid border-sky-300 bg-slate-600 shadow-md shadow-current">
            <div className="relative top-3 left-5 text-2xl text-sky-400 ">
              <p>X Score : {xscore}</p>
              <p className="relative right-0.5">O Score : {oscore}</p>
            </div>
            <div className="text-center text-2xl text-sky-200">
              <button
                className="relative bottom-10 z-50 border-2 border-solid border-sky-300 bg-slate-500 p-1 shadow-sm shadow-sky-300 hover:shadow-2xl"
                onClick={() => {
                  game_reset("full_reset");
                }}
              >
                Reset
              </button>
            </div>
            <div className="relative bottom-20 right-5 text-right text-2xl text-sky-400">
              <p>{display()}</p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-3 gap-3 border-2 border-solid border-sky-300 p-2 text-center text-8xl font-light text-sky-300 shadow-2xl shadow-sky-900">
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 hover:shadow-xl shadow-current"
              onClick={() => {
                handleClick(0);
              }}
            >
              {square[0]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(1);
              }}
            >
              {square[1]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(2);
              }}
            >
              {square[2]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(3);
              }}
            >
              {square[3]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(4);
              }}
            >
              {square[4]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(5);
              }}
            >
              {square[5]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(6);
              }}
            >
              {square[6]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(7);
              }}
            >
              {square[7]}
            </div>
            <div
              className="h-32 w-32 border-2 border-solid border-sky-500 shadow-current hover:shadow-lg"
              onClick={() => {
                handleClick(8);
              }}
            >
              {square[8]}
            </div>
          </div>
          <div className="text-2xl text-center text-sky-300 pt-1 pb-1">
            <button className="" onClick={() => {
              if (mode === "playerVS") {
                setMode("computerVS")
              }
              if (mode === "computerVS") {
                setMode("playerVS")
              }
            }}>Select Mode</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default TicTacToe;
