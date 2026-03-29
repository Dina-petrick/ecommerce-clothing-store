import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid #c4c4c4;
  padding: 15px 0;
  font-size: 18px;
  align-items: center;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  flex: 0 0 23%;
  max-width: 23%;
  padding-right: 12px;
  position: relative;
  aspect-ratio: 1;
  max-height: 120px;
  background: #ececec;
  border-radius: 4px;
  overflow: hidden;
`;

export const BaseSpan = styled.span`
  flex: 0 0 23%;
  max-width: 23%;
  min-width: 0;
  line-height: 1.35;
  padding-right: 8px;
  box-sizing: border-box;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  flex: 0 0 23%;
  max-width: 23%;
  box-sizing: border-box;
`;

export const ArrowBtn = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;

  &:hover {
    background: #f5f5f5;
  }

  &:focus-visible {
    outline: 2px solid #333;
    outline-offset: 2px;
  }
`;

export const Value = styled.span`
  margin: 0 8px;
  min-width: 24px;
  text-align: center;
  font-variant-numeric: tabular-nums;
`;

export const RemoveCol = styled.div`
  flex: 0 0 8%;
  max-width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 22px;
  line-height: 1;
  color: #666;
  border-radius: 4px;

  &:hover {
    color: #111;
    background: #f0f0f0;
  }

  &:focus-visible {
    outline: 2px solid #333;
    outline-offset: 2px;
  }
`;
