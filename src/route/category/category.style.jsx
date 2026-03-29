import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryHeaderRow = styled.div`
  margin-bottom: 20px;
`;

export const BackToShopLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  color: #333;
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 6px 0;
  font-family: 'Open Sans Condensed', sans-serif;

  &:hover {
    color: #000;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    row-gap: 28px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(28px, 4vw, 38px);
  margin-bottom: 28px;
  margin-top: 0;
  text-align: center;
  letter-spacing: 0.02em;
`;
