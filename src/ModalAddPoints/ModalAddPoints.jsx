import React, { useState } from "react";
import "./ModalAddPoints.css";
import Minus from "../assets/minus.svg";
import Plus from "../assets/plus.svg";

const ModalAddPoints = ({ players, updatePlayerScore }) => {
  //Handles points selection
  const [points, setPoints] = useState(0);

  const handlePointsChange = (e) => {
    setPoints(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setPoints(points + 5);
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    setPoints(points - 5);
  };

  //Handles player selection
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const hanldePlayerSelect = (e) => {
    setSelectedPlayer(e.target.value);
  };

  //Handles adding points to player
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayerScore(selectedPlayer, points);
    setPoints(0);
    setSelectedPlayer("");
  };

  return (
    <form className="modal-wrapper" onSubmit={handleSubmit}>
      <h4>Add Points</h4>
      <select
        name="player"
        value={selectedPlayer}
        className="player-select"
        onChange={hanldePlayerSelect}
      >
        <option value="">Select a Player</option>
        {players.map((player) => (
          <option key={player.username} value={player.username}>
            {player.name}
          </option>
        ))}
      </select>
      <div className="points-holder">
        <button className="btn-pale points-btn" onClick={handleSubtract}>
          <img src={Minus} alt="A minus sign" />
        </button>
        <input
          type="number"
          className="points-input"
          value={points}
          onChange={handlePointsChange}
        />
        <button className="btn-pale points-btn" onClick={handleAdd}>
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
