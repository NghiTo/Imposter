import { HomeOutlined } from '@ant-design/icons';
import {
  CategoryTag,
  CategoryTags,
  StyledCategoryCard,
} from './CategoryCard.style';

type CategoryCardProps = {
  categoryLabel: string;
};

function CategoryCard({ categoryLabel }: CategoryCardProps) {
  return (
    <StyledCategoryCard title="Danh mục">
      <CategoryTags>
        <CategoryTag icon={<HomeOutlined />}>{categoryLabel}</CategoryTag>
      </CategoryTags>
    </StyledCategoryCard>
  );
}

export default CategoryCard;
