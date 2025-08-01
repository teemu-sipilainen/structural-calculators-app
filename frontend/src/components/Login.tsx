import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import LoadingModal from '../modals/LoadingModal';
import LoginForm from './LoginForm'
import * as authService from '../services/authService';
import * as UserTypes from '../types/UserTypes';

interface LoginProps {
  onSuccess?: () => void;
  onFormChange?: (hasInput: boolean) => void;
}

const Login = ({ onSuccess, onFormChange }: LoginProps) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const initialUserState: UserTypes.UserLoginPostRequest = {
    username: "",
    password: "",
  };

  const [loginFormData, setLoginFormData] = useState<UserTypes.UserLoginPostRequest>(initialUserState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (onFormChange) {
      onFormChange(loginFormData.username !== '' || loginFormData.password !== '');
    }
  }, [loginFormData.username, loginFormData.password, onFormChange])

  if (!authContext) return null;
  const { setUser, setAccessToken } = authContext;

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

    if (!loginFormData.username || !loginFormData.password) return;

    setIsLoading(true);
    try {
      const userToLogin = { ...loginFormData };
      const response = await authService.loginUser(userToLogin);
      console.log("Response data:", response.data.data);
      setUser({
        username: response.data.data.username
      });
      setAccessToken(response.data.data.accessToken);
      setLoginFormData(initialUserState);
      if (onSuccess) {
        onSuccess();
      }
      navigate("/");
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