import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Main from "./components/Main";
import Beams from "./components/Beams";
import Columns from "./components/Columns";
import Slabs from "./components/Slabs";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <div className="container mx-auto">
          <nav className="bg-white shadow-md p-4 flex flex-wrap items-center justify-between">
            <div className="m-1 flex gap-2 flex-wrap">
              <NavLink className={({ isActive }) => isActive ? "nav-link-blue active" : "nav-link-blue"} to="/">Main Page</NavLink>
              <NavLink className={({ isActive }) => isActive ? "nav-link-blue active" : "nav-link-blue"} to="/concrete/beams">Beams</NavLink>
              <NavLink className={({ isActive }) => isActive ? "nav-link-blue active" : "nav-link-blue"} to="/concrete/columns">Columns</NavLink>
              <NavLink className={({ isActive }) => isActive ? "nav-link-blue active" : "nav-link-blue"} to="/concrete/slabs">Slabs</NavLink>
            </div>
            <div className="m-1 flex gap-2 flex-wrap">
              <NavLink className={({ isActive }) => isActive ? "nav-link-green active" : "nav-link-green"} to="/register">Register</NavLink>
              <NavLink className={({ isActive }) => isActive ? "nav-link-green active" : "nav-link-green"} to="/login">Login</NavLink>
            </div>
          </nav>

          <main className="p-6 space-y-4 max-w-4xl mx-auto">
            {/* <main className="p-6 space-y-4 max-w-4xl mx-auto"> */}

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/concrete/beams" element={<Beams />} />
              <Route path="/concrete/columns" element={<Columns />} />
              <Route path="/concrete/slabs" element={<Slabs />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App
