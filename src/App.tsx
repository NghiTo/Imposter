import { useState } from 'react';
import { message } from 'antd';
import { AppShell, Brand, GlobalStyle } from './App.style';
import PlayerCard from './components/PlayerCard/PlayerCard';
import CategoryCard from './components/CategoryCard/CategoryCard';
import ImposterCard from './components/ImposterCard/ImposterCard';

function App() {
  const [players, setPlayers] = useState([
    'Người chơi 1',
    'Người chơi 2',
    'Người chơi 3',
  ]);

  const handlePlayerNameChange = (index: number, nextName: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, playerIndex) =>
        playerIndex === index ? nextName : player,
      ),
    );
  };

  const handleRemovePlayer = (index: number) => {
    setPlayers((prevPlayers) => {
      if (prevPlayers.length <= 3) {
        message.warning('Bạn cần ít nhất 3 người chơi để bắt đầu game');
        return prevPlayers;
      }

      return prevPlayers.filter((_, playerIndex) => playerIndex !== index);
    });
  };

  const handleAddPlayer = (playerName: string) => {
    setPlayers((prevPlayers) => [...prevPlayers, playerName]);
  };

  return (
    <>
      <GlobalStyle />
      <AppShell aria-label="Imposter">
        <Brand>IMPOSTER</Brand>
        <PlayerCard
          players={players}
          onPlayerNameChange={handlePlayerNameChange}
          onRemovePlayer={handleRemovePlayer}
          onAddPlayer={handleAddPlayer}
        />
        <CategoryCard />
        <ImposterCard playerCount={players.length} />
      </AppShell>
    </>
  );
}

export default App;
