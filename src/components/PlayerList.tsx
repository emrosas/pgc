import { useGameStore } from "../store";
import PlayerCard from "./PlayerCard";
import PlayerAddForm from "./PlayerAddForm";

function PlayerList() {
  const players = useGameStore((state) => state.players);
  return (
    <div className="h-full overflow-scroll row-start-2 col-span-4 py-page">
      <ul className=" list-none p-0 m-0 min-w-[60%] flex flex-col gap-4">
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
