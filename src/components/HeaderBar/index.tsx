import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiUsers } from 'react-icons/fi';

import menuIcon from '../../assets/menu.png';
import logoIcon from '../../assets/logo.png';
import logoIcon2x from '../../assets/logo@2x.png';

import { useDrawer } from '../../hooks/drawer';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  IconsHeaderBar,
  MenuButton,
  NavContainer,
  NavHeaderBar,
  AvatarBox,
  AvatarCardCircle,
  AvatarMenu,
} from './styles';

interface HeaderProps {
  userScroolDown: boolean;
}

const HeaderBar: React.FC<HeaderProps> = ({ userScroolDown }) => {
  const { toogleDrawer, setToogleDrawer } = useDrawer();

  const [toogleAvatarMenu, setToogleAvatarMenu] = useState(false);

  const { signOut, user } = useAuth();

  return (
    <Container isScrool={userScroolDown}>
      <Content>
        <IconsHeaderBar>
          <MenuButton onClick={() => setToogleDrawer(!toogleDrawer)}>
            <img src={menuIcon} alt="Menu icon" />
          </MenuButton>
          <img src={logoIcon} srcSet={`${logoIcon2x} 2x`} alt="logo" />
        </IconsHeaderBar>

        <NavContainer>
          <NavHeaderBar>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/politics">Politics</Link>
              <Link to="/business">Business</Link>
              <Link to="/tech">Tech</Link>
              <Link to="/science">Science</Link>
              <Link to="/sports">Sports</Link>

              {!user && (
                <Link className="active" to="/user/login">
                  Login
                </Link>
              )}
            </ul>
          </NavHeaderBar>

          {user && (
            <AvatarBox>
              <AvatarCardCircle
                className="avatar"
                alt="Usuário"
                onClick={() => setToogleAvatarMenu(!toogleAvatarMenu)}
              >
                {user && user.charAt(0)}
              </AvatarCardCircle>
              <AvatarMenu show={toogleAvatarMenu}>
                <Link
                  to="/user/profile"
                  onClick={() => {
                    setToogleAvatarMenu(false);
                  }}
                >
                  <FiUsers />
                  PROFILE
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    signOut();
                    setToogleAvatarMenu(false);
                  }}
                >
                  <FiLogOut />
                  LOGOUT
                </Link>
              </AvatarMenu>
            </AvatarBox>
          )}
        </NavContainer>
      </Content>
    </Container>
  );
};

export default HeaderBar;
