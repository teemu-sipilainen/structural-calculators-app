import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Login from '../components/Login';

const LoginPage = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) return null;
  const { user, logout } = authContext;

  return (
    <>
      {user ? (
        <div>
          <h1>Login</h1>
          <p>{user.username} is already logged in.</p>
          <p>Logout if you want to login with another username.</p>
          <button
            type="button"
            className="btn-red"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default LoginPage;