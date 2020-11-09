import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-white);
  padding: 16px;
  width: 100%;
  height: 40px;
  margin: 10px 0 21px 0;

  border: 1px solid var(--color-input-border);
  color: var(--color-black);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid var(--color-input-error);
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid var(--color-text-primary-nav-active);
      color: var(--color-text-primary-nav-active);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-black);

    &::placeholder {
      color: var(--color-black);
    }
  }

  svg {
    margin-left: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--color-input-error);
    color: var(--color-white);

    &::before {
      border-color: var(--color-input-error) transparent;
    }
  }
`;
