import React, { useEffect, useState } from "react";
import "./GameScreen.css";
import Navbar from "../components/Navbar";
// import PlayerCard from "../PlayerCard/PlayerCard";
// import PlayerAddForm from "../PlayerAddForm/PlayerAddForm";
// import ModalAddPoints from "../ModalAddPoints/ModalAddPoints";
// import ModalRandomPicker from "../ModalRandomPicker/ModalRandomPicker";
// import ModalTimer from "../ModalTimer/ModalTimer";
import Extras from "../assets/extras.svg";
import Cancel from "../assets/cancel.svg";

const GameScreen = () => {
  // const [players, setPlayers] = useState(
  //   () => JSON.parse(localStorage.getItem("players")) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem("players", JSON.stringify(players));
  // }, [players]);

  // const handleAddPlayer = (newPlayer) => {
  //   setPlayers([...players, newPlayer]);
  // };

  // const updatePlayerScore = (username, pointsToAdd) => {
  //   setPlayers(
  //     players.map((player) => {
  //       if (player.username === username) {
  //         player.score = player.score + Number(pointsToAdd);
  //       }
  //       return player;
  //     })
  //   );
  // };

  // const [openMenu, setOpenMenu] = useState(false);

  // const handleMenuToggle = () => {
  //   setOpenMenu(!openMenu);
  // };

  return (
    <div className="game-screen-wrapper">
      <main>
        <div></div>
        <Navbar />
        {/* <section>
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

          <aside className={openMenu ? "mobile-menu-holder" : ""}>
            <ModalAddPoints
              players={players}
              updatePlayerScore={updatePlayerScore}
            />
            <ModalRandomPicker players={players} />
            <ModalTimer />
          </aside>
        </section> */}
        {/* <div className="mobile-menu">
          <button
            className={`mobile-menu-button ${
              openMenu ? "mobile-menu-button-open" : ""
            }`}
            onClick={handleMenuToggle}>
            <img src={openMenu ? Cancel : Extras} alt="Extra features icon" />
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default GameScreen;
