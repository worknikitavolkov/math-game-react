import React, { createContext, useReducer, useEffect } from "react";
import { gameReducer } from "../reducers/GameReducer";

export const GameContext = createContext();

const state = {
  range: { min: -150, max: 150 },
  score: 0,
  bestScore: { easy: 0, medium: 0, hard: 0 },
  isPlaying: false,
  maxTime: 10,
  maxNumbers: 6,
  mode: "easy",
};

const GameContextProvider = (props) => {
  const [gameState, dispatch] = useReducer(gameReducer, state, () => {
    const value = localStorage.getItem("bestScore");
    const bestScore = value ? JSON.parse(value) : state.bestScore;
    return { ...state, bestScore };
  });
  useEffect(() => {
    localStorage.setItem("bestScore", JSON.stringify(gameState.bestScore));
  }, [gameState.bestScore]);
  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
