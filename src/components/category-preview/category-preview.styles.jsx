import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryLink = styled(Link)`
  max-width: max-content;
`;
export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  width: auto;
  color: ${({ theme }) => theme.colors.fontCol};
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
