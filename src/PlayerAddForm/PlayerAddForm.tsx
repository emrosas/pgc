import React, { useRef, useState } from "react";
import "./PlayerAddForm.css";
import Button from "../components/ui/Button";
import { useGameStore } from "../store";
import { Player } from "../store";

const PlayerAddForm = () => {
  const formRef = useRef();
  // Get the players and the hook to add a player from the store
  const players = useGameStore((state) => state.players);
  const addPlayer = useGameStore((state) => state.addPlayer);
  // Create a new player object to add information to
  const initialPlayer: Player = {
    name: "",
    nickname: "",
    score: 0,
  };
  // Handle the form input changes and keep local state updated
  const [playerToAdd, setPlayerToAdd] = useState(initialPlayer);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerToAdd({ ...playerToAdd, [e.target.name]: e.target.value });
  };
  // Handle the form submission and add the player to the store
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addPlayer(playerToAdd);
    changeFormActive();
    setPlayerToAdd(initialPlayer);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    setPlayerToAdd(initialPlayer);
    changeFormActive();
  };
  // Local state to keep track of whether the players have been added
  const [FormActive, setFormActive] = useState(false);
  const changeFormActive = () => {
    setFormActive(!FormActive);
  };
  return (
    <div>
      {!FormActive ? (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <h4 className=" text-2xl font-medium">Add New Player</h4>
            <div className="flex gap-4 items-center">
              <Button text="Add Player" onClick={handleSubmit} />
              {players.length > 0 && (
                <Button text="Cancel" onClick={handleCancel} mode="secondary" />
              )}
            </div>
          </div>
          <div className="flex gap-4 mt-4 w-full">
            <input
              className="py-2 px-4 rounded-lg border-dark-3 placeholder:text-dark-1 placeholder:text-opacity-50 border border-opacity-25 focus:ring focus:outline-none focus:ring-brand-3 bg-brand-1 text-base font-medium flex-grow"
              type="text"
              name="name"
              value={playerToAdd.name}
              onChange={handleChange}
              placeholder="Player Name"
            />
            <input
              className="py-2 px-4 rounded-lg border-dark-3 placeholder:text-dark-1 placeholder:text-opacity-50 border border-opacity-25 focus:ring focus:outline-none focus:ring-brand-3 bg-brand-1 text-base font-medium flex-grow"
              type="text"
              name="nickname"
              value={playerToAdd.nickname}
              onChange={handleChange}
              placeholder="Nickname"
            />
            <input
              className="py-2 px-4 rounded-lg border-dark-3 placeholder:text-dark-1 placeholder:text-opacity-50 border border-opacity-25 focus:ring focus:outline-none focus:ring-brand-3 bg-brand-1 text-base font-medium flex-grow"
              type="number"
              name="score"
              min="0"
              value={playerToAdd.score}
              onChange={handleChange}
              placeholder="Initial Score"
            />
          </div>
        </form>
      ) : (
        <button onClick={changeFormActive}> Add New Player +</button>
      )}
    </div>
  );
};
export default PlayerAddForm;
