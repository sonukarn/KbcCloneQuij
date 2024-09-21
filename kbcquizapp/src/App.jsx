import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import "./App.css";

import Quij from "./components/Quij";
import Timer from "./components/Timer";
import Start from "./components/Start";
const App = () => {
  const [username, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" 0");

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: " 1000" },
        { id: 2, amount: " 2000" },
        { id: 3, amount: " 5000" },
        { id: 4, amount: " 10000" },
        { id: 5, amount: " 20000" },
        { id: 6, amount: " 50000" },
        { id: 7, amount: " 100000" },
        { id: 8, amount: " 200000" },
        { id: 9, amount: " 500000" },
        { id: 10, amount: " 1000000" },
      ].reverse(),
    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  const restartGame = () => {
    setStop(false);
    setQuestionNumber(1);
    setEarned(" 0");
    setUserName(null);
  };
  return (
    <>
      <div className="app">
        {username ? (
          <>
            <div className="main">
              {stop ? (
                <div className="endText">
                  <h1 className="endText">Game Over! </h1>
                  <h1 className="endText">
                    You Earned:{`${username}:${earned}`}{" "}
                  </h1>
                  <button className="" onClick={restartGame}>
                    RestartGame
                  </button>
                </div>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Quij
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">
                      &#8377; {m.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Start setUserName={setUserName} />
        )}
      </div>
    </>
  );
};

export default App;
