import { HomeOutlined } from '@ant-design/icons';
import {
  CategoryTag,
  CategoryTags,
  StyledCategoryCard,
} from './CategoryCard.style';

function CategoryCard() {
  return (
    <StyledCategoryCard title="Danh mục">
      <CategoryTags>
        <CategoryTag icon={<HomeOutlined />}>Đồ vật hàng ngày</CategoryTag>
      </CategoryTags>
    </StyledCategoryCard>
  );
}

export default CategoryCard;
