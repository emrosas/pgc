import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ name, username, score, setPlayers }) => {
  const handleDelete = () => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((player) => player.username !== username);
    });
  };
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p className="username">{username}</p>
      </div>
      <div className="score-holder">
        <p className="score-tag">Score:</p>
        <p className="score">{score}</p>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        Delete Player X
      </button>
    </li>
  );
};

export default PlayerCard;
