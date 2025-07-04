import { useState } from 'react';
import * as authService from '../services/authService';
import * as UserTypes from '../types/UserTypes';


const Login = () => {
  const initialUserState: UserTypes.UserLoginPostRequest = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState<UserTypes.UserLoginPostRequest>(initialUserState);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, password: event.target.value }
    });
  }

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const userToLogin = { ...user };
      const response = await authService.loginUser(userToLogin);
      console.log(response.data);
      setUser(initialUserState);
    } catch (error) {
      console.error(error);
    }
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, username: event.target.value }
    });
  }

  return (
    <>
      <h1>Login</h1>

      <form
        className="flex flex-col space-y-4 max-w-md mx-auto"
        onSubmit={handleLoginSubmit}
      >
        <input
          type="text"
          value={user.username ?? ""}
          placeholder={user.username || "Username"}
          onChange={handleUsernameChange}
        />

        <input
          type="password"
          value={user.password ?? ""}
          placeholder={user.password || "Password"}
          onChange={handlePasswordChange}
        />

        <button
          type="submit"

        >
          Login
        </button>

        <button
          type="button"
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default Login;