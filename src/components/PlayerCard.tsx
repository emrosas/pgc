import Gold from "../assets/gold.svg";
import Silver from "../assets/silver.svg";
import Bronze from "../assets/bronze.svg";
import { Player } from "../store";
import { useGameStore } from "../store";

// const PlayerCard = ({ name, username, score, setPlayers, index }) => {
const PlayerCard = ({ name, nickname, score, index }: Player) => {
  const removePlayer = useGameStore((state) => state.removePlayer);
  let place;
  let cardClasses;
  let scoreClasses;
  let trophy;
  switch (index) {
    case 0:
      place = "first-place";
      cardClasses = "bg-opacity-40 bg-gold";
      trophy = Gold;
      break;
    case 1:
      place = "second-place";
      cardClasses = "bg-opacity-25 bg-silver";
      trophy = Silver;
      break;
    case 2:
      place = "third-place";
      cardClasses = "bg-opacity-25 bg-bronze";
      trophy = Bronze;
      break;
    default:
      cardClasses = "bg-light-2";
  }

  return (
    <li
      className={`${cardClasses} list-none p-8 m-0 rounded-2xl border border-dark-3 border-opacity-25 flex flex-col sm:flex-row justify-between items-center relative`}>
      <div className="flex gap-8">
        {trophy && (
          <img
            src={trophy}
            alt="trophy"
            className="absolute left-page top-page w-6 sm:relative sm:w-auto sm:inset-0"
          />
        )}
        <div className="sm:block flex flex-col items-center">
          <h3>{name}</h3>
          <p className="sm:text-xl text-base text-dark-3 font-medium">
            {nickname}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-baseline">
        <p className="sm:text-xl font-medium text-dark-3">Score:</p>
        <p className={`text-4xl font-bold`}>{score}</p>
      </div>
      <button
        className="absolute px-2 py-1 top-4 right-6 rounded-md text-xs opacity-25 hover:opacity-100 hover:bg-brand-3 transition duration-300"
        onClick={() => removePlayer(name)}>
        Remove Player X
      </button>
    </li>
  );
  // }
};

export default PlayerCard;
