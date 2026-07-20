import styled, { createGlobalStyle } from 'styled-components';
import { Button, Input, Modal } from 'antd';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap');

  body {
    margin: 0;
    background: hsl(0deg 0% 93.73%);
    font-family: 'Chakra Petch', 'Segoe UI', sans-serif;
  }

  #root {
    width: 100vw;
    min-height: 100svh;
  }
`;

export const AppShell = styled.main`
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const CardsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Brand = styled.h1`
  margin: 0;
  width: 66.667%;
  text-align: center;
  color: hsl(0deg 0% 40%);
  font-size: 2rem;
  letter-spacing: 0.16em;
  font-weight: 600;
`;

export const StartGameButton = styled(Button)`
  width: 90vw;
  max-width: 430px;
  height: 44px;
  font-weight: 600;
`;

export const LogoutButton = styled(Button)`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 20;
  height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  font-weight: 600;
`;

export const PasswordGateModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
    padding: 8px;
  }

  .ant-modal-header {
    border-radius: 20px 20px 0 0;
  }
`;

export const PasswordField = styled(Input.Password)`
  height: 46px;
  padding-inline: 6px;
  border-radius: 14px;
`;

export const PasswordSubmitButton = styled(Button)`
  width: 100%;
  height: 46px;
  padding-inline: 18px;
  border-radius: 14px;
  font-weight: 600;
`;

export const PasswordError = styled.p`
  margin: 0;
  color: #cf1322;
  font-size: 0.95rem;
  font-weight: 600;
`;
