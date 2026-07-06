import { Card, Tag } from 'antd';
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
