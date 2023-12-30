import React from "react";
import "./PlayerCard.css";
import Gold from "../assets/gold.svg";
import Silver from "../assets/silver.svg";
import Bronze from "../assets/bronze.svg";

const PlayerCard = ({ name, username, score, setPlayers, index }) => {
  const handleDelete = () => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((player) => player.username !== username);
    });
  };

  if (index === 0) {
    return (
      <li className="first-place">
        <div className="place-holder">
          <img src={Gold} alt="gold" className="trophy" />
          <div>
            <h3>{name}</h3>
            <p className="username">{username}</p>
          </div>
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
  } else if (index === 1) {
    return (
      <li className="second-place">
        <div className="place-holder">
          <img src={Silver} alt="silver" className="trophy" />
          <div>
            <h3>{name}</h3>
            <p className="username">{username}</p>
          </div>
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
  } else if (index === 2) {
    return (
      <li className="third-place">
        <div className="place-holder">
          <img src={Bronze} alt="bronze" className="trophy" />
          <div>
            <h3>{name}</h3>
            <p className="username">{username}</p>
          </div>
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
  } else {
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
  }
};

export default PlayerCard;
