import React, { useRef, useState } from "react";
import "./PlayerAddForm.css";

const PlayerAddForm = ({ handleAddPlayer, players }) => {
  const formRef = useRef();
  const [playersAdded, setPlayersAdded] = useState(false);
  const changePlayersAdded = () => {
    setPlayersAdded(!playersAdded);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlayer = {
      name: e.target.name.value,
      username: e.target.username.value,
      score: e.target.score.value,
    };
    handleAddPlayer(newPlayer);
    formRef.current.reset();
    changePlayersAdded();
  };
  const handleCancel = (e) => {
    e.preventDefault();
    formRef.current.reset();
    changePlayersAdded();
  };
  return (
    <>
      {!playersAdded ? (
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="add-player-header">
            <h4>Add New Player</h4>
            <div className="add-player-buttons">
              <button type="submit">Add Player</button>
              <button className="btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
          <div className="add-player-fields">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Player Name"
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="number"
              name="score"
              id="score"
              min="1"
              placeholder="Initial Score"
            />
          </div>
        </form>
      ) : (
        <button onClick={changePlayersAdded}> Add New Player +</button>
      )}
    </>
  );
};
export default PlayerAddForm;
