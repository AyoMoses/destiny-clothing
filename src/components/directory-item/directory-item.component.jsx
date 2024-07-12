import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  ItemTitle,
  ItemLink,
} from './directory-item.styles.jsx';

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigationHandler = () => navigate(route);

  return (
    <ItemLink onClick={onNavigationHandler}>
      <DirectoryItemContainer>
        <BackgroundImage $imageUrl={imageUrl} />
        <Body>
          <ItemTitle>{title}</ItemTitle>
          <p>shop now</p>
        </Body>
      </DirectoryItemContainer>
    </ItemLink>
  );
};
