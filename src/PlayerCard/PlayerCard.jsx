import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ name, username, score }) => {
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
    </li>
  );
};

export default PlayerCard;
