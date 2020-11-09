import React, { createContext, useState, useContext } from 'react';

interface DrawerContextData {
  toogleDrawer: boolean;
  setToogleDrawer(toogle: boolean): void;
}

const DrawerContext = createContext<DrawerContextData>({} as DrawerContextData);

const DrawerProvider: React.FC = ({ children }) => {
  const [toogleDrawer, setToogleDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ toogleDrawer, setToogleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

function useDrawer(): DrawerContextData {
  const context = useContext(DrawerContext);

  return context;
}

export { DrawerProvider, useDrawer };
