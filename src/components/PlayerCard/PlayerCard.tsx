import { useState } from 'react';
import { message } from 'antd';
import {
  OpenDrawerButton,
  PlayerTag,
  PlayerTags,
  StyledPlayerCard,
} from './PlayerCard.style';
import PlayerEditDrawer from '../PlayerEditDrawer/PlayerEditDrawer';

function PlayerCard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [players, setPlayers] = useState([
    'Người chơi 1',
    'Người chơi 2',
    'Người chơi 3',
  ]);

  const handlePlayerNameChange = (index: number, nextName: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, playerIndex) =>
        playerIndex === index ? nextName : player,
      ),
    );
  };

  const handleRemovePlayer = (index: number) => {
    setPlayers((prevPlayers) => {
      if (prevPlayers.length <= 3) {
        message.warning('Bạn cần ít nhất 3 người chơi để bắt đầu game');
        return prevPlayers;
      }

      return prevPlayers.filter((_, playerIndex) => playerIndex !== index);
    });
  };

  const handleAddPlayer = (playerName: string) => {
    setPlayers((prevPlayers) => [...prevPlayers, playerName]);
  };

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
        onPlayerNameChange={handlePlayerNameChange}
        onRemovePlayer={handleRemovePlayer}
        onAddPlayer={handleAddPlayer}
      />
    </>
  );
}

export default PlayerCard;
