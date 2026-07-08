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
`;

export const CardStage = styled.div`
  width: 92vw;
  max-width: 460px;
  min-height: 380px;
  perspective: 1100px;
  position: relative;
`;

export const CardFlipper = styled.div<{ $flipped: boolean }>`
  position: relative;
  width: 100%;
  min-height: 380px;
  transform-style: preserve-3d;
  transition: transform 0.42s ease;
  transform: ${(props) => (props.$flipped ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
`;

const BaseCardFace = styled.article`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.9)),
    linear-gradient(120deg, #ff4d4f 0%, #ffa940 24%, #fadb14 45%, #73d13d 62%, #36cfc9 78%, #597ef7 100%);
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.14);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  text-align: center;
  backface-visibility: hidden;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const CardFace = styled(BaseCardFace)`
  justify-content: flex-start;

  & > h2 {
    margin-top: auto;
  }

  & > p:last-child {
    margin-top: auto;
  }
`;

export const CardBack = styled(BaseCardFace)`
  transform: rotateY(-180deg);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.9)),
    linear-gradient(130deg, #722ed1 0%, #13c2c2 24%, #52c41a 45%, #fadb14 64%, #fa8c16 82%, #f5222d 100%);
`;

export const CardCloseButton = styled(Button)`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 20;
  width: 46px;
  min-width: 46px;
  height: 46px;
  padding: 0;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.9);
  color: hsl(0deg 0% 10%);
  font-size: 1.15rem;

  &:hover,
  &:focus {
    color: hsl(0deg 0% 0%);
    border-color: #ffffff;
    background: #ffffff;
  }
`;

export const PlayerHeading = styled.h2`
  margin: 0;
  color: hsl(0deg 0% 20%);
  font-size: 1.6rem;
`;

export const Description = styled.p`
  margin: 0;
  color: hsl(0deg 0% 24%);
  font-size: 0.98rem;
`;

export const CardInstruction = styled.p`
  margin: 0;
  color: hsl(0deg 0% 18%);
  font-size: 1rem;
  font-weight: 600;
`;

export const SecretWord = styled.p`
  margin: 6px 0 0;
  color: hsl(0deg 0% 18%);
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ImposterMessage = styled.p`
  margin: 6px 0 0;
  color: #cf1322;
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

export const HintText = styled.p`
  margin: 0;
  color: hsl(0deg 0% 18%);
  font-size: 1.05rem;
  font-weight: 600;
`;

export const NextPlayerButton = styled(Button)<{ $visible: boolean }>`
  width: fit-content;
  min-width: 0;
  height: 52px;
  margin-top: 14px;
  padding: 0 26px;
  border-radius: 16px;
  font-weight: 600;
  border-color: #111111;
  background: #111111;
  color: #ffffff;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  transition: opacity 0.2s ease;

  &:hover,
  &:focus {
    border-color: #000000;
    background: #000000;
    color: #ffffff;
  }
`;
