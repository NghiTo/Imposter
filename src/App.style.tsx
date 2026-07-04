import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: hsl(0deg 0% 93.73%);
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
