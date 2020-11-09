/* eslint-disable indent */
import styled, { css } from 'styled-components';

interface ContainerProps {
  heading?: boolean;
}

interface NewsTypeProps {
  type: string;
}

interface NewsAuthorProps {
  heading?: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex: 1 1 20%;
  margin: 30px 15px 26px;
  max-width: 33%;

  > p {
    margin-top: 20px;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Open sans', sans-serif;
    color: var(--color-text-secondary);
  }

  > h2 {
    font-size: 17px;
    color: var(--color-black);
  }

  > img {
    width: 100%;
    margin-bottom: 15px;
  }

  ${props =>
    props.heading &&
    css`
      max-width: 50%;
      flex: 1 1 45%;

      > h2 {
        font-size: 29px;
      }

      .buttonImageNews {
        font-size: 18px;
        padding: 12px 32px;
      }
    `}

  @media screen and (max-width: 1170px) {
    flex: 1 1 45%;
    max-width: 48%;

    ${props =>
      props.heading &&
      css`
        max-width: 100%;
        flex: 0 1 100%;
      `}
  }

  @media screen and (max-width: 750px) {
    flex: 1 1 100%;
    max-width: 100%;

    ${props =>
      props.heading &&
      css`
        > h2 {
          font-size: 17px;
        }
      `}
  }
`;

const handleColorType = (type: string) => {
  switch (type) {
    case 'tech':
      return 'var(--color-type-tech)';
    case 'politics':
      return 'var(--color-type-politics)';
    case 'sports':
      return 'var(--color-type-science)';
    default:
      return 'var(--color-type-sports)';
  }
};

export const NewsType = styled.div<NewsTypeProps>`
  margin-bottom: 8px;

  span {
    font-size: 10px;
    text-transform: uppercase;
    color: ${({ type }) => handleColorType(type)};
  }
`;

export const NewsImage = styled.div`
  position: relative;
  margin-bottom: 15px;

  img {
    width: 100%;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: opacity 0.5s ease;
  }

  > div {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

    button {
      padding: 9px 21px;
      font-size: 14px;
      background-color: var(--color-black-translucent);
      color: var(--color-white);
      border: 1px solid var(--color-white);
    }
  }

  &:hover img {
    opacity: 0.9;
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const NewsAuthor = styled.div<NewsAuthorProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    ${props =>
      props.heading &&
      css`
        width: 45px;
        height: 45px;
      `}

    @media screen and (max-width: 750px) {
      width: 32px;
      height: 32px;
    }
  }

  span {
    font-family: 'Open sans', sans-serif;
    font-size: 13px;
    color: var(--color-text-secondary);
    margin-left: 10px;
    font-style: italic;
  }
`;
