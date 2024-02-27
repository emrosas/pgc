import React, { useState } from "react";
import Minus from "../assets/minus.svg";
import Plus from "../assets/plus.svg";
import { useGameStore } from "../store";

const ModalAddPoints = ({}) => {
  const players = useGameStore((state) => state.players);

  const [selectedPlayer, setSelectedPlayer] = useState("Select a Player");
  // //Handles points selection
  // const [points, setPoints] = useState(0);

  // const handlePointsChange = (e) => {
  //   setPoints(e.target.value);
  // };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   setPoints(points + 5);
  // };

  // const handleSubtract = (e) => {
  //   e.preventDefault();
  //   setPoints(points - 5);
  // };

  // //Handles adding points to player
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   updatePlayerScore(selectedPlayer, points);
  //   setPoints(0);
  //   setSelectedPlayer("");
  // };

  return (
    <form className="flex flex-col gap-2 text-center">
      <h4>Add Points</h4>
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
      <div className="points-holder">
        <button
          className=""
          // onClick={handleSubtract}
        >
          <img src={Minus} alt="A minus sign" />
        </button>
        <input
        // type="number"
        // className="points-input"
        // value={points}
        // onChange={handlePointsChange}
        />
        <button
          className="btn-pale points-btn"
          // onClick={handleAdd}
        >
          <img src={Plus} alt="A plus sign" />
        </button>
      </div>
      <button className="modal-btn" type="submit">
        Add Points
      </button>
    </form>
  );
};

export default ModalAddPoints;
