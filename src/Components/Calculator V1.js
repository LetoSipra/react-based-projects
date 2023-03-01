import React, { useState } from "react";

const dataCalculator = [
  {
    value: 0,
    id: "zero",
  },
  {
    value: 1,
    id: "one",
  },
  {
    value: 2,
    id: "two",
  },
  {
    value: 3,
    id: "three",
  },
  {
    value: 4,
    id: "four",
  },
  {
    value: 5,
    id: "five",
  },
  {
    value: 6,
    id: "six",
  },
  {
    value: 7,
    id: "seven",
  },
  {
    value: 8,
    id: "eight",
  },
  {
    value: 9,
    id: "nine",
  },
  {
    value: "+",
    id: "add",
  },
  {
    value: "-",
    id: "subtract",
  },
  {
    value: "*",
    id: "multiply",
  },
  {
    value: "/",
    id: "divide",
  },
  {
    value: ".",
    id: "decimal",
  },
  {
    value: "=",
    id: "equals",
  }
];

function Calculator() {
  const [disNum, setDisNum] = useState(0);
  const [display, setDisplay] = useState("");
  const [opState, setOpState] = useState(false);
  const [gotresult, Setgotresult] = useState(false);
  const [isdecimal, setIsdecimal] = useState(false);


  const equal = () => {
    if (opState) {
      const x = display.slice(0, -1);
      const total = eval(x);
      setDisNum(total);
      setDisplay([x] + "=" + total);
      setOpState(false);
      Setgotresult(true);
    } else {
      const alttotal = eval(display);
      setDisNum(alttotal);
      setDisplay([display] + "=" + alttotal);
      Setgotresult(true);
    }
  };

  const resultmode = (value) => {
    if (/[+/*]/.test(value)) {
      setDisplay(disNum + value);
      setDisNum(value);
      setOpState(true);
      Setgotresult(false);
    } else {
      setDisplay(value);
      setDisNum(value);
      setOpState(false);
      Setgotresult(false);
    }
  };

  const amck = (value) => {
    setIsdecimal(true);
    setDisNum(value);
    setDisplay(display + value);
  };

  const calculate = (value) => {
    if (value === "=") {
      return equal();
    }
    if (gotresult) {
      return resultmode(value);
    }
    if (!opState) {
      if (disNum === 0) {
        if (value === 0) {
          setDisplay(0);
        } else {
          if (/[1-9]/.test(value)) {
            setDisNum(value);
            setDisplay(value);
          }
        }
      } else {
        if (/[+/*]/.test(value)) {
          setOpState(true);
          setDisplay([display] + value);
          setDisNum(value);
        } else {
          setDisplay([display] + value);
          setDisNum([disNum] + value);
        }
      }
    } else {
      if (/[+/*-]/.test(value)) {
        if (value === "-") {
          return amck(value);
        }
        if (isdecimal) {
          const x = display.slice(0, -2);
          setIsdecimal(false);
          setDisNum(value);
          setDisplay(x + value);
        } else {
          const x = display.slice(0, -1);
          const y = disNum.slice(0, -1);
          setDisplay([x] + value);
          setDisNum(value);
        }
      } else {
        setOpState(false);
        setDisplay([display] + value);
        setDisNum(disNum + value);
      }
    }
  };
  
  return (
    <main className="flex h-screen">
      <div className="m-auto flex-col bg-slate-200 border-8 border-solid w-64 inline">
        <div className="mb-3 pl-2 bg-slate-100 h-auto break-words">
          <p className="text-2xl">{display}</p>
          <p className="text-2xl" id="display">{disNum}</p>
        </div>
        <div className=" grid grid-cols-4">
      {dataCalculator.map((getData) => {
        return (
          <div>
            <button
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              id={getData.id}
              onClick={() => {
                calculate(getData.value);
              }}
            >
              {getData.value}
            </button>
          </div>
        );
      })}
      </div>
        <div className="mt-5 text-center pb-2">
      <button
            className="mr-3 inline-block rounded bg-neutral-50 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]"
        onClick={() => {
          if (display.length > 1) {
            setDisplay(display.slice(0, -1));
            setDisNum(disNum.slice(0, -1));
          } else {
            setDisplay(0);
          }
        }}
      >
        BACKSPACE
      </button>
      <button
            className="inline-block rounded bg-neutral-50 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]"
        id="clear"
        onClick={() => {
          setDisplay("");
          setDisNum(0);
          setOpState(false);
          Setgotresult(false);
        }}
      >
        CLEAR
      </button>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
