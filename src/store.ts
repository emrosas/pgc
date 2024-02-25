import { create } from "zustand";

type Player = {
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

export const useGameStore = create<GameStore>((set) => ({
  players: [],
  addPlayer: (player: Player) =>
    set((state) => ({ players: [...state.players, player] })),
  removePlayer: (player: Player) =>
    set((state) => ({
      players: state.players.filter((p) => p.name !== player.name),
    })),
  removeAllPlayers: () => set({ players: [] }),
  gameStarted: false,
  startGame: () => set({ gameStarted: true }),
  endGame: () => set({ gameStarted: false }),
}));
