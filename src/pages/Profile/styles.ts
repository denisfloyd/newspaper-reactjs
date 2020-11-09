import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

interface InterestCheckProps {
  name: string;
  selected: boolean;
}

interface ColorArrayToInterests {
  [key: string]: string;
}

const colorInterests: ColorArrayToInterests = {
  politics: `var(--color-type-politics)`,
  tech: `var(--color-type-tech)`,
  business: `var(--color-type-business)`,
  sports: `var(--color-type-sports)`,
  science: `var(--color-type-science)`,
};

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

    strong {
      margin-left: 5px;
      color: var(--color-text-primary-nav-active);
    }
  }

  > a {
    color: var(--color-button-primary);
    cursor: pointer;
    text-decoration: none;
    margin-top: 27px;
  }
`;

export const InterestArea = styled.div`
  display: inline-block;
  margin-top: 61px;

  > p {
    margin-left: 14px;
  }
`;

export const InterestItems = styled.div`
  margin-top: 19px;
  display: flex;
  flex-wrap: wrap;
`;

export const InterestCheck = styled(Button)<InterestCheckProps>`
  &.MuiButton-root {
    margin: 19px 0 0 14px;
    border-radius: 20px;

    /* background: var(--color-white); */
    padding: 6px 18px;
    line-height: 1;
    letter-spacing: 0;
    font-family: 'Lato', sans-serif;

    &:hover {
      background-color: var(--color-interest-button-hover);
    }

    ${props =>
      props.name &&
      css`
        background-color: var(--color-white);
        border: 1px solid ${colorInterests[props.name]};
        color: ${colorInterests[props.name]};
      `}

    ${props =>
      props.selected
        ? css`
            border: 1px solid ${colorInterests[props.name]};
            color: var(--color-white);
            background-color: ${colorInterests[props.name]};
          `
        : css`
            border: 1px solid ${colorInterests[props.name]};
            color: ${colorInterests[props.name]};
            background-color: var(--color-white);
          `}
  }
`;

export const ButtonForm = styled.button`
  width: 100%;
  max-width: 242px;
  margin-top: 52px;
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
