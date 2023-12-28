import { useState } from "react";
import "./App.css";
import GameStart from "./GameStart/GameStart";

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

      {gameStart && (
        <div className="container">
          <h1>Game started</h1>
          <p>Insert players</p>
          <button className="end-game" onClick={handleGameEnd}>
            End Game
          </button>
        </div>
      )}
    </>
  );
}

export default App;
