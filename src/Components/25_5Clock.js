import React, { useState, useEffect } from "react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [session, setSession] = useState(25);
  const [rest, setRest] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [tick, setTick] = useState(false);
  const [state, setState] = useState("Session");
  const [savedInputs, setSavedInputs] = useState({ ses: session, res: rest });

  const sound = document.getElementById("beep");

  const display = () => {
    if (state === "Session") {
      if (session < 10) {
        if (seconds < 10) {
          return (
            <>
              0{session}:0{seconds}
            </>
          );
        } else {
          return (
            <>
              0{session}:{seconds}
            </>
          );
        }
      }
      if (seconds < 10) {
        return (
          <>
            {session}:0{seconds}
          </>
        );
      } else {
        return (
          <>
            {session}:{seconds}
          </>
        );
      }
    } else {
      if (rest < 10) {
        if (seconds < 10) {
          return (
            <>
              0{rest}:0{seconds}
            </>
          );
        } else {
          return (
            <>
              0{rest}:{seconds}
            </>
          );
        }
      }
      if (seconds < 10) {
        return (
          <>
            {rest}:0{seconds}
          </>
        );
      } else {
        return (
          <>
            {rest}:{seconds}
          </>
        );
      }
    }
  };

  const ticking = () => {
    if (tick) {
      if (state === "Session") {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (session === 0) {
            sound.play();
            setState("Brake");
            setSeconds(0);
            setSession(savedInputs.ses);
          } else {
            setSeconds(59);
            setSession(session - 1);
          }
        }
      } else {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (rest === 0) {
            sound.play();
            setState("Session");
            setSeconds(0);
            setRest(savedInputs.res);
          } else {
            setSeconds(59);
            setRest(rest - 1);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (seconds === 0) {
      if (session === 0) {
        sound.play();
      }
      if (rest === 0) {
        sound.play();
      }
    }
    const x = setInterval(ticking, 1000);
    return () => clearInterval(x);
  });

  return (
    <main className="flex h-screen bg-slate-400">
      <div className="relative m-auto w-96 rounded-md bg-slate-300">
        <h2 className="ml-7 mt-5 text-2xl" id="session-label">
          Session Length
        </h2>
        <p className="ml-14 text-8xl" id="session-length">
          {savedInputs.ses}
        </p>
        <button
          id="session-decrement"
          onClick={() => {
            if (!tick) {
              if (session > 1) {
                setSession(session - 1);
                setSeconds(0);
                setSavedInputs({ ses: session - 1, res: savedInputs.res });
              }
            }
          }}
        >
          <ArrowDownCircleIcon className="absolute top-16 mt-1 ml-2 h-10 w-10  text-red-500" />
        </button>
        <button
          id="session-increment"
          onClick={() => {
            if (!tick) {
              if (session < 60) {
                setSession(session + 1);
                setSeconds(0);
                setSavedInputs({ ses: session + 1, res: savedInputs.res });
              }
            }
          }}
        >
          <ArrowUpCircleIcon className="absolute top-20 mt-5 ml-2 h-10 w-10  text-green-600" />
        </button>
        <h2
          className="absolute top-0 right-0 mr-7 mt-5 text-2xl"
          id="break-label"
        >
          Break Length
        </h2>
        <p
          className="absolute right-10 top-12 mr-3 mt-1 text-8xl"
          id="break-length"
        >
          {savedInputs.res}
        </p>
        <button
          id="break-decrement"
          onClick={() => {
            if (!tick) {
              if (rest > 1) {
                setRest(rest - 1);
                setSavedInputs({ ses: savedInputs.ses, res: rest - 1 });
              }
            }
          }}
        >
          <ArrowDownCircleIcon className="absolute top-16 left-80 mt-1 ml-4 h-10 w-10  text-red-500" />
        </button>
        <button
          id="break-increment"
          onClick={() => {
            if (!tick) {
              if (rest < 60) {
                setRest(rest + 1);
                setSavedInputs({ ses: savedInputs.ses, res: rest + 1 });
              }
            }
          }}
        >
          <ArrowUpCircleIcon className="absolute top-20 left-80 mt-5 ml-4 h-10 w-10  text-green-600" />
        </button>
        <div className="mr-30 w-30 relative  h-40 rounded-md text-center">
          <h1 className="text-3xl" id="timer-label">
            {state}
          </h1>
          <h1 className="text-9xl" id="time-left">
            {display()}
          </h1>
        </div>
        <audio
          src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
          id="beep"
        ></audio>
        <div>
          {" "}
          <button
            className="mt-5 ml-3 mb-3 inline-block rounded bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            id="start_stop"
            onClick={() => {
              tick ? setTick(false) : setTick(true);
            }}
          >
            Start/Stop
          </button>
          <button
            className="ml-2 mb-1 inline-block rounded bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            id="reset"
            onClick={() => {
              sound.pause();
              sound.load();
              setTick(false);
              setState("Session");
              setSession(25);
              setRest(5);
              setSeconds(0);
              setSavedInputs({ ses: 25, res: 5 });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
