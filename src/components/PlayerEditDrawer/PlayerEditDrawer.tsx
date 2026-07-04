import { Drawer } from 'antd';
import {
  DrawerContent,
  PrimaryDescription,
  SecondaryDescription,
} from './PlayerEditDrawer.style';

type PlayerEditDrawerProps = {
  open: boolean;
  onClose: () => void;
};

function PlayerEditDrawer({ open, onClose }: PlayerEditDrawerProps) {
  return (
    <Drawer
      title="CHỈNH SỬA NGƯỜI CHƠI"
      open={open}
      placement="bottom"
      height={320}
      onClose={onClose}
    >
      <DrawerContent>
        <PrimaryDescription>3-20 người chơi</PrimaryDescription>
        <SecondaryDescription>Chạm vào tên để chỉnh sửa</SecondaryDescription>
      </DrawerContent>
    </Drawer>
  );
}

export default PlayerEditDrawer;
