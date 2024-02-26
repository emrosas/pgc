import React from "react";
import { useGameStore } from "../store";
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayerAddForm from "./PlayerAddForm";

function PlayerList() {
  const players = useGameStore((state) => state.players);
  return (
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
  );
}

export default PlayerList;
