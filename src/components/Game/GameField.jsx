import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { getRandomNumber } from "./utils";

function GameField({ result, resetGame }) {
  const { gameState, dispatch} = useContext(GameContext);
  const { maxNumbers, range, isPlaying, score } = gameState;
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const randomNumbers = [];
    if (isPlaying) {
      for (let i = 0; i < maxNumbers; i++) {
        randomNumbers.push(getRandomNumber(range.min - 100, range.max + 100));
      }
      randomNumbers[getRandomNumber(0, maxNumbers - 1)] = result;
      setNumbers(randomNumbers);
    }
  }, [result]);

  function checkUserAnswer(userAnswer) {
    if (userAnswer == result) {
      dispatch({ type: "UPDATE_GAME", payload: { score: score+1 } })
      resetGame();
    } else {
      dispatch({ type: "END_GAME", payload: { score } })
    }
  }

  return (
    <div className="game-field">
      {numbers.map((num, index) => (
        <div className="game-field__number" onClick={() => checkUserAnswer(num)} key={index}>
          {num}
        </div>
      ))}
    </div>
  );
}

export default GameField;
