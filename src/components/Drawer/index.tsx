import React from 'react';
import { Link } from 'react-router-dom';

import { useDrawer } from '../../hooks/drawer';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/auth';

const DrawerNav: React.FC = () => {
  const { toogleDrawer, setToogleDrawer } = useDrawer();
  const { user } = useAuth();

  return (
    <Container
      onClickCapture={() => setToogleDrawer(false)}
      open={toogleDrawer}
    >
      <Content>
        <ul>
          <Link to="/" onClick={() => setToogleDrawer(!toogleDrawer)}>
            Home
          </Link>
          <Link to="/politics" onClick={() => setToogleDrawer(!toogleDrawer)}>
            Politics
          </Link>
          <Link to="/business" onClick={() => setToogleDrawer(!toogleDrawer)}>
            Business
          </Link>
          <Link to="/tech" onClick={() => setToogleDrawer(!toogleDrawer)}>
            Tech
          </Link>
          <Link to="/science" onClick={() => setToogleDrawer(!toogleDrawer)}>
            Science
          </Link>
          <Link to="/sports" onClick={() => setToogleDrawer(!toogleDrawer)}>
            Sports
          </Link>

          {!user && (
            <Link
              className="active"
              to="/user/login"
              onClick={() => setToogleDrawer(!toogleDrawer)}
            >
              Login
            </Link>
          )}
        </ul>
      </Content>
    </Container>
  );
};

export default DrawerNav;
