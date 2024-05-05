import React from 'react';

import { DirectoryContainer } from './directory.styles.jsx';

import { DirectoryItem } from '../directory-item/directory-item.component';

export const Directory = ({ categories }) => {
  return (
    <div>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};
