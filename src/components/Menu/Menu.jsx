import React, { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";

function Menu() {
  const { gameState, dispatch } = useContext(GameContext);
  const { score, bestScore, isPlaying, mode } = gameState;

  const [radioMode, setRadioMode] = useState(mode);

  const startGameHandler = () => {
    let range, maxTime, maxNumbers;
    if (radioMode === "hard") {
      range = { min: -400, max: 400 };
      maxTime = 6;
      maxNumbers = 8;
    } else if (radioMode === "medium") {
      range = { min: -300, max: 300 };
      maxTime = 8;
      maxNumbers = 8;
    } else {
      range = { min: -150, max: 150 };
      maxTime = 10;
      maxNumbers = 6;
    }
    dispatch({
      type: "START_GAME",
      payload: { mode: radioMode, range, maxTime, maxNumbers },
    });
  };

  const changeModeHandler = (e) => {
    setRadioMode(e.target.value);
  };

  return (
    <div className={`menu ${isPlaying ? "menu--hidden" : ""}`}>
      <div className="menu__content">
        <h1 className="menu__content__title">Math Game</h1>
        <p className="menu__content__description">
          In this game you should solve math expressions for a certain time to
          score as many points as possible
        </p>
        <div className="menu__content__score">
          <p>Current score: {score}</p>
          <p>
            The best score: easy - {bestScore.easy}, medium - {bestScore.medium}{" "},
            hard - {bestScore.hard}
          </p>
        </div>
        <div className="menu__content__mode">
          <label htmlFor="mode">Select mode: </label>
          <input
            onChange={changeModeHandler}
            type="radio"
            value="easy"
            name="mode"
            checked={radioMode === "easy"}
          />
          {" Easy"}
          <input
            onChange={changeModeHandler}
            type="radio"
            value="medium"
            name="mode"
            checked={radioMode === "medium"}
          />
          {" Medium"}
          <input
            onChange={changeModeHandler}
            type="radio"
            value="hard"
            name="mode"
            checked={radioMode === "hard"}
          />
          {" Hard"}
        </div>
        <button onClick={startGameHandler} className="menu__content__button">
          Start
        </button>
      </div>
    </div>
  );
}

export default Menu;
