import React from "react";
import GameStart from "./components/GameStart";
import GameScreen from "./GameScreen/GameScreen";
import { useGameStore } from "./store";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("gameStart", JSON.stringify(gameStart));
  // }, [gameStart]);

  const gameStarted = useGameStore((state) => state.gameStarted);

  return <>{gameStarted ? <GameScreen /> : <GameStart />}</>;
}

export default App;
