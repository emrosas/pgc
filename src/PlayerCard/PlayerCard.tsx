import React from "react";
import Button from "../components/ui/Button";
import "./PlayerCard.css";
import Gold from "../assets/gold.svg";
import Silver from "../assets/silver.svg";
import Bronze from "../assets/bronze.svg";
import { Player } from "../store";
import { useGameStore } from "../store";

// const PlayerCard = ({ name, username, score, setPlayers, index }) => {
const PlayerCard = ({ name, nickname, score, index }: Player) => {
  const removePlayer = useGameStore((state) => state.removePlayer);
  let place;
  let addedClass;
  let trophy;
  switch (index) {
    case 0:
      place = "first-place";
      addedClass = "bg-opacity-40 bg-gold";
      trophy = Gold;
      break;
    case 1:
      place = "second-place";
      addedClass = "bg-opacity-25 bg-silver";
      trophy = Silver;
      break;
    case 2:
      place = "third-place";
      addedClass = "bg-opacity-25 bg-bronze";
      trophy = Bronze;
      break;
    default:
      addedClass = "bg-light-2";
  }

  return (
    <li className={`${addedClass}`}>
      <div className="place-holder">
        {trophy && <img src={trophy} alt="trophy" className="trophy" />}
        <div>
          <h3>{name}</h3>
          <p className="username">{nickname}</p>
        </div>
      </div>
      <div className="score-holder">
        <p className="score-tag">Score:</p>
        <p className="score">{score}</p>
      </div>
      <button
        className="absolute px-2 py-1 top-4 right-6 rounded-md text-xs opacity-25 hover:opacity-100 hover:bg-brand-3 transition duration-300"
        onClick={() => removePlayer(name)}>
        Remove Player X
      </button>
    </li>
  );
  // }
};

export default PlayerCard;
