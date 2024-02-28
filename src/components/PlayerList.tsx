import { useGameStore } from "../store";
import PlayerCard from "./PlayerCard";
import PlayerAddForm from "./PlayerAddForm";

function PlayerList() {
  const players = useGameStore((state) => state.players);
  return (
    <div className="h-full overflow-y-scroll overflow-x-visible row-start-2 col-span-4 py-page bg-transparent scrollbarHide">
      <ul className=" list-none p-0 m-0 min-w-[60%] flex flex-col gap-4 overflow-visible">
        {players
          .sort((a, b) => b.score - a.score)
          .map((player) => (
            <PlayerCard
              key={player.name}
              name={player.name}
              score={player.score}
              nickname={player.nickname}
              index={players.indexOf(player)}
            />
          ))}
        <PlayerAddForm />
      </ul>
    </div>
  );
}

export default PlayerList;
