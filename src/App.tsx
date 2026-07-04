import { AppShell, Brand, GlobalStyle } from './App.style';
import PlayerCard from './components/PlayerCard/PlayerCard';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppShell aria-label="Imposter">
        <Brand>IMPOSTER</Brand>
        <PlayerCard />
      </AppShell>
    </>
  );
}

export default App;
