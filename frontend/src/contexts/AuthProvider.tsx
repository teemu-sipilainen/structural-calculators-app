import { useEffect, useState, type ReactNode } from 'react';
import * as UserTypes from '../types/UserTypes';
import { AuthContext } from './AuthContext';
import { jwtDecode } from 'jwt-decode';

interface AuthProviderProps {
  children: ReactNode
}

interface AccessTokenPayload {
  username: string;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserTypes.UserInAuthContext | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem("accessToken"));

  useEffect(() => {
    if (accessToken !== null) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken])

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);

      const jwtPayload = jwtDecode<AccessTokenPayload>(storedAccessToken);
      setUser({
        username: jwtPayload.username
      });
    }
  }, [])

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, accessToken, setAccessToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}