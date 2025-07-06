import { useState, type ReactNode } from 'react';
import * as UserTypes from '../types/UserTypes';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserTypes.UserInAuthContext | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}