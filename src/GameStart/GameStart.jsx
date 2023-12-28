import React from "react";
import "./GameStart.css";
import Logo from "../assets/logo.svg";
import Shadow from "../assets/logo-shadow.png";

function GameStart({ handleGameStart }) {
  return (
    <header>
      <div className="start-container">
        <div className="start-comp">
          <img
            src={Logo}
            alt="Party Game Companion Logo"
            className="start-logo"
          />
          <div className="start-text-holder">
            <h1>Party Game Companion</h1>
            <p>“Who’s keeping score?” NO MORE...</p>
          </div>
          <button className="start-game" onClick={handleGameStart}>
            Start Game
          </button>
        </div>
      </div>
      <img src={Shadow} alt="Trophy shadow" className="trophy-shadow" />
    </header>
  );
}

export default GameStart;
