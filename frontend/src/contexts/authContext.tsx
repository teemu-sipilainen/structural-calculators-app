import { createContext } from 'react';
import * as UserTypes from '../types/UserTypes';

export interface AuthContextType {
  user: UserTypes.UserInAuthContext | null;
  setUser: (user: UserTypes.UserInAuthContext | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
