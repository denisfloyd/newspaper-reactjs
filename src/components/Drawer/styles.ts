import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

export const Container = styled(Drawer)`
  & > .MuiDrawer-paperAnchorDockedLeft {
    border-right: 0;
  }
`;

export const Content = styled.nav`
  width: 290px;
  margin-top: 80px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    > a {
      margin-top: 31px;
      text-transform: uppercase;
      margin-left: 29px;
      font-size: 14px;
      text-decoration: none;
      color: var(--color-text-primary-nav);
      cursor: pointer;

      &.active {
        font-weight: bold;
        color: var(--color-text-primary-nav-active);
      }
    }
  }
`;
