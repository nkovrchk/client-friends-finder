import React, { useCallback, useContext, useEffect, useState } from 'react';

import { AuthApi } from 'net/api/auth';

interface IAuthContext {
  isAuthed: boolean;
  logout: () => void;
}

export const AuthContext = React.createContext<IAuthContext>({ isAuthed: false, logout: () => {} });

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    AuthApi.checkToken().then(({ isAuthed }) => {
      setIsAuthed(isAuthed);
    });
  }, []);

  const logout = useCallback(() => {
    AuthApi.logout().then(() => setIsAuthed(false));
  }, []);

  return <AuthContext.Provider value={{ isAuthed, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
