import { Button } from 'antd';
import styled from 'styled-components';

export const DrawerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Description = styled.p`
  margin: 0;
  color: hsl(0deg 0% 35%);
  font-size: 0.95rem;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OptionButton = styled(Button)`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: hsl(0deg 0% 20%);

  &:hover,
  &:focus {
    background: #ffffff;
    color: hsl(0deg 0% 15%);
  }
`;

export const OptionLabel = styled.span`
  font-weight: 500;
`;

export const OptionCheck = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: hsl(0deg 0% 15%);
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  height: 42px;
  margin-top: 8px;
  font-weight: 600;
`;
