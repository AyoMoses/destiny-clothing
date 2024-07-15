import styled from 'styled-components';

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 2rem;
`;
