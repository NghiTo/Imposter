import styled from 'styled-components';

export const DrawerContent = styled.div`
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
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
