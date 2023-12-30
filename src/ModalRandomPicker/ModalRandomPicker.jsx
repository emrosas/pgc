import React, { useState, useEffect } from "react";
import "./ModalRandomPicker.css";

const ModalRandomPicker = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const getRandomPlayer = (e) => {
    e.preventDefault();
    setSelectedPlayer("");
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    setTimeout(() => {
      setSelectedPlayer(randomPlayer.name);
    }, 500);
  };

  useEffect(() => {
    const inputElement = document.querySelector(".random-player");
    inputElement.value = selectedPlayer;
  }, [selectedPlayer]);

  return (
    <form className="modal-wrapper" onSubmit={getRandomPlayer}>
      <h4>Random Player Picker</h4>
      <div className="random-player-holder">
        <input
          type="text"
          className="random-player"
          placeholder="Random Player"
          readOnly
        />
        <button type="submit" className="random-player-button">
          Spin
        </button>
      </div>
    </form>
  );
};

export default ModalRandomPicker;
