import styled from 'styled-components';
import { Button, Input } from 'antd';

export const DrawerContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

export const InputSection = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 12px;
`;

export const PrimaryDescription = styled.p`
  margin: 0;
  color: hsl(0deg 0% 0%);
  font-size: 0.95rem;
  font-weight: 400;
`;

export const SecondaryDescription = styled.p`
  margin: 0;
  color: hsl(0deg 0% 45%);
  font-size: 0.92rem;
  font-weight: 400;
`;

export const InputList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 150px;
  overflow-y: auto;
  padding-right: 2px;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PlayerInput = styled(Input)`
  flex: 1;
  height: 38px;

  .ant-input-prefix {
    color: hsl(0deg 0% 45%);
  }
`;

export const RemovePlayerButton = styled(Button)`
  color: #ff4d4f;

  &:hover,
  &:focus {
    color: #cf1322;
  }
`;

export const AddPlayerRow = styled.div`
  width: 100%;
  position: relative;
`;

export const NewPlayerInput = styled(Input)`
  width: 100%;
  height: 38px;

  &.ant-input {
    border-color: #fadb14;
    padding-right: 44px;
  }

  &.ant-input:focus,
  &.ant-input:focus-within,
  &.ant-input-focused {
    border-color: #fadb14;
    box-shadow: 0 0 0 2px rgba(250, 219, 20, 0.18);
  }
`;

export const AddPlayerButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 30px;
  min-width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid #fadb14;
  background: #fadb14;
  color: hsl(0deg 0% 20%);

  &:hover,
  &:focus {
    border-color: #facc14;
    background: #facc14;
    color: hsl(0deg 0% 10%);
  }

  &:disabled,
  &.ant-btn-disabled {
    border-color: #f6e58d;
    background: #f6e58d;
    color: rgba(0, 0, 0, 0.35);
  }
`;

export const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  height: 42px;
  font-weight: 600;
`;
