import * as UserTypes from '../types/UserTypes';

interface LoginFormProps {
  user: UserTypes.UserLoginPostRequest;
  handleLoginSubmit: (event: React.FormEvent) => Promise<void>;
  handleUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginReset: () => void;
}

const LoginForm = ({ user, handleLoginSubmit, handleUsernameChange, handlePasswordChange, handleLoginReset }: LoginFormProps) => {
  return (
    <form
      className="flex flex-col space-y-4"
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
        onClick={handleLoginReset}
      >
        Reset
      </button>
    </form>
  );
}

export default LoginForm;