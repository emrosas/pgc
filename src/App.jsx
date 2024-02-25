import { useState, useEffect } from "react";
// import "./App.css";
import GameStart from "./components/GameStart";
import GameScreen from "./GameScreen/GameScreen";

function App() {
  const [gameStart, setGameStart] = useState(
    () => JSON.parse(localStorage.getItem("gameStart")) || false
  );

  useEffect(() => {
    localStorage.setItem("gameStart", JSON.stringify(gameStart));
  }, [gameStart]);

  const handleGameStart = () => {
    setGameStart(true);
  };

  const handleGameEnd = () => {
    setGameStart(false);
  };

  return (
    <>
      {gameStart ? (
        <GameScreen handleGameEnd={handleGameEnd} />
      ) : (
        <GameStart handleGameStart={handleGameStart} />
      )}
    </>
  );
}

export default App;
