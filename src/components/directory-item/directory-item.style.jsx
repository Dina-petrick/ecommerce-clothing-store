import styled from 'styled-components';

export const DirectoryMedia = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  img {
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.85;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  position: relative;
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${DirectoryMedia} img {
      transform: scale(1.1);
    }

    ${Body} {
      opacity: 0.95;
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;
