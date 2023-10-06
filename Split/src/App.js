import './App.css';
import StartPage from './startPage';
import InfoPage from './infoPage';
import MultiplayerPage from './multiplayerPage';
import WinnerPage from './winnerPage';
import BotPage from './botPage';

function App() {

  return (
    <div className="mainPage">

      <StartPage />
      <InfoPage />
      <MultiplayerPage />
      <BotPage />

    </div>
  );
}

export default App;
