import Logo from "../assets/logo.svg";
import Shadow from "../assets/logo-shadow.png";
import Button from "./ui/Button";
import { useGameStore } from "../store";

function GameStart() {
  const startGame = useGameStore((state) => state.startGame);
  return (
    <header className="relative flex items-center bg-brand-1 justify-center min-h-screen px-page">
      <div className="relative z-30 flex flex-col justify-stretch">
        <img
          src={Logo}
          alt="Party Game Companion Logo"
          className="w-40 mx-auto mb-4"
        />
        <div className="flex flex-col gap-2 text-center mb-4">
          <h1>Party Game Companion</h1>
          <p>“Who’s keeping score?” NO MORE...</p>
        </div>
        <Button text="Start Game" onClick={startGame} />
      </div>
      <img
        src={Shadow}
        alt="Trophy shadow"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
    </header>
  );
}

export default GameStart;
