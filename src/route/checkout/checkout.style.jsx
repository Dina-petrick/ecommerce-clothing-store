import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 40px auto 0;
  padding: 0 24px 48px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 24px;
    padding: 0 16px 32px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 600;
  font-size: 15px;
  color: #333;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  flex: 0 0 23%;
  max-width: 23%;
  box-sizing: border-box;
  padding-right: 8px;

  &:last-child {
    flex: 0 0 8%;
    max-width: 8%;
    padding-right: 0;
    text-align: center;
  }
`;

export const Total = styled.span`
  margin-top: 32px;
  margin-left: auto;
  font-size: clamp(26px, 5vw, 36px);
  font-weight: 600;
`;

export const EmptyCartWrap = styled.div`
  text-align: center;
  padding: 48px 24px;
  max-width: 420px;
  margin: 0 auto;
`;

export const EmptyTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const EmptyText = styled.p`
  color: #555;
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const ShopLink = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  background: #111;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }
`;

export const CheckoutActions = styled.div`
  margin-top: 36px;
  padding-top: 28px;
  border-top: 1px solid #ddd;
  text-align: center;
`;

export const AuthHint = styled.p`
  font-size: 15px;
  color: #555;
  margin-bottom: 16px;
  line-height: 1.5;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProceedToPaymentLink = styled(Link)`
  display: inline-block;
  padding: 14px 36px;
  background: #111;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid #111;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #fff;
    color: #111;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
  }
`;
