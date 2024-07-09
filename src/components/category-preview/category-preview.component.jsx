import React from 'react';
import {
  CategoryPreviewContainer,
  Title,
  PreviewGrid,
} from './category-preview.styles.jsx';
import { ProductCard } from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Link to={title}>
        <h2>
          <Title>{title.toUpperCase()}</Title>
        </h2>
      </Link>
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
