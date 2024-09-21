import React from "react";
import { useRef } from "react";
import "./Start.css";
const Start = ({ setUserName }) => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        className="startInput"
        type="text"
        placeholder="Enter your Name"
        ref={inputRef}
      />
      <button onClick={handleClick} className="startButton">
        Start
      </button>
    </div>
  );
};

export default Start;
