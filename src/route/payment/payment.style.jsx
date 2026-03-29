import styled from 'styled-components';

export const PaymentPageContainer = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding: 24px 24px 48px;
  box-sizing: border-box;

  @media (max-width: 576px) {
    padding: 16px 16px 40px;
  }
`;

export const BackLink = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin-bottom: 20px;
  font-size: 15px;
  color: #333;
  cursor: pointer;
  font-family: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: #000;
  }

  &:focus-visible {
    outline: 2px solid #333;
    outline-offset: 3px;
  }
`;

export const OrderSummary = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  padding: 14px 16px;
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  line-height: 1.5;
`;
