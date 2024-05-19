import React from 'react';
import { Link } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  ItemTitle,
  ItemLink
} from './directory-item.styles.jsx';

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <ItemLink to={`/shop/${title}`}>
      <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <ItemTitle>{title}</ItemTitle>
          <p>shop now</p>
        </Body>
      </DirectoryItemContainer>
    </ItemLink>
  );
};
