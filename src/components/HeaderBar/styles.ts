import styled, { css } from 'styled-components';

import { Avatar, IconButton } from '@material-ui/core';

interface ContainerProps {
  isScrool?: boolean;
}

interface AvatarMenuProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  background-color: transparent;
  position: fixed;
  z-index: 9999;
  border-bottom: 1px solid var(--color-header-border);

  transition: background-color 0.3s ease-in-out, padding 0.4s ease;

  ${props =>
    props.isScrool &&
    css`
      background-color: var(--color-white);
      padding: 10px 20px;
    `}
`;

export const Content = styled.div`
  width: calc(81.5% + 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1170px) {
    width: calc(90% + 30px);
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const IconsHeaderBar = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1170px) {
    > img {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
`;

export const MenuButton = styled(IconButton)`
  &.MuiButtonBase-root {
    display: none;
  }

  @media screen and (max-width: 1170px) {
    &.MuiButtonBase-root {
      display: inline;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavHeaderBar = styled.nav`
  @media screen and (max-width: 1170px) {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: columns;

    > a {
      text-transform: uppercase;
      margin-left: 54px;
      font-size: 14px;
      text-decoration: none;
      color: var(--color-text-primary-nav);
      cursor: pointer;

      &.active {
        font-weight: bold;
        margin-left: 54px;
        color: var(--color-text-primary-nav-active);
      }
    }
  }
`;

export const AvatarBox = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 56px;
`;

export const AvatarCardCircle = styled(Avatar)`
  &.avatar {
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;

    :hover,
    :focus {
      background-color: var(--color-button-primary);
    }
  }
`;

export const AvatarMenu = styled.div<AvatarMenuProps>`
  display: none;
  position: absolute;
  left: -120px;
  background-color: var(--color-white-grey);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${props =>
    props.show &&
    css`
      display: block;
    `}

  a {
    color: var(--color-black);
    text-decoration: none;
    padding: 12px 16px;
    display: block;
    margin: 0;
    font-size: 14px;

    svg {
      vertical-align: text-bottom;
      margin-right: 10px;
    }

    :hover {
      background-color: var(--color-white-grey-hover);
    }
  }
`;
