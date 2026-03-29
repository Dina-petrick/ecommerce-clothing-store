import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ececec;
`;

export const Shimmer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    90deg,
    #e8e8e8 0%,
    #f5f5f5 45%,
    #e8e8e8 90%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.35s ease-in-out infinite;
  pointer-events: none;
  transition: opacity 0.35s ease;
  opacity: ${({ $hide }) => ($hide ? 0 : 1)};
`;

export const StyledImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.4s ease;
  z-index: 2;
`;

export const BrokenFallback = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #888;
  text-align: center;
  padding: 8px;
  background: #f0f0f0;
  z-index: 2;
`;
