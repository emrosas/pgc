import { useState, useRef } from "react";
import "./ModalTimer.css";
import Start from "../assets/timer-start.svg";
import Pause from "../assets/timer-pause.svg";
import Restart from "../assets/timer-restart.svg";

const ModalTimer = () => {
  const [timer, setTimer] = useState(0);
  const [lastTimer, setLastTimer] = useState(0);
  const intervalRef = useRef();

  const handleChange = (e) => {
    setTimer(e.target.value);
    setLastTimer(e.target.value);
  };
  const startTimer = (e) => {
    e.preventDefault();
    if (intervalRef.current) return;
    if (timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }, timer * 1000);
    }
  };

  const pauseTimer = (e) => {
    e.preventDefault();
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const restartTimer = (e) => {
    e.preventDefault();
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(lastTimer);
  };

  return (
    <form className="modal-wrapper" onSubmit={startTimer}>
      <div className="timer-header">
        <div className="timer-title-holder">
          <h4>Timer</h4>
          <p className="modal-info">Enter a time in seconds</p>
        </div>
        <input
          className={`timer ${timer <= 3 ? "timer-red" : ""}`}
          type="number"
          onChange={handleChange}
          value={timer}
        />
      </div>
      <div className="timer-buttons">
        <button className="btn-pale" onClick={pauseTimer}>
          <img src={Pause} alt="pause icon" />
        </button>
        <button className="timer-start-button" type="submit">
          Start
          <img src={Start} alt="start icon" />
        </button>
        <button className="btn-pale">
          <img src={Restart} alt="restart icon" onClick={restartTimer} />
        </button>
      </div>
    </form>
  );
};

export default ModalTimer;
