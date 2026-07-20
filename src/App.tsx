import { useEffect, useState } from 'react';
import {
  AppShell,
  Brand,
  CardsSection,
  GlobalStyle,
  PasswordField,
  PasswordGateModal,
  PasswordSubmitButton,
  LogoutButton,
  StartGameButton,
} from './App.style';
import { Form, message } from 'antd';
import PlayerCard from './components/PlayerCard/PlayerCard';
import CategoryCard from './components/CategoryCard/CategoryCard';
import ImposterCard from './components/ImposterCard/ImposterCard';
import GameRevealScreen from './components/GameRevealScreen/GameRevealScreen';
import GameDiscussionScreen from './components/GameDiscussionScreen/GameDiscussionScreen';
import { categoryWordBankMapVi } from './data/wordBank';

type CategoryKey = keyof typeof categoryWordBankMapVi;

const CATEGORY_SETTINGS: Record<
  CategoryKey,
  { label: string; words: { word: string; hint: string }[] }
> = {
  'daily-objects': {
    label: 'Đồ vật hàng ngày',
    words: categoryWordBankMapVi['daily-objects'],
  },
  celebrities: {
    label: 'Người nổi tiếng',
    words: categoryWordBankMapVi.celebrities,
  },
  'food-drinks': {
    label: 'Đồ ăn và thức uống',
    words: categoryWordBankMapVi['food-drinks'],
  },
  animals: {
    label: 'Động vật',
    words: categoryWordBankMapVi.animals,
  },
  'brands-logos': {
    label: 'Thương hiệu và logo',
    words: categoryWordBankMapVi['brands-logos'],
  },
  'colors-shapes': {
    label: 'Màu sắc và hình dạng',
    words: categoryWordBankMapVi['colors-shapes'],
  },
  'countries-cities': {
    label: 'Quốc gia và thành phố',
    words: categoryWordBankMapVi['countries-cities'],
  },
  'emotions-feelings': {
    label: 'Cảm xúc và cảm giác',
    words: categoryWordBankMapVi['emotions-feelings'],
  },
  'hobbies-activities': {
    label: 'Sở thích và hoạt động',
    words: categoryWordBankMapVi['hobbies-activities'],
  },
  'internet-culture': {
    label: 'Văn hóa internet',
    words: categoryWordBankMapVi['internet-culture'],
  },
  'cooking-kitchen': {
    label: 'Nấu ăn và nhà bếp',
    words: categoryWordBankMapVi['cooking-kitchen'],
  },
  'movies-tv': {
    label: 'Phim và chương trình truyền hình',
    words: categoryWordBankMapVi['movies-tv'],
  },
  'music-bands': {
    label: 'Âm nhạc và ban nhạc',
    words: categoryWordBankMapVi['music-bands'],
  },
  professions: {
    label: 'Nghề nghiệp',
    words: categoryWordBankMapVi.professions,
  },
  'school-education': {
    label: 'Trường học và giáo dục',
    words: categoryWordBankMapVi['school-education'],
  },
  'science-technology': {
    label: 'Khoa học và công nghệ',
    words: categoryWordBankMapVi['science-technology'],
  },
  sports: {
    label: 'Thể thao',
    words: categoryWordBankMapVi.sports,
  },
  superheroes: {
    label: 'Siêu anh hùng',
    words: categoryWordBankMapVi.superheroes,
  },
  transportation: {
    label: 'Phương tiện giao thông',
    words: categoryWordBankMapVi.transportation,
  },
  'video-games': {
    label: 'Trò chơi điện tử',
    words: categoryWordBankMapVi['video-games'],
  },
  'weather-nature': {
    label: 'Thời tiết và thiên nhiên',
    words: categoryWordBankMapVi['weather-nature'],
  },
};

const DEFAULT_CATEGORY_KEYS: CategoryKey[] = [
  'daily-objects',
  'celebrities',
  'food-drinks',
];

const DEFAULT_PLAYERS = ['Người chơi 1', 'Người chơi 2', 'Người chơi 3'];

const PASSWORD_STORAGE_KEY = 'imposter-unlocked';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return window.localStorage.getItem(PASSWORD_STORAGE_KEY) === 'true';
  });
  const [players, setPlayers] = useState(DEFAULT_PLAYERS);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isDiscussionStarted, setIsDiscussionStarted] = useState(false);
  const [secretWord, setSecretWord] = useState('');
  const [secretHint, setSecretHint] = useState('');
  const [imposterPlayerIndex, setImposterPlayerIndex] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [discussionStarterName, setDiscussionStarterName] =
    useState('Người chơi 1');
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>(
    DEFAULT_CATEGORY_KEYS,
  );
  const [passwordForm] = Form.useForm();

  const handleConfirmPlayers = (nextPlayers: string[]) => {
    setPlayers(nextPlayers);
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    window.localStorage.setItem(PASSWORD_STORAGE_KEY, 'true');
    passwordForm.resetFields();
    message.success('Đăng nhập thành công');
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    window.localStorage.removeItem(PASSWORD_STORAGE_KEY);
    setPlayers(DEFAULT_PLAYERS);
    setSelectedCategories(DEFAULT_CATEGORY_KEYS);
    setIsGameStarted(false);
    setIsDiscussionStarted(false);
    setCurrentPlayerIndex(0);
    setSecretWord('');
    setSecretHint('');
    setImposterPlayerIndex(0);
    setDiscussionStarterName('Người chơi 1');
    passwordForm.resetFields();
  };

  useEffect(() => {
    if (!isUnlocked) {
      passwordForm.resetFields();
    }
  }, [isUnlocked, passwordForm]);

  if (!isUnlocked) {
    return (
      <>
        <GlobalStyle />
        <PasswordGateModal
          open
          centered
          closable={false}
          maskClosable={false}
          keyboard={false}
          title="Nhập mật khẩu"
          footer={null}
        >
          <Form
            form={passwordForm}
            layout="vertical"
            onFinish={handleUnlock}
          >
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu' },
                {
                  validator: async (_, value: string) => {
                    if (!value || value === 'rocmanx4') {
                      return;
                    }

                    throw new Error('Mật khẩu không đúng');
                  },
                },
              ]}
              validateTrigger={['onSubmit', 'onBlur']}
              style={{ marginBottom: 16 }}
            >
              <PasswordField placeholder="Nhập mật khẩu để vào game" autoFocus />
            </Form.Item>

            <PasswordSubmitButton type="primary" htmlType="submit">
              Vào trang chính
            </PasswordSubmitButton>
          </Form>
        </PasswordGateModal>
      </>
    );
  }

  const handleStartGame = () => {
    const wordPool = selectedCategories.flatMap(
      (categoryKey) => CATEGORY_SETTINGS[categoryKey].words,
    );

    if (wordPool.length === 0) {
      message.warning('Vui lòng chọn ít nhất một chủ đề');
      return;
    }

    const randomIndex = Math.floor(Math.random() * wordPool.length);
    const selectedWord = wordPool[randomIndex];
    const randomImposterIndex =
      players.length > 0 ? Math.floor(Math.random() * players.length) : 0;

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
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        <CardsSection>
          <Brand>IMPOSTER</Brand>
          <PlayerCard
            players={players}
            onConfirmPlayers={handleConfirmPlayers}
          />
          <CategoryCard
            selectedCategoryLabels={selectedCategories.map(
              (categoryKey) => CATEGORY_SETTINGS[categoryKey].label,
            )}
            selectedCategoryKeys={selectedCategories}
            allCategories={(Object.keys(CATEGORY_SETTINGS) as CategoryKey[]).map(
              (categoryKey) => ({
                key: categoryKey,
                label: CATEGORY_SETTINGS[categoryKey].label,
              }),
            )}
            onConfirmCategories={(nextKeys) =>
              setSelectedCategories(nextKeys as CategoryKey[])
            }
          />
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
