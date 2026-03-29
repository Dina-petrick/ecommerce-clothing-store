import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';
const errorColor = '#b00020';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${({ $error }) => ($error ? errorColor : subColor)};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid
    ${({ $hasError }) => ($hasError ? errorColor : subColor)};
  margin: 25px 0 6px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const FieldError = styled.span`
  display: block;
  font-size: 12px;
  color: ${errorColor};
  line-height: 1.35;
  margin-bottom: 4px;
`;

export const Group = styled.div`
  position: relative;
  margin: ${({ $hasError }) => ($hasError ? '28px 0' : '36px 0')};

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
