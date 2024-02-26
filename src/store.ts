import { create } from "zustand";
import { useLocalStorage } from "./hooks/useLocalStorage";

export type Player = {
  name: string;
  nickname?: string;
  score: number;
};

type GameStore = {
  players: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (player: Player) => void;
  removeAllPlayers: () => void;
  gameStarted: boolean;
  startGame: () => void;
  endGame: () => void;
};

const { getItem } = useLocalStorage("gameStart");
const savedGame = getItem();

export const useGameStore = create<GameStore>((set) => ({
  players: savedGame.players || [],
  addPlayer: (player: Player) =>
    set((state) => ({ players: [...state.players, player] })),
  removePlayer: (player: Player) =>
    set((state) => ({
      players: state.players.filter((p) => p.name !== player.name),
    })),
  removeAllPlayers: () => set({ players: [] }),
  gameStarted: savedGame.gameStarted || false,
  startGame: () => set({ gameStarted: true }),
  endGame: () => set({ gameStarted: false }),
}));
