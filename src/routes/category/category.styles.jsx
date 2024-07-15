import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: left;
`;

export const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 2rem;
`;
