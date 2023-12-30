import React, { useState } from "react";
import "./ModalTimer.css";
import Start from "../assets/timer-start.svg";
import Pause from "../assets/timer-pause.svg";
import Restart from "../assets/timer-restart.svg";

const ModalTimer = () => {
  const [timer, setTimer] = useState(0);
  const handleChange = (e) => {
    setTimer(e.target.value);
  };
  return (
    <form className="modal-wrapper">
      <div className="timer-header">
        <div className="timer-title-holder">
          <h4>Timer</h4>
          <p className="modal-info">Enter a time in seconds</p>
        </div>
        <input
          className="timer"
          type="number"
          onChange={handleChange}
          value={timer}
        />
      </div>
      <div className="timer-buttons">
        <button className="btn-pale">
          <img src={Pause} alt="pause icon" />
        </button>
        <button className="timer-start-button">
          Start
          <img src={Start} alt="start icon" />
        </button>
        <button className="btn-pale">
          <img src={Restart} alt="restart icon" />
        </button>
      </div>
    </form>
  );
};

export default ModalTimer;
