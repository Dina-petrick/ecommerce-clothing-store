import styled from 'styled-components';

export const PaymentWrap = styled.section`
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid #ddd;
`;

export const PaymentTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
`;

export const PaymentHint = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 20px;
  max-width: 520px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const FullRow = styled.div`
  grid-column: 1 / -1;
`;

export const PayButton = styled.button`
  margin-top: 8px;
  width: 100%;
  max-width: 520px;
  height: 54px;
  background: #111;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: #333;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
  }
`;

export const ErrorBanner = styled.div`
  max-width: 520px;
  padding: 12px 14px;
  margin-bottom: 16px;
  background: #fff4f4;
  border: 1px solid #e8b4b4;
  color: #8b1a1a;
  font-size: 14px;
  border-radius: 4px;
`;
