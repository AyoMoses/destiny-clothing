import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const CategoryLink = styled(Link)`
  max-width: max-content;
`;
export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  width: auto;
  color: #dc0073;
  padding-left: 25px;
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  div:not(:last-child) {
    margin-bottom: 70px;
    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 55px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
