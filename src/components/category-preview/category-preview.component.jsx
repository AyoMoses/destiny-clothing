import React from 'react';
import {
  CategoryPreviewContainer,
  Title,
  CategoryLink,
  PreviewGrid,
} from './category-preview.styles.jsx';
import { ProductCard } from '../product-card/product-card.component';

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryLink to={title}>
        <Title>{title.toUpperCase()}</Title>
      </CategoryLink>
      <PreviewGrid>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewGrid>
    </CategoryPreviewContainer>
  );
};
