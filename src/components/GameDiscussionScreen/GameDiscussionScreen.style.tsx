import styled from 'styled-components';
import { Button } from 'antd';

export const ScreenShell = styled.section`
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
`;

export const Heading = styled.h1`
  margin: 0;
  color: hsl(0deg 0% 18%);
  font-size: 1.55rem;
  line-height: 1.3;
`;

export const Description = styled.p`
  margin: 0;
  color: hsl(0deg 0% 30%);
  font-size: 1rem;
`;

export const RevealButton = styled(Button)`
  width: fit-content;
  min-width: 0;
  height: 48px;
  padding: 0 20px;
  border-radius: 14px;
  font-weight: 600;
`;

export const NewGameButton = styled(Button)`
  width: fit-content;
  min-width: 0;
  height: 48px;
  padding: 0 20px;
  border-radius: 14px;
  font-weight: 600;
`;

export const RevealText = styled.p`
  margin: 2px 0 0;
  color: hsl(0deg 0% 20%);
  font-size: 1rem;
  font-weight: 600;
`;

export const KeywordValue = styled.span`
  color: hsl(0deg 78% 52%);
`;
