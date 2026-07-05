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
  onPlayerNameChange: (index: number, nextName: string) => void;
  onRemovePlayer: (index: number) => void;
  onAddPlayer: (playerName: string) => void;
};

function PlayerCard({
  players,
  onPlayerNameChange,
  onRemovePlayer,
  onAddPlayer,
}: PlayerCardProps) {
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
        onPlayerNameChange={onPlayerNameChange}
        onRemovePlayer={onRemovePlayer}
        onAddPlayer={onAddPlayer}
      />
    </>
  );
}

export default PlayerCard;
