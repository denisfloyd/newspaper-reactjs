import React, { ReactElement, useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import HeaderBar from './components/HeaderBar';
import DrawerNav from './components/Drawer';

import Routes from './routes';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

function App(): ReactElement {
  const [userScrollDown, setUserScrollDown] = useState(false);

  const handleScrollScreen = useCallback(() => {
    if (window.scrollY > 60) {
      return setUserScrollDown(true);
    }
    return setUserScrollDown(false);
  }, []);

  window.addEventListener('scroll', handleScrollScreen);

  return (
    <BrowserRouter>
      <AppProvider>
        <HeaderBar userScroolDown={userScrollDown} />
        <DrawerNav />
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
