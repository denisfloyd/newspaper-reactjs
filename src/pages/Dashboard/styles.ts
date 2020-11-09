import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import Divider from '@material-ui/core/Divider';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 100px;
`;

export const Content = styled.section`
  animation: 1.5s ${keyframes`${fadeIn}`};

  margin-top: 100px;
  width: calc(81.5% + 30px);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1170px) {
    width: calc(90% + 30px);
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const DividerNews = styled(Divider)`
  width: 100%;

  @media screen and (max-width: 1170px) {
    display: none;
  }
`;
