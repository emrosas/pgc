import React, { useEffect } from "react";
import GameStart from "./components/GameStart";
import GameScreen from "./GameScreen/GameScreen";
import { useGameStore } from "./store";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("gameStart", JSON.stringify(gameStart));
  // }, [gameStart]);

  const { setItem } = useLocalStorage("gameStart");

  useEffect(() => {
    const unsubscribe = useGameStore.subscribe(() => {
      setItem(useGameStore.getState());
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [setItem]);

  const gameStarted = useGameStore((state) => state.gameStarted);

  return <>{gameStarted ? <GameScreen /> : <GameStart />}</>;
}

export default App;
