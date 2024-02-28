import { useState, useRef } from "react";
import Start from "../assets/timer-start.svg";
import Pause from "../assets/timer-pause.svg";
import Restart from "../assets/timer-restart.svg";

const ModalTimer = () => {
  const [timer, setTimer] = useState(0);
  // const [lastTimer, setLastTimer] = useState(0);
  // const intervalRef = useRef();

  // const handleChange = (e) => {
  //   setTimer(e.target.value);
  //   setLastTimer(e.target.value);
  // };
  // const startTimer = (e) => {
  //   e.preventDefault();
  //   if (intervalRef.current) return;
  //   if (timer > 0) {
  //     intervalRef.current = setInterval(() => {
  //       setTimer((prevTimer) => prevTimer - 1);
  //     }, 1000);
  //     setTimeout(() => {
  //       clearInterval(intervalRef.current);
  //       intervalRef.current = null;
  //     }, timer * 1000);
  //   }
  // };

  // const pauseTimer = (e) => {
  //   e.preventDefault();
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = null;
  // };

  // const restartTimer = (e) => {
  //   e.preventDefault();
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = null;
  //   setTimer(lastTimer);
  // };

  return (
    <form
      className="grid gap-4 grid-cols-2"
      // onSubmit={startTimer}
    >
      <div className="col-span-1 flex flex-col">
        <h4 className=" text-3xl">Timer</h4>
        <p className="text-sm">Enter a time in seconds</p>
      </div>
      <input
        className={`text-center text-2xl font-medium rounded-lg bg-light-2 border border-dark-3 border-opacity-50 focus:outline-none ${
          timer <= 3 && "text-red-600"
        }`}
        type="number"
        // onChange={handleChange}
        value={timer}
      />
      <div className="col-span-2 flex gap-4">
        <button
          className="px-4 py-2 bg-light-2 border border-dark-3 border-opacity-50 rounded-lg"
          // onClick={pauseTimer}
        >
          <img src={Pause} alt="pause icon" />
        </button>
        <button
          className="flex gap-2 items-center justify-center flex-grow bg-brand-2 hover:bg-amber-500 py-2 h-full px-4 font-medium rounded-lg outline outline-transparent hover:outline-dark-3 border border-dark-2 border-opacity-25 transition-all duration-300 focus:outline-none focus:ring focus:ring-brand-3"
          type="submit">
          Start
          <img src={Start} alt="start icon" />
        </button>
        <button
          className="px-4 py-2 bg-light-2 border border-dark-3 border-opacity-50 rounded-lg"
          // onClick={restartTimer}
        >
          <img src={Restart} alt="restart icon" />
        </button>
      </div>
    </form>
  );
};

export default ModalTimer;
