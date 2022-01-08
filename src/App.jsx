import "./styles/index.scss";
import GameContextProvider from "./contexts/GameContext";
import Menu from "./components/Menu/Menu";
import Game from "./components/Game/Game";

function App() {
  return (
    <GameContextProvider>
      <Menu />
      <Game />
    </GameContextProvider>
  );
}

export default App;
