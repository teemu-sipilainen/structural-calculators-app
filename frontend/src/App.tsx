import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
        <nav className="bg-white shadow-md p-4 flex flex-wrap items-center justify-between">
          <div className="m-1 flex gap-2 flex-wrap">
            <Link className="nav-link" to="/">Main Page</Link>
            <Link className="nav-link" to="/concrete/beams">Beams</Link>
            <Link className="nav-link" to="/concrete/columns">Columns</Link>
            <Link className="nav-link" to="/concrete/slabs">Slabs</Link>
          </div>
          <div className="m-1 flex gap-2 flex-wrap">
            <Link className="nav-link nav-link-green" to="/auth/register">Register</Link>
            <Link className="nav-link nav-link-green" to="/auth/login">Login</Link>
          </div>
        </nav>

        <main className="p-6 space-y-4">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/concrete/beams" element={<Beams />} />
            <Route path="/concrete/columns" element={<Columns />} />
            <Route path="/concrete/slabs" element={<Slabs />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>

    </div>
  );
}

export default App
