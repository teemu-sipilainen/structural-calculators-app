import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Loader from './Loader';
import * as authService from '../services/authService';
import * as UserTypes from '../types/UserTypes';

const Register = () => {
  const auth = useContext(AuthContext);

  const initialUserState: UserTypes.UserRegisterForm = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  const [registeredFormData, setRegisteredFormData] = useState<UserTypes.UserRegisterForm>(initialUserState);
  const [registeredUser, setRegisteredUser] = useState<UserTypes.UserResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!auth) return null;
  const { setUser, setAccessToken } = auth;

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisteredFormData(prev => {
      return { ...prev, confirmPassword: event.target.value }
    });
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisteredFormData(prev => {
      return { ...prev, email: event.target.value }
    });
  }

  const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisteredFormData(prev => {
      return { ...prev, firstName: event.target.value }
    });
  }

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisteredFormData(prev => {
      return { ...prev, lastName: event.target.value }
    });
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisteredFormData(prev => {
      return { ...prev, password: event.target.value }
    });
  }

  const handleResetButtonClick = () => {
    setRegisteredFormData(initialUserState);
  }

  const handleQuickRegisterButtonClick = async () => {
    setIsLoading(true);
    try {
      const response = await authService.quickRegisterUser();
      console.log("Response data:", response.data.data);
      setRegisteredUser(response.data.data.user);
      setUser({
        username: response.data.data.username
      });
      setAccessToken(response.data.data.accessToken);
      setRegisteredFormData(initialUserState);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (registeredFormData.password !== registeredFormData.confirmPassword) return;

    setIsLoading(true);
    try {
      const {
        confirmPassword: _confirmPassword,
        ...userToBeRegistered
      } = registeredFormData;

      const response = await authService.registerUser(userToBeRegistered);
      setRegisteredUser(response.data.data);
      setRegisteredFormData(initialUserState);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisteredFormData(prev => {
      return { ...prev, username: event.target.value }
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <h1>Register</h1>

      {registeredUser && (
        <div className="max-w-md mx-auto mb-6 bg-green-50 border border-green-200 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Registered user
          </h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li><strong>Username:</strong> {registeredUser.username}</li>
            <li><strong>E-mail:</strong> {registeredUser.email}</li>
            <li><strong>First name:</strong> {registeredUser.firstName}</li>
            <li><strong>Last name:</strong> {registeredUser.lastName}</li>
            {registeredUser.password && (
              <>
                <li><strong>Password:</strong>{' '}
                  {showPassword ? registeredUser.password : "*".repeat(registeredUser.password.length)}
                  <button
                    type="button"
                    className="ml-2 text-xs hover:underline focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </li>
                <li></li>
              </>
            )}
          </ul>
          <Link
            to="/login"
            className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Proceed to Login
          </Link>
        </div>
      )}

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleRegisterSubmit}
        >
          <input
            type="text"
            value={registeredFormData.username ?? ""}
            placeholder={registeredFormData.username || "Username"}
            onChange={handleUsernameChange}
          />

          <input
            type="text"
            value={registeredFormData.email ?? ""}
            placeholder={registeredFormData.email || "E-mail"}
            onChange={handleEmailChange}
          />

          <input
            type="text"
            value={registeredFormData.firstName ?? ""}
            placeholder={registeredFormData.firstName || "First name"}
            onChange={handleFirstnameChange}
          />

          <input
            type="text"
            value={registeredFormData.lastName ?? ""}
            placeholder={registeredFormData.lastName || "Last name"}
            onChange={handleLastnameChange}
          />

          <input
            type="password"
            value={registeredFormData.password ?? ""}
            placeholder={registeredFormData.password || "Password"}
            onChange={handlePasswordChange}
          />

          <input
            type="password"
            value={registeredFormData.confirmPassword ?? ""}
            placeholder={registeredFormData.confirmPassword || "Confirm password"}
            onChange={handleConfirmPasswordChange}
          />

          <button
            type="submit"
          >
            Register
          </button>

          <button
            type="reset"
            className="bg-gray-300 text-gray-800 hover:bg-gray-400"
            onClick={handleResetButtonClick}
          >
            Reset
          </button>
        </form>
      </div>
      <h1>Quick Register</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <button
          type="button"
          onClick={handleQuickRegisterButtonClick}
        >
          Quick Register & Login
        </button>
        <p className='text-red-600'>Password will be displayed on the screen after quick registration!</p>
      </div>
    </>
  );
};

export default Register;