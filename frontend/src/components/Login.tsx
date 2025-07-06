import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import LoadingModal from '../modals/LoadingModal';
import LoginForm from './LoginForm'
import * as authService from '../services/authService';
import * as UserTypes from '../types/UserTypes';

interface LoginProps {
  onSuccess?: () => void;
}

const Login = ({ onSuccess }: LoginProps) => {
  const auth = useContext(AuthContext);

  const initialUserState: UserTypes.UserLoginPostRequest = {
    username: "",
    password: "",
  };

  const [loginFormData, setLoginFormData] = useState<UserTypes.UserLoginPostRequest>(initialUserState);
  const [isLoading, setIsLoading] = useState(false);

  if (!auth) return null;
  const { user, setUser } = auth;

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData(prev => {
      return { ...prev, password: event.target.value }
    });
  }

  const handleLoginReset = () => {
    setLoginFormData(initialUserState);
  }

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const userToLogin = { ...loginFormData };
      const response = await authService.loginUser(userToLogin);
      console.log(response.data);
      setUser(response.data.data)
      setLoginFormData(initialUserState);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData(prev => {
      return { ...prev, username: event.target.value }
    });
  }

  return (
    <>
      <LoadingModal
        isOpen={isLoading}
        shouldCloseOnCloseButton={false}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
      />

      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        <h1>Login</h1>
        <LoginForm
          user={loginFormData}
          handleLoginSubmit={handleLoginSubmit}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLoginReset={handleLoginReset}
        />
      </div>
    </>
  );
};

export default Login;