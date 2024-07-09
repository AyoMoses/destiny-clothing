import { CategoryPreview } from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import { renderSkeletons } from '../../utils/skeleton.utils';
import { SkeletonContainer } from '../category/category.styles';

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <SkeletonContainer>
          {renderSkeletons(Object.keys(categoriesMap).length || 8)}
          
        </SkeletonContainer>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};
