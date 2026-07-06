import { useState } from 'react';
import {
  OpenDrawerButton,
  PlayerTag,
  PlayerTags,
  StyledPlayerCard,
} from './PlayerCard.style';
import PlayerEditDrawer from '../PlayerEditDrawer/PlayerEditDrawer';

type PlayerCardProps = {
  players: string[];
  onConfirmPlayers: (nextPlayers: string[]) => void;
};

function PlayerCard({ players, onConfirmPlayers }: PlayerCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          {players.map((player, index) => (
            <PlayerTag key={`${player}-${index}`}>{player}</PlayerTag>
          ))}
        </PlayerTags>
      </StyledPlayerCard>

      <PlayerEditDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        players={players}
        onConfirmPlayers={onConfirmPlayers}
      />
    </>
  );
}

export default PlayerCard;
