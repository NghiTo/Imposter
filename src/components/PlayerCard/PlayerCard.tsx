import { useState } from 'react';
import {
  OpenDrawerButton,
  PlayerTag,
  PlayerTags,
  StyledPlayerCard,
} from './PlayerCard.style';
import PlayerEditDrawer from '../PlayerEditDrawer/PlayerEditDrawer';

function PlayerCard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const players = ['Người chơi 1', 'Người chơi 2', 'Người chơi 3'];

  return (
    <>
      <StyledPlayerCard
        title="Người chơi"
        extra={
          <OpenDrawerButton type="text" onClick={() => setIsDrawerOpen(true)}>
            Mở
          </OpenDrawerButton>
        }
      >
        <PlayerTags>
          {players.map((player) => (
            <PlayerTag key={player}>{player}</PlayerTag>
          ))}
        </PlayerTags>
      </StyledPlayerCard>

      <PlayerEditDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}

export default PlayerCard;
