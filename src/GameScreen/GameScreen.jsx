import React, { useState } from "react";
import "./GameScreen.css";
import Navbar from "../Navbar/Navbar";
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayerAddForm from "../PlayerAddForm/PlayerAddForm";

const GameScreen = ({ handleGameEnd }) => {
  const [players, setPlayers] = useState([]);

  const handleAddPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="game-screen-wrapper">
      <main>
        <div></div>
        <Navbar handleGameEnd={handleGameEnd} />
        <section>
          <ul>
            {players.map((player) => (
              <PlayerCard
                name={player.name}
                username={player.username}
                score={player.score}
                setPlayers={setPlayers}
              />
            ))}
            {/* <PlayerCard name="Jimmmy" username="Necesita un Baño" score="100" />
            <PlayerCard name="Cletty" username="La mas Megafona" score="75" />
            <PlayerCard name="Erick" username="Es bien TOP" score="50" /> */}
            <PlayerAddForm
              handleAddPlayer={handleAddPlayer}
              players={players}
            />
          </ul>

          <aside>
            <div className="functionality-modal">
              <h4>Functionality Modal</h4>
              <p className="modal-info">This it where the magic happens!</p>
              <button className="modal-btn">Do Nothing</button>
            </div>
            <div className="functionality-modal">
              <h4>Functionality Modal</h4>
              <p className="modal-info">This it where the magic happens!</p>
              <button className="modal-btn">Do Nothing</button>
            </div>
            <div className="functionality-modal">
              <h4>Functionality Modal</h4>
              <p className="modal-info">This it where the magic happens!</p>
              <button className="modal-btn">Do Nothing</button>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default GameScreen;
