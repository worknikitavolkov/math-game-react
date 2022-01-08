import ProgressBar from "./ProgressBar";

function GameHeader({expression, score, maxTime, time}) {

  return (
    <div className="game-header">
      <h1 className="game-header__title">Solve The Expression</h1>
      <h2 className="game-header__expression">{expression}</h2>
      <div className="game-header__progress">
        <ProgressBar
          containerColor="#f0ecff"
          progressColor="#ff0000"
          currentValue={time}
          maxValue={maxTime}
        />
      </div>
      <div className="game-header__score">Score: {score}</div>
    </div>
  );
}

export default GameHeader;
