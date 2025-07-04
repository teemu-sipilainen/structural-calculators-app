import { useState } from 'react';
import * as authService from '../services/authService';
import * as UserTypes from '../types/UserTypes';

const Register = () => {
  const initialUserState: UserTypes.UserRegisterForm = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = useState<UserTypes.UserRegisterForm>(initialUserState);

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, confirmPassword: event.target.value }
    });
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, email: event.target.value }
    });
  }

  const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, firstName: event.target.value }
    });
  }

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, lastName: event.target.value }
    });
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, password: event.target.value }
    });
  }

  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) return;

    try {
      const {
        confirmPassword: _confirmPassword,
        ...userToBeRegistered
      } = user;
      await authService.registerUser(userToBeRegistered);
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
      <h1>Register</h1>

      <form
        className="flex flex-col space-y-4 max-w-md mx-auto"
        onSubmit={handleRegisterSubmit}
      >
        <input
          type="text"
          value={user.username ?? ""}
          placeholder={user.username || "Username"}
          onChange={handleUsernameChange}
        />

        <input
          type="text"
          value={user.email ?? ""}
          placeholder={user.email || "E-mail"}
          onChange={handleEmailChange}
        />

        <input
          type="text"
          value={user.firstName ?? ""}
          placeholder={user.firstName || "First name"}
          onChange={handleFirstnameChange}
        />

        <input
          type="text"
          value={user.lastName ?? ""}
          placeholder={user.lastName || "Last name"}
          onChange={handleLastnameChange}
        />

        <input
          type="password"
          value={user.password ?? ""}
          placeholder={user.password || "Password"}
          onChange={handlePasswordChange}
        />

        <input
          type="password"
          value={user.confirmPassword ?? ""}
          placeholder={user.confirmPassword || "Confirm password"}
          onChange={handleConfirmPasswordChange}
        />

        <button
          type="submit"

        >
          Register
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

export default Register;