import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { ProductCard } from '../../components/product-card/product-card.component';

export const Category = () => {
  // destructure and get the name used in shop component to get dynamic route
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/* only render if products are gotten from firestore API with the && guard */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
