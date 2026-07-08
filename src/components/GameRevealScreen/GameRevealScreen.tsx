import { useEffect, useState } from 'react';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import {
  CardBack,
  CardCloseButton,
  CardFace,
  CardFlipper,
  CardInstruction,
  NextPlayerButton,
  CardStage,
  Description,
  HintText,
  ImposterMessage,
  PlayerHeading,
  ScreenShell,
  SecretWord,
} from './GameRevealScreen.style';

type GameRevealScreenProps = {
  playerName: string;
  secretWord: string;
  secretHint: string;
  isImposter: boolean;
  onExit: () => void;
  canGoNext: boolean;
  onNextPlayer: () => void;
  onStartDiscussion: () => void;
};

function GameRevealScreen({
  playerName,
  secretWord,
  secretHint,
  isImposter,
  onExit,
  canGoNext,
  onNextPlayer,
  onStartDiscussion,
}: GameRevealScreenProps) {
  const [isHolding, setIsHolding] = useState(false);
  const [hasHeldOnce, setHasHeldOnce] = useState(false);

  useEffect(() => {
    setIsHolding(false);
    setHasHeldOnce(false);
  }, [playerName]);

  const handleHoldStart = () => {
    setIsHolding(true);
    setHasHeldOnce(true);
  };

  return (
    <ScreenShell aria-label="Game reveal screen">
      <CardCloseButton
        type="text"
        icon={<CloseOutlined />}
        aria-label="Thoat man choi"
        onClick={onExit}
      />

      <CardStage
        onPointerDown={handleHoldStart}
        onPointerUp={() => setIsHolding(false)}
        onPointerLeave={() => setIsHolding(false)}
        onPointerCancel={() => setIsHolding(false)}
      >
        <CardFlipper $flipped={isHolding}>
          <CardFace>
            <PlayerHeading>{playerName}</PlayerHeading>
            <Description>"Đừng nói từ này cho người chơi khác"</Description>
            <CardInstruction>Giữ để hiển thị</CardInstruction>
          </CardFace>

          <CardBack>
            <PlayerHeading>{playerName}</PlayerHeading>
            {isImposter ? (
              <>
                <ImposterMessage>Bạn là imposter</ImposterMessage>
                <HintText>{`Gợi ý: ${secretHint}`}</HintText>
              </>
            ) : (
              <>
                <Description>Từ khóa của bạn</Description>
                <SecretWord>{secretWord}</SecretWord>
              </>
            )}
          </CardBack>
        </CardFlipper>
      </CardStage>

      <NextPlayerButton
        type="primary"
        icon={<ArrowRightOutlined />}
        onClick={canGoNext ? onNextPlayer : onStartDiscussion}
        $visible={hasHeldOnce}
      >
        {canGoNext ? 'Người tiếp theo' : 'Bắt đầu game'}
      </NextPlayerButton>
    </ScreenShell>
  );
}

export default GameRevealScreen;
