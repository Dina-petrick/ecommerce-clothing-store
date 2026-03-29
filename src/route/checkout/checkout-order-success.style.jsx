import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SuccessWrap = styled.div`
  text-align: left;
  max-width: 520px;
  margin: 0 auto;
  padding: 32px 0 48px;
`;

export const SuccessPanel = styled.div`
  padding: 28px 24px;
  border: 1px solid #c8e6c9;
  background: #f1f8f2;
  border-radius: 6px;
`;

export const SuccessTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 12px;
  color: #1b5e20;
  font-weight: 600;
`;

export const SuccessMeta = styled.p`
  font-size: 15px;
  color: #333;
  margin: 8px 0;
  line-height: 1.5;
`;

export const Mono = styled.span`
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 14px;
`;

export const DemoNote = styled.p`
  margin-top: 20px;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
`;

export const ContinueLink = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  padding: 12px 28px;
  background: #111;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: #333;
  }
`;
