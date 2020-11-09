import styled from 'styled-components';

export const Container = styled.div`
  border: 4px solid var(--color-type-tech);
  border-top: 4px solid var(--color-type-politics);
  border-right: 4px solid var(--color-type-science);
  border-bottom: 4px solid var(--color-type-sports);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
