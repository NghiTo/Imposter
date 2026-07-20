import { useState } from 'react';
import { Modal } from 'antd';
import {
  Description,
  HighlightName,
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

  const handleReveal = () => {
    Modal.confirm({
      title: 'Xác nhận tiết lộ',
      content: 'Sau khi tiết lộ, toàn bộ người chơi sẽ thấy thông tin imposter và từ khóa.',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      centered: true,
      onOk: () => setIsRevealed(true),
    });
  };

  return (
    <ScreenShell aria-label="Game discussion screen">
      <Heading>Game bắt đầu! Giờ là lúc trò chuyện và tìm ra imposter.</Heading>
      <Description>
        <HighlightName>{starterName}</HighlightName> bắt đầu cuộc trò chuyện
      </Description>

      {isRevealed ? (
        <RevealText>
          Imposter: {imposterName} | Từ khóa: <KeywordValue>{secretWord}</KeywordValue>
        </RevealText>
      ) : (
        <RevealButton type="primary" onClick={handleReveal}>
          Tiết lộ imposter & từ khóa
        </RevealButton>
      )}

      <NewGameButton onClick={onNewGame}>Game mới</NewGameButton>
    </ScreenShell>
  );
}

export default GameDiscussionScreen;
