import React, { useEffect, useState } from "react";
import "./GameScreen.css";
import Navbar from "../components/Navbar";
// import ModalAddPoints from "../ModalAddPoints/ModalAddPoints";
// import ModalRandomPicker from "../ModalRandomPicker/ModalRandomPicker";
// import ModalTimer from "../ModalTimer/ModalTimer";
import Extras from "../assets/extras.svg";
import Cancel from "../assets/cancel.svg";
import PlayerList from "../components/PlayerList";

const GameScreen = () => {
  // const [players, setPlayers] = useState(
  //   () => JSON.parse(localStorage.getItem("players")) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem("players", JSON.stringify(players));
  // }, [players]);

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
    <div className="h-screen flex">
      <main className="px-page py-6 flex-grow">
        <div></div>
        <Navbar />
        <section className="flex gap-8">
          <PlayerList />
          {/* <aside className={openMenu ? "mobile-menu-holder" : ""}>
            <ModalAddPoints
              players={players}
              updatePlayerScore={updatePlayerScore}
            />
            <ModalRandomPicker players={players} />
            <ModalTimer />
          </aside> */}
        </section>
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
