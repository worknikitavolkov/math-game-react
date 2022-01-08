import React, { useState, useContext, useEffect } from "react";

import { generateExpression } from "./utils";
import { GameContext } from "../../contexts/GameContext";
import GameHeader from "./GameHeader";
import GameField from "./GameField";

let timerId = null;

function Game() {
  const { gameState, dispatch } = useContext(GameContext);
  const { isPlaying, range, maxTime, score } = gameState;

  const [expression, setExpression] = useState();
  const [result, setResult] = useState();
  const [time, setTime] = useState(maxTime);

  const generateNew = () => {
    const { expression, result } = generateExpression(range);
    setResult(result);
    setExpression(expression);
  };

  function clear() {
    clearInterval(timerId);
    setTime(maxTime);
  }

  function startProgressBar() {
    let progress = maxTime;
    timerId = setInterval(() => {
      if (progress-- > 0) {
        setTime(progress);
      } else {
        clear();
        dispatch({ type: "END_GAME", payload: { score } });
      }
    }, 1000)
  }

  function resetGame() {
    clear();
    generateNew();
    startProgressBar();
  }

  useEffect(() => {
    if (isPlaying) {
      resetGame();
    } else {
      clear();
    }
  }, [isPlaying]);

  return (
    <div>
      <GameHeader
        time={time}
        maxTime={maxTime}
        score={score}
        expression={expression}
      />
      <GameField result={result} resetGame={resetGame} />
    </div>
  );
}

export default Game;
