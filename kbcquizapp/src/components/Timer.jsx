import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = ({ setStop, questionNumber }) => {
  const [timer, SetTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      SetTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    SetTimer(30);
  }, [questionNumber]);

  return timer;
};

export default Timer;
