import { Button, Card, Tag } from 'antd';
import styled from 'styled-components';

export const StyledCategoryCard = styled(Card)`
  width: 90vw;
  max-width: 430px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.14);

  .ant-card-body {
    min-height: 120px;
  }
`;

export const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CategoryTag = styled(Tag)`
  margin-inline-end: 0;
  padding: 4px 10px;
`;

export const OpenDrawerButton = styled(Button)`
  font-weight: 500;
`;

export const DrawerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
`;

export const Description = styled.p`
  margin: 0;
  color: hsl(0deg 0% 35%);
  font-size: 0.95rem;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(60vh - 220px);
  overflow-y: auto;
  padding-right: 6px;
`;

export const OptionButton = styled(Button)<{ $active: boolean }>`
  width: 100%;
  height: 58px;
  padding: 8px;
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
  font-size: 1.05rem;
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
