import { CheckOutlined, HomeOutlined } from '@ant-design/icons';
import { Drawer, message } from 'antd';
import { useEffect, useState } from 'react';
import {
  Description,
  ConfirmButton,
  DrawerContent,
  CategoryTag,
  CategoryTags,
  OpenDrawerButton,
  OptionButton,
  OptionCheck,
  OptionLabel,
  OptionList,
  StyledCategoryCard,
} from './CategoryCard.style';

type CategoryCardProps = {
  selectedCategoryLabels: string[];
  allCategories: { key: string; label: string }[];
  selectedCategoryKeys: string[];
  onConfirmCategories: (nextKeys: string[]) => void;
};

function CategoryCard({
  selectedCategoryLabels,
  allCategories,
  selectedCategoryKeys,
  onConfirmCategories,
}: CategoryCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [localSelectedKeys, setLocalSelectedKeys] = useState<string[]>(
    selectedCategoryKeys,
  );

  useEffect(() => {
    if (isDrawerOpen) {
      setLocalSelectedKeys(selectedCategoryKeys);
    }
  }, [isDrawerOpen, selectedCategoryKeys]);

  const toggleCategory = (categoryKey: string) => {
    setLocalSelectedKeys((prevKeys) => {
      if (prevKeys.includes(categoryKey)) {
        return prevKeys.filter((item) => item !== categoryKey);
      }

      return [...prevKeys, categoryKey];
    });
  };

  const handleConfirm = () => {
    if (localSelectedKeys.length === 0) {
      message.warning('Chọn ít nhất một chủ đề');
      return;
    }

    onConfirmCategories(localSelectedKeys);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <StyledCategoryCard
        title="Chủ đề"
        extra={
          <OpenDrawerButton type="text" onClick={() => setIsDrawerOpen(true)}>
            Mở
          </OpenDrawerButton>
        }
      >
        <CategoryTags>
          {selectedCategoryLabels.map((categoryLabel) => (
            <CategoryTag key={categoryLabel} icon={<HomeOutlined />}>
              {categoryLabel}
            </CategoryTag>
          ))}
        </CategoryTags>
      </StyledCategoryCard>

      <Drawer
        title="Chọn danh mục"
        open={isDrawerOpen}
        placement="bottom"
        height="60vh"
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerContent>
          <Description>Chọn một hoặc nhiều danh mục cho game</Description>
          <OptionList>
            {allCategories.map((category) => {
              const isActive = localSelectedKeys.includes(category.key);

              return (
                <OptionButton
                  key={category.key}
                  type="default"
                  $active={isActive}
                  onClick={() => toggleCategory(category.key)}
                >
                  <OptionLabel>{category.label}</OptionLabel>
                  <OptionCheck>{isActive ? <CheckOutlined /> : null}</OptionCheck>
                </OptionButton>
              );
            })}
          </OptionList>

          <ConfirmButton type="primary" onClick={handleConfirm}>
            Xác nhận
          </ConfirmButton>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CategoryCard;
