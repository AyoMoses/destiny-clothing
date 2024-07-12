import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  ItemTitle,
  ItemLink,
} from './directory-item.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const onNavigationHandler = () => {
    if (currentUser) {
      navigate(route);
    } else {
      navigate('/auth');
    }
  };

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
