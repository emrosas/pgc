import React from "react";
import Logo from "../assets/logo.svg";
import "./GameScreen.css";
import Navbar from "../Navbar/Navbar";
import PlayerCard from "../PlayerCard/PlayerCard";

const GameScreen = ({ handleGameEnd }) => {
  return (
    <div className="game-screen-wrapper">
      <main>
        <div></div>
        <Navbar handleGameEnd={handleGameEnd} />
        <section>
          <ul>
            <PlayerCard name="Jimmmy" username="Necesita un Baño" score="100" />
            <PlayerCard name="Cletty" username="La mas Megafona" score="75" />
            <PlayerCard name="Erick" username="Es bien TOP" score="50" />
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
