import { useState } from 'react';
import {
  AppShell,
  Brand,
  CardsSection,
  GlobalStyle,
  StartGameButton,
} from './App.style';
import PlayerCard from './components/PlayerCard/PlayerCard';
import CategoryCard from './components/CategoryCard/CategoryCard';
import ImposterCard from './components/ImposterCard/ImposterCard';
import GameRevealScreen from './components/GameRevealScreen/GameRevealScreen';
import GameDiscussionScreen from './components/GameDiscussionScreen/GameDiscussionScreen';
import { dailyObjectWordBankVi } from './data/wordBank';

type CategoryKey = 'daily-objects';

const CATEGORY_SETTINGS: Record<
  CategoryKey,
  { label: string; words: { word: string; hint: string }[] }
> = {
  'daily-objects': {
    label: 'Đồ vật hàng ngày',
    words: dailyObjectWordBankVi,
  },
};

function App() {
  const [players, setPlayers] = useState([
    'Người chơi 1',
    'Người chơi 2',
    'Người chơi 3',
  ]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isDiscussionStarted, setIsDiscussionStarted] = useState(false);
  const [secretWord, setSecretWord] = useState('');
  const [secretHint, setSecretHint] = useState('');
  const [imposterPlayerIndex, setImposterPlayerIndex] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [discussionStarterName, setDiscussionStarterName] =
    useState('Người chơi 1');
  const [selectedCategory] = useState<CategoryKey>('daily-objects');

  const handleConfirmPlayers = (nextPlayers: string[]) => {
    setPlayers(nextPlayers);
  };

  const handleStartGame = () => {
    const currentCategory = CATEGORY_SETTINGS[selectedCategory];
    const randomIndex = Math.floor(Math.random() * currentCategory.words.length);
    const selectedWord = currentCategory.words[randomIndex];
    const randomImposterIndex =
      players.length > 1
        ? 1 + Math.floor(Math.random() * (players.length - 1))
        : 0;

    setSecretWord(selectedWord.word);
    setSecretHint(selectedWord.hint);
    setImposterPlayerIndex(randomImposterIndex);
    setCurrentPlayerIndex(0);
    setIsDiscussionStarted(false);
    setIsGameStarted(true);
  };

  const handleNextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) =>
      Math.min(prevIndex + 1, players.length - 1),
    );
  };

  const handleStartDiscussion = () => {
    const candidateIndexes = players
      .map((_, index) => index)
      .filter((index) => index !== imposterPlayerIndex);

    const randomStarterIndex =
      candidateIndexes.length > 0
        ? candidateIndexes[Math.floor(Math.random() * candidateIndexes.length)]
        : 0;

    setDiscussionStarterName(players[randomStarterIndex] ?? 'Người chơi 1');
    setIsGameStarted(false);
    setIsDiscussionStarted(true);
  };

  const handleNewGame = () => {
    setIsDiscussionStarted(false);
    setIsGameStarted(false);
    setCurrentPlayerIndex(0);
  };

  if (isDiscussionStarted) {
    return (
      <>
        <GlobalStyle />
        <GameDiscussionScreen
          starterName={discussionStarterName}
          imposterName={players[imposterPlayerIndex] ?? 'Người chơi 2'}
          secretWord={secretWord}
          onNewGame={handleNewGame}
        />
      </>
    );
  }

  if (isGameStarted) {
    return (
      <>
        <GlobalStyle />
        <GameRevealScreen
          playerName={players[currentPlayerIndex] ?? 'Người chơi 1'}
          secretWord={secretWord}
          secretHint={secretHint}
          isImposter={currentPlayerIndex === imposterPlayerIndex}
          onExit={() => setIsGameStarted(false)}
          canGoNext={currentPlayerIndex < players.length - 1}
          onNextPlayer={handleNextPlayer}
          onStartDiscussion={handleStartDiscussion}
        />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <AppShell aria-label="Imposter">
        <CardsSection>
          <Brand>IMPOSTER</Brand>
          <PlayerCard
            players={players}
            onConfirmPlayers={handleConfirmPlayers}
          />
          <CategoryCard categoryLabel={CATEGORY_SETTINGS[selectedCategory].label} />
          <ImposterCard playerCount={players.length} />
          <StartGameButton type="primary" onClick={handleStartGame}>
            Start Game
          </StartGameButton>
        </CardsSection>
      </AppShell>
    </>
  );
}

export default App;
