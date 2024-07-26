import React from 'react';
import {
  CategoryPreviewContainer,
  Title,
  CategoryLink,
  PreviewGrid,
} from './category-preview.styles';
import { ProductCard } from '../product-card/product-card.component';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type CategoryPreviewProps = {
  title: string;
  products: Product[];
};

export const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
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
