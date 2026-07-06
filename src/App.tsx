import { useState } from 'react';
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

  const handleConfirmPlayers = (nextPlayers: string[]) => {
    setPlayers(nextPlayers);
  };

  return (
    <>
      <GlobalStyle />
      <AppShell aria-label="Imposter">
        <Brand>IMPOSTER</Brand>
        <PlayerCard
          players={players}
          onConfirmPlayers={handleConfirmPlayers}
        />
        <CategoryCard />
        <ImposterCard playerCount={players.length} />
      </AppShell>
    </>
  );
}

export default App;
