import styled from 'styled-components';

export const ProductImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  margin-bottom: 10px;
  background: #ececec;
  border-radius: 4px;

  &:hover img {
    opacity: 0.95;
  }
`;

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  margin-bottom: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  font-size: 17px;
  margin-bottom: 12px;
  min-height: 44px;
`;

export const Name = styled.span`
  flex: 1;
  line-height: 1.35;
`;

export const Price = styled.span`
  flex-shrink: 0;
  font-weight: 600;
  font-size: 18px;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  height: 46px;
  padding: 0 16px;
  background: #111;
  color: #fff;
  border: 2px solid #111;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: #fff;
    color: #111;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
  }
`;

export const QtyStepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 100%;
  height: 46px;
  border: 2px solid #111;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
`;

export const StepBtn = styled.button`
  flex: 0 0 44px;
  height: 100%;
  border: none;
  background: #f5f5f5;
  color: #111;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;

  &:hover {
    background: #e8e8e8;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: -2px;
    z-index: 1;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const QtyDisplay = styled.div`
  flex: 1;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  padding: 0 8px;
  min-width: 0;
`;

export const QtySub = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #666;
  margin-top: 2px;
`;
