import React, { createContext, useCallback, useState, useContext } from 'react';

interface LoginCredentials {
  mail: string;
  password?: string;
}

interface AuthContextData {
  user: string;
  signIn(creadentials: LoginCredentials): void;
  signOut(): void;
  interests: string;
  saveInterests(interests: string): void;
}

interface AuthState {
  user: string;
  interests: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@News:user');
    const userInterests = localStorage.getItem('@News:interests');

    const interests = userInterests || '';

    if (user) {
      return { user, interests };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    ({ mail }) => {
      localStorage.setItem('@News:user', mail);

      setData({ ...data, user: mail, interests: '' });
    },
    [data],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@News:user');
    localStorage.removeItem('@News:interests');

    setData({} as AuthState);
  }, []);

  const saveInterests = useCallback(
    interests => {
      localStorage.setItem('@News:interests', interests);
      setData({ ...data, interests });
    },
    [data],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        interests: data.interests,
        signIn,
        saveInterests,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
