import styled, { keyframes, css } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const shimmerStyles = css`
  background: linear-gradient(
    90deg,
    #e8e8e8 0%,
    #f4f4f4 45%,
    #e8e8e8 90%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.35s ease-in-out infinite;
`;

export const SkeletonBar = styled.div`
  ${shimmerStyles}
  border-radius: 4px;
  height: ${({ $h }) => $h || '12px'};
  width: ${({ $w }) => $w || '100%'};
  margin-bottom: ${({ $mb }) => $mb || '0'};
`;

export const ProductCardSkeletonBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  margin-bottom: 14px;
`;

export const SkeletonImage = styled.div`
  ${shimmerStyles}
  width: 100%;
  height: 280px;
  margin-bottom: 8px;
  border-radius: 2px;
`;

export const SkeletonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`;

export const CartControlsSkeleton = styled.div`
  margin-top: 8px;
  width: 100%;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 16px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

export const TitleSkeleton = styled.div`
  ${shimmerStyles}
  height: 32px;
  width: 220px;
  max-width: 60%;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const ShopPageWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px 48px;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  padding: 48px 24px;
  color: #555;
  font-size: 16px;
`;
