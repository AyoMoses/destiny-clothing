import { useContext, useState, useEffect } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { ProductCard } from '../../components/product-card/product-card.component';

export const Category = () => {
  // destructure and get the name used in shop component to get dynamic route
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      {/* only render if products are gotten from firestore API with the && guard */}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
