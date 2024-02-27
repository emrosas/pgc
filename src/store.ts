import { create } from "zustand";
import { useLocalStorage } from "./hooks/useLocalStorage";

export type Player = {
  name: string;
  nickname?: string;
  score: number;
  index?: number;
};

type GameStore = {
  players: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (name: string) => void;
  removeAllPlayers: () => void;
  addPoints: (name: string, points: number) => void;
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
  removePlayer: (name: string) =>
    set((state) => ({
      players: state.players.filter((p) => p.name !== name),
    })),
  removeAllPlayers: () => set({ players: [] }),
  addPoints: (name: string, points: number) =>
    set((state) => ({
      players: state.players.map((p) =>
        p.name === name ? { ...p, score: p.score + points } : p
      ),
    })),
  gameStarted: savedGame.gameStarted || false,
  startGame: () => set({ gameStarted: true }),
  endGame: () => set({ gameStarted: false }),
}));
