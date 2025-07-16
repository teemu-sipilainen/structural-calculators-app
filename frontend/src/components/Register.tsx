import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import RegisterForm from './RegisterForm';
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisteredFormData(prev => {
      return { ...prev, [name]: value }
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

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
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

      <RegisterForm
        registeredFormData={registeredFormData}
        handleRegisterSubmit={handleRegisterSubmit}
        handleInputChange={handleInputChange}
        handleResetButtonClick={handleResetButtonClick}
        handleQuickRegisterButtonClick={handleQuickRegisterButtonClick}
      />

    </div>
  );
};

export default Register;