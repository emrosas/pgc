import { useState, useEffect } from "react";
import "./App.css";
import GameStart from "./GameStart/GameStart";
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
      {!gameStart && <GameStart handleGameStart={handleGameStart} />}

      {gameStart && <GameScreen handleGameEnd={handleGameEnd} />}
    </>
  );
}

export default App;
