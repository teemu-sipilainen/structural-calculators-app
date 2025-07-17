import * as UserTypes from '../types/UserTypes';

interface RegisterFormProps {
  registeredFormData: UserTypes.UserRegisterForm
  handleRegisterSubmit: (event: React.FormEvent) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetButtonClick: () => void;
  handleQuickRegisterButtonClick: () => void;
}

const RegisterForm = ({
  registeredFormData,
  handleRegisterSubmit,
  handleInputChange,
  handleResetButtonClick,
  handleQuickRegisterButtonClick
}: RegisterFormProps) => {

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleRegisterSubmit}
        >
          <input
            type="text"
            name="username"
            value={registeredFormData.username ?? ""}
            placeholder={registeredFormData.username || "Username"}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="email"
            value={registeredFormData.email ?? ""}
            placeholder={registeredFormData.email || "E-mail"}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="firstName"
            value={registeredFormData.firstName ?? ""}
            placeholder={registeredFormData.firstName || "First name"}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="lastName"
            value={registeredFormData.lastName ?? ""}
            placeholder={registeredFormData.lastName || "Last name"}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            value={registeredFormData.password ?? ""}
            placeholder={registeredFormData.password || "Password"}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="confirmPassword"
            value={registeredFormData.confirmPassword ?? ""}
            placeholder={registeredFormData.confirmPassword || "Confirm password"}
            onChange={handleInputChange}
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

export default RegisterForm;