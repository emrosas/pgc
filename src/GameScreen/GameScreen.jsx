import React from "react";
import Logo from "../assets/logo.svg";
import "./GameScreen.css";
import Navbar from "../Navbar/Navbar";
import PlayerCard from "../PlayerCard/PlayerCard";

const GameScreen = ({ handleGameEnd }) => {
  return (
    <div className="game-screen-wrapper">
      <Navbar handleGameEnd={handleGameEnd} />
      <main>
        <ul>
          <PlayerCard name="Jimmmy" username="Necesita un Baño" score="100" />
          <PlayerCard name="Cletty" username="La mas Megafona" score="75" />
          <PlayerCard name="Erick" username="Es bien TOP" score="50" />
        </ul>
        <section>This is a Section</section>
      </main>
    </div>
  );
};

export default GameScreen;
