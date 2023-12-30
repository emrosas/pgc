import React, { useEffect, useState } from "react";
import "./GameScreen.css";
import Navbar from "../Navbar/Navbar";
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayerAddForm from "../PlayerAddForm/PlayerAddForm";
import ModalAddPoints from "../ModalAddPoints/ModalAddPoints";
import ModalRandomPicker from "../ModalRandomPicker/ModalRandomPicker";

const GameScreen = ({ handleGameEnd }) => {
  const [players, setPlayers] = useState(
    () => JSON.parse(localStorage.getItem("players")) || []
  );

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const handleAddPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const updatePlayerScore = (username, pointsToAdd) => {
    setPlayers(
      players.map((player) => {
        if (player.username === username) {
          player.score = player.score + Number(pointsToAdd);
        }
        return player;
      })
    );
  };

  return (
    <div className="game-screen-wrapper">
      <main>
        <div></div>
        <Navbar handleGameEnd={handleGameEnd} setPlayers={setPlayers} />
        <section>
          <ul>
            {players
              .sort((a, b) => b.score - a.score)
              .map((player) => (
                <PlayerCard
                  key={player.username}
                  name={player.name}
                  username={player.username}
                  score={player.score}
                  setPlayers={setPlayers}
                  index={players.indexOf(player)}
                />
              ))}
            <PlayerAddForm
              handleAddPlayer={handleAddPlayer}
              players={players}
            />
          </ul>

          <aside>
            <ModalAddPoints
              players={players}
              updatePlayerScore={updatePlayerScore}
            />
            <ModalRandomPicker players={players} />
            <div className="modal-wrapper future-feature">
              <h4>Functionality Modal</h4>
              <p className="modal-info">
                We are working on this feature. You can expect it to be released
                soon.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default GameScreen;
