import Logo from "../assets/logo.svg";
import Button from "./ui/Button";
import { useGameStore } from "../store";

const Navbar = () => {
  const endGame = useGameStore((state) => state.endGame);
  const removeAllPlayers = useGameStore((state) => state.removeAllPlayers);

  const handleEndGame = () => {
    // localStorage.removeItem("players");
    // setPlayers([]);
    removeAllPlayers();
    endGame();
  };
  return (
    <nav className="flex justify-between py-6 px-page bg-brand-1 rounded-2xl border-2 border-dark-3 border-opacity-25 mt-page col-start-1 row-start-1 col-span-6">
      <div className="flex items-center w-12 sm:w-auto">
        <img src={Logo} alt="Trophy App Logo" />
        <div className="hidden flex-col ml-6 sm:flex">
          <h2>Party Game Companion</h2>
          <p className=" text-xl font-medium">
            “Who’s keeping score?” NO MORE...
          </p>
        </div>
      </div>
      <Button text="End Game" onClick={handleEndGame} mode="secondary" />
    </nav>
  );
};

export default Navbar;
