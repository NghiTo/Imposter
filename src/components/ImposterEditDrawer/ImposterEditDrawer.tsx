import { Drawer } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {
  ConfirmButton,
  Description,
  DrawerContent,
  OptionButton,
  OptionCheck,
  OptionLabel,
  OptionList,
} from './ImposterEditDrawer.style';

type ImposterEditDrawerProps = {
  open: boolean;
  onClose: () => void;
  playerCount: number;
  selectedCount: number;
  onSelectCount: (count: number) => void;
};

function getMaxImposterCount(playerCount: number) {
  if (playerCount >= 9) {
    return 3;
  }

  if (playerCount >= 6) {
    return 2;
  }

  return 1;
}

function getDescription(playerCount: number) {
  if (playerCount >= 9) {
    return 'Với 9 người chơi trở lên, bạn có thể có 3 imposters';
  }

  if (playerCount >= 6) {
    return 'Với 6-8 người chơi, bạn có thể có 2 imposters';
  }

  return 'Với 3-5 người chơi, bạn có thể có 1 imposter';
}

function ImposterEditDrawer({
  open,
  onClose,
  playerCount,
  selectedCount,
  onSelectCount,
}: ImposterEditDrawerProps) {
  const maxImposterCount = getMaxImposterCount(playerCount);
  const description = getDescription(playerCount);

  return (
    <Drawer
      title="Chọn số lượng imposter"
      open={open}
      placement="bottom"
      size="auto"
      onClose={onClose}
    >
      <DrawerContent>
        <Description>{description}</Description>

        <OptionList>
          {Array.from({ length: maxImposterCount }, (_, index) => {
            const optionValue = index + 1;
            const isActive = selectedCount === optionValue;
            const optionLabel = optionValue > 1 ? 'imposters' : 'imposter';

            return (
              <OptionButton
                key={optionValue}
                type="default"
                onClick={() => onSelectCount(optionValue)}
              >
                <OptionLabel>{`${optionValue} ${optionLabel}`}</OptionLabel>
                <OptionCheck>
                  {isActive ? <CheckOutlined /> : null}
                </OptionCheck>
              </OptionButton>
            );
          })}
        </OptionList>

        <ConfirmButton type="primary" onClick={onClose}>
          Xác nhận
        </ConfirmButton>
      </DrawerContent>
    </Drawer>
  );
}

export { getMaxImposterCount };
export default ImposterEditDrawer;
