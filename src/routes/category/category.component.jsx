import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';

import { ProductCard } from '../../components/product-card/product-card.component';
import { renderSkeletons } from '../../utils/skeleton.utils';

import { SkeletonContainer } from './category.styles';
import { CategoryContainer, CategoryTitle } from './category.styles';

export const Category = () => {
  // destructure and get the name used in shop component to get dynamic route
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <SkeletonContainer>
          {renderSkeletons(products ? products.length : 7)}
        </SkeletonContainer>
      ) : (
        <CategoryContainer>
          {/* only render if products are gotten from firestore API with the && guard */}
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};
