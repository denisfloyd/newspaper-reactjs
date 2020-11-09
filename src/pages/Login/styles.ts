import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 113px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const FormLoginArea = styled.div`
  margin-top: 63px;
  width: 242px;
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    font-size: 14px;
  }
`;

export const ButtonForm = styled.button`
  width: 100%;
  height: 52px;
  background-color: var(--color-button-primary);
  color: var(--color-white);
  font-size: 16px;
  border: 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-button-primary-hover);
  }
`;
