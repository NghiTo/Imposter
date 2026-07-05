import { useState } from 'react';
import { Drawer } from 'antd';
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
  onPlayerNameChange: (index: number, nextName: string) => void;
  onRemovePlayer: (index: number) => void;
  onAddPlayer: (playerName: string) => void;
};

function PlayerEditDrawer({
  open,
  onClose,
  players,
  onPlayerNameChange,
  onRemovePlayer,
  onAddPlayer,
}: PlayerEditDrawerProps) {
  const [newPlayerName, setNewPlayerName] = useState('');

  const trimmedNewPlayerName = newPlayerName.trim();

  const handleAddPlayer = () => {
    if (!trimmedNewPlayerName) {
      return;
    }

    onAddPlayer(trimmedNewPlayerName);
    setNewPlayerName('');
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
            {players.map((player, index) => (
              <InputRow key={`player-${index}`}>
                <PlayerInput
                  prefix={<EditOutlined />}
                  value={player}
                  onChange={(event) =>
                    onPlayerNameChange(index, event.target.value)
                  }
                />
                <RemovePlayerButton
                  type="text"
                  aria-label={`Xoa ${player}`}
                  onClick={() => onRemovePlayer(index)}
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
          <ConfirmButton type="primary" onClick={onClose}>
            Xác nhận
          </ConfirmButton>
        </ActionSection>
      </DrawerContent>
    </Drawer>
  );
}

export default PlayerEditDrawer;
