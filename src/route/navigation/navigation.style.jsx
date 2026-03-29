import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 8px 0 0;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    height: auto;
    min-height: 64px;
    padding: 12px 8px 12px 0;
  }
`;

export const LogoContainer = styled(Link)`
  padding-left: 25px;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    max-height: 36px;
    width: auto;
  }

  @media (max-width: 480px) {
    padding-left: 16px;
  }
`;

export const NavLinkContainer = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 4px 0;

  @media (max-width: 480px) {
    max-width: 60%;
    justify-content: flex-end;
  }
`;

const navItemCss = `
  padding-inline: clamp(12px, 2vw, 20px);
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 0.03em;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.75;
  }
`;

export const NavLink = styled(Link)`
  ${navItemCss}
`;

export const NavTextButton = styled.button`
  ${navItemCss}
  border: none;
  background: none;
  font: inherit;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
`;

export const ModalDialog = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  padding: 24px 24px 20px;
  border-radius: 8px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px;
  color: #111;
`;

export const ModalText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  margin: 0 0 24px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #111;
  transition: background 0.15s ease, color 0.15s ease;

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 2px;
  }
`;

export const ModalCancelButton = styled(ModalButton)`
  background: #fff;
  color: #111;

  &:hover {
    background: #f5f5f5;
  }
`;

export const ModalConfirmButton = styled(ModalButton)`
  background: #111;
  color: #fff;

  &:hover {
    background: #333;
    border-color: #333;
  }
`;
