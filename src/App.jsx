import { useState } from "react";
import "./App.css";
import GameStart from "./GameStart/GameStart";
import GameScreen from "./GameScreen/GameScreen";

function App() {
  const [gameStart, setGameStart] = useState(false);

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
