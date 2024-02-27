import Navbar from "./Navbar";
import PlayerList from "./PlayerList";
import GameModals from "./GameModals";

const GameScreen = () => {
  // const [openMenu, setOpenMenu] = useState(false);

  // const handleMenuToggle = () => {
  //   setOpenMenu(!openMenu);
  // };

  return (
    <main className="px-page grid gap-x-8 h-screen grid-cols-6">
      <Navbar />
      <PlayerList />
      <GameModals />
      {/* <aside className={openMenu ? "mobile-menu-holder" : ""}>
            <ModalAddPoints
              players={players}
              updatePlayerScore={updatePlayerScore}
            />
            <ModalRandomPicker players={players} />
            <ModalTimer />
          </aside> */}
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
  );
};

export default GameScreen;
