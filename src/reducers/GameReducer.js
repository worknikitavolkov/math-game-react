export const gameReducer = (state, action) => {
  const data = action.payload;

  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        range: data.range,
        maxTime: data.maxTime,
        maxNumbers: data.maxNumbers,
        mode: data.mode,
        isPlaying: true,
        score: 0,
      };
    case "UPDATE_GAME":
      return {
        ...state,
        score: data.score,
      };
    case "END_GAME":
      return {
        ...state,
        score: data.score,
        isPlaying: false,
        bestScore:
          data.score > state.bestScore[state.mode]
            ? { ...state.bestScore, [state.mode]: data.score }
            : state.bestScore,
      };
    default:
      return state;
  }
};
