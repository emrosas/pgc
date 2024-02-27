import React, { MouseEventHandler, useState } from "react";
import Minus from "../assets/minus.svg";
import Plus from "../assets/plus.svg";
import Button from "./ui/Button";
import { useGameStore } from "../store";

const ModalAddPoints = ({}) => {
  const players = useGameStore((state) => state.players);
  const addPoints = useGameStore((state) => state.addPoints);

  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [points, setPoints] = useState(0);

  const handleAdd = (e: any) => {
    e.preventDefault();
    setPoints(points + 5);
  };

  const handleSubtract = (e: any) => {
    e.preventDefault();
    setPoints(points - 5);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addPoints(selectedPlayer, points);
    setPoints(0);
    setSelectedPlayer("");
  };

  return (
    <form className="flex flex-col gap-4 text-center">
      <h4 className=" text-3xl">Add Points</h4>

      <select
        name="player"
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
        className="px-2 py-4 bg-light-2 rounded-lg border border-dark-3 border-opacity-50 focus:outline-none focus:ring focus:ring-brand-3">
        <option value="">Select a Player</option>
        {players.map((player) => (
          <option key={player.name} value={player.name}>
            {player.name}
          </option>
        ))}
      </select>

      <div className="flex items-stretch justify-center gap-2">
        <button
          className="p-2 bg-light-2 border border-dark-3 border-opacity-50 rounded-lg focus:outline-none focus:ring focus:ring-brand-3"
          onClick={handleSubtract}>
          <img src={Minus} alt="A minus sign" />
        </button>
        <input
          className={`${
            points < 0 && "text-red-600"
          } text-center flex-shrink rounded-lg focus:outline-none focus:ring focus:ring-brand-3 px-4 py-2 bg-light-2 border border-dark-3 border-opacity-50`}
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
        <button
          className="p-2 bg-light-2 border border-dark-3 border-opacity-50 rounded-lg focus:outline-none focus:ring focus:ring-brand-3"
          onClick={handleAdd}>
          <img src={Plus} alt="A plus sign" />
        </button>
      </div>

      <div className="flex justify-center">
        <Button text="Add Points" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default ModalAddPoints;
