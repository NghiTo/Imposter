import { useState } from 'react';
import {
  Description,
  Heading,
  KeywordValue,
  NewGameButton,
  RevealButton,
  RevealText,
  ScreenShell,
} from './GameDiscussionScreen.style';

type GameDiscussionScreenProps = {
  starterName: string;
  imposterName: string;
  secretWord: string;
  onNewGame: () => void;
};

function GameDiscussionScreen({
  starterName,
  imposterName,
  secretWord,
  onNewGame,
}: GameDiscussionScreenProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <ScreenShell aria-label="Game discussion screen">
      <Heading>Game bắt đầu! Giờ là lúc trò chuyện và tìm ra imposter.</Heading>
      <Description>{`${starterName} bắt đầu cuộc trò chuyện`}</Description>

      <RevealButton type="primary" onClick={() => setIsRevealed(true)}>
        Tiết lộ imposter & từ khóa
      </RevealButton>

      {isRevealed ? (
        <RevealText>
          Imposter: {imposterName} | Từ khóa: <KeywordValue>{secretWord}</KeywordValue>
        </RevealText>
      ) : null}

      <NewGameButton onClick={onNewGame}>Game mới</NewGameButton>
    </ScreenShell>
  );
}

export default GameDiscussionScreen;
