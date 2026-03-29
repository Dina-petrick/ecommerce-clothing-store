import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 88px;
  margin-bottom: 15px;
  gap: 12px;
`;

export const ThumbWrap = styled.div`
  flex: 0 0 72px;
  width: 72px;
  height: 72px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: #ececec;
  border: 1px solid #e0e0e0;
`;

export const ItemDetails = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4px 8px 4px 0;
`;

export const Name = styled.p`
  font-size: 15px;
  line-height: 1.35;
  margin: 0 0 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceLine = styled.p`
  font-size: 14px;
  color: #444;
  margin: 0;
`;

export const RemoveBtn = styled.button`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #999;
  }

  &:focus-visible {
    outline: 2px solid #333;
    outline-offset: 2px;
  }
`;
