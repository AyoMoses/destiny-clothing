import React from 'react';

import './directory.styles.scss';

import { CategoryItem } from '../categoryItem/category-item.component';

export const Directory = ({ categories }) => {
  return (
    <div>
      <div className='directory-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
