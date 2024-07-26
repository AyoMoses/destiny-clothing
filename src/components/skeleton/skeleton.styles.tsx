import styled, { keyframes, css } from 'styled-components';

const shine = keyframes`
  to {
    background-position: right -40px top 0;
  }
`;

const skeletonStyles = css`
  background-color: #e2e5e7;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: ${shine} 1s ease infinite;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

export const CardImage = styled.div`
  padding-bottom: 76.25%;
  position: relative;
  &.skeleton {
    min-height: 28px;
    ${skeletonStyles}
  }
`;

export const CardBody = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.33;
  font-weight: 700;

  &.skeleton {
    min-height: 28px;
    ${skeletonStyles}
  }
`;

export const CardIntro = styled.p`
  &.skeleton {
    min-height: 20px;
    ${skeletonStyles}
  }
`;

export const CardImageSkeleton = styled.div`
  &.skeleton {
    ${skeletonStyles}
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;
