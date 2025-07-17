import { useContext, useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import AuthModal from './modals/AuthModal';
import Main from "./components/Main";
import BeamsPage from "./pages/BeamsPage";
import Columns from "./components/Columns";
import Slabs from "./components/Slabs";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from './pages/LoginPage';

const App = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState("login");

  const navigate = useNavigate();

  const auth = useContext(AuthContext);
  if (!auth) return null;
  const { user, setUser, setAccessToken } = auth;

  const handleLoginModalButtonClick = () => {
    setAuthModalType("login");
    setIsAuthModalOpen(true);
  }

  const handleRegisterModalButtonClick = () => {
    setAuthModalType("register");
    setIsAuthModalOpen(true);
  }

  const handleLogoutButtonClick = () => {
    setUser(null);
    setAccessToken(null);
    navigate('/login');
  }

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  }

  return (
    <div>
      <AuthModal
        isOpen={isAuthModalOpen}
        authModalType={authModalType}
        onCloseButtonClick={handleCloseModal}
        onRequestClose={handleCloseModal}
        onSuccess={handleCloseModal}
      />

      <div className="container mx-auto">
        <nav className="bg-white shadow-md rounded-b-2xl p-6 flex flex-wrap items-center justify-between">

          <div className="m-1 flex gap-2 flex-wrap">
            <NavLink className={({ isActive }) => isActive ? "btn-blue active" : "btn-blue"} to="/">Main Page</NavLink>
            <NavLink className={({ isActive }) => isActive ? "btn-blue active" : "btn-blue"} to="/concrete/beams">Beams</NavLink>
            <NavLink className={({ isActive }) => isActive ? "btn-blue active" : "btn-blue"} to="/concrete/columns">Columns</NavLink>
            <NavLink className={({ isActive }) => isActive ? "btn-blue active" : "btn-blue"} to="/concrete/slabs">Slabs</NavLink>
          </div>

          <div className="m-1 flex gap-2 flex-wrap">
            {user ? (
              <>
                Welcome, {user.username}!
                <button
                  type="button"
                  className="btn-green"
                  onClick={handleLogoutButtonClick}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className={({ isActive }) => isActive ? "btn-green active" : "btn-green"} to="/login">Login</NavLink>
                <button
                  type="button"
                  className="btn-green"
                  onClick={handleLoginModalButtonClick}
                >
                  Login Modal
                </button>
              </>
            )}
            <NavLink className={({ isActive }) => isActive ? "btn-green active" : "btn-green"} to="/register">Register</NavLink>
            <button
              type="button"
              className="btn-green"
              onClick={handleRegisterModalButtonClick}
            >
              Register Modal
            </button>
          </div>
        </nav>

        <main className="p-6 space-y-4 max-w-4xl mx-auto">
          {/* <main className="p-6 space-y-4 max-w-4xl mx-auto"> */}

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/concrete/beams" element={<BeamsPage />} />
            <Route path="/concrete/columns" element={<Columns />} />
            <Route path="/concrete/slabs" element={<Slabs />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}

export default App
