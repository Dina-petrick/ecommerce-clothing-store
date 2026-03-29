import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 16px 24px;
  }
`;
