import { createContext } from 'react';
import * as UserTypes from '../types/UserTypes';

export interface AuthContextType {
  user: UserTypes.UserInAuthContext | null;
  setUser: (user: UserTypes.UserInAuthContext | null) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { },
  accessToken: null,
  setAccessToken: () => { },
  logout: () => { },
});
