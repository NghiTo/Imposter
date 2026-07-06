import { useEffect, useState } from 'react';
import { Drawer, message } from 'antd';
import { CloseOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionSection,
  AddPlayerButton,
  AddPlayerRow,
  ConfirmButton,
  DescriptionSection,
  DrawerContent,
  InputSection,
  NewPlayerInput,
  InputList,
  InputRow,
  PlayerInput,
  RemovePlayerButton,
  PrimaryDescription,
  SecondaryDescription,
} from './PlayerEditDrawer.style';

type PlayerEditDrawerProps = {
  open: boolean;
  onClose: () => void;
  players: string[];
  onConfirmPlayers: (nextPlayers: string[]) => void;
};

function PlayerEditDrawer({
  open,
  onClose,
  players,
  onConfirmPlayers,
}: PlayerEditDrawerProps) {
  const [localPlayers, setLocalPlayers] = useState(players);
  const [newPlayerName, setNewPlayerName] = useState('');

  useEffect(() => {
    if (open) {
      setLocalPlayers(players);
      setNewPlayerName('');
    }
  }, [open, players]);

  const trimmedNewPlayerName = newPlayerName.trim();

  const handleAddPlayer = () => {
    if (!trimmedNewPlayerName) {
      return;
    }

    const hasDuplicateName = localPlayers.some(
      (player) => player.trim().toLowerCase() === trimmedNewPlayerName.toLowerCase(),
    );

    if (hasDuplicateName) {
      message.warning('Tên người chơi không được trùng nhau');
      return;
    }

    setLocalPlayers((prevPlayers) => [...prevPlayers, trimmedNewPlayerName]);
    setNewPlayerName('');
  };

  const handlePlayerNameChange = (index: number, nextName: string) => {
    setLocalPlayers((prevPlayers) =>
      prevPlayers.map((player, playerIndex) =>
        playerIndex === index ? nextName : player,
      ),
    );
  };

  const handleRemovePlayer = (index: number) => {
    setLocalPlayers((prevPlayers) => {
      if (prevPlayers.length <= 3) {
        message.warning('Bạn cần ít nhất 3 người chơi để bắt đầu game');
        return prevPlayers;
      }

      return prevPlayers.filter((_, playerIndex) => playerIndex !== index);
    });
  };

  const handleConfirm = () => {
    const normalizedPlayers = localPlayers.map((player) => player.trim());
    const hasEmptyPlayer = normalizedPlayers.some((player) => player.length === 0);
    const normalizedNames = normalizedPlayers.map((player) => player.toLowerCase());
    const hasDuplicatePlayer =
      new Set(normalizedNames).size !== normalizedNames.length;

    if (hasEmptyPlayer) {
      message.warning('Tên người chơi không được để trống');
      return;
    }

    if (hasDuplicatePlayer) {
      message.warning('Tên người chơi không được trùng nhau');
      return;
    }

    onConfirmPlayers(normalizedPlayers);
    onClose();
  };

  return (
    <Drawer
      title="CHỈNH SỬA NGƯỜI CHƠI"
      open={open}
      placement="bottom"
      size="auto"
      onClose={onClose}
    >
      <DrawerContent>
        <DescriptionSection>
          <PrimaryDescription>3-20 người chơi</PrimaryDescription>
          <SecondaryDescription>Chạm vào tên để chỉnh sửa</SecondaryDescription>
        </DescriptionSection>

        <InputSection>
          <InputList>
            {localPlayers.map((player, index) => (
              <InputRow key={`player-${index}`}>
                <PlayerInput
                  prefix={<EditOutlined />}
                  value={player}
                  onChange={(event) => handlePlayerNameChange(index, event.target.value)}
                />
                <RemovePlayerButton
                  type="text"
                  aria-label={`Xoa ${player}`}
                  onClick={() => handleRemovePlayer(index)}
                  icon={<CloseOutlined />}
                />
              </InputRow>
            ))}
          </InputList>
        </InputSection>

        <ActionSection>
          <AddPlayerRow>
            <NewPlayerInput
              placeholder="Thêm tên người chơi"
              value={newPlayerName}
              onChange={(event) => setNewPlayerName(event.target.value)}
            />
            <AddPlayerButton
              type="default"
              aria-label="Them nguoi choi"
              icon={<PlusOutlined />}
              disabled={!trimmedNewPlayerName}
              onClick={handleAddPlayer}
            />
          </AddPlayerRow>
          <ConfirmButton type="primary" onClick={handleConfirm}>
            Xác nhận
          </ConfirmButton>
        </ActionSection>
      </DrawerContent>
    </Drawer>
  );
}

export default PlayerEditDrawer;
