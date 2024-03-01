import { useState } from "react";
import { useGameStore } from "../store";
import Button from "./ui/Button";

const ModalRandomPicker = () => {
  const players = useGameStore((state) => state.players);
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSelectedPlayer("Choosing...");
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    setTimeout(() => {
      setSelectedPlayer(randomPlayer.name);
    }, 1000);
  };

  return (
    <form className="flex flex-col gap-4 text-center">
      <h4 className="text-2xl lg:text-3xl">Random Player Picker</h4>
      <div className="flex -mr-4">
        <input
          type="text"
          className="flex-grow rounded-s-lg px-4 py-2 bg-light-2 border border-dark-3 border-opacity-50 focus:outline-none"
          placeholder="Random Player"
          value={selectedPlayer}
          readOnly
        />
        <div className="-translate-x-4">
          <Button text="Spin" onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
};

export default ModalRandomPicker;
