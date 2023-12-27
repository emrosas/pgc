import { useState } from "react";
import "./App.css";

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
      {!gameStart && (
        <div className="container">
          <h1>Party Game Companion</h1>
          <p>“Who’s keeping score?” NO MORE...</p>
          <button className="start-game" onClick={handleGameStart}>
            Start Game
          </button>
        </div>
      )}

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
