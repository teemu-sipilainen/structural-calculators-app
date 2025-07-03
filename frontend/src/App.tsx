import Beam from "./components/Beam";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow-md p-4 flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Beam
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Column
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Slab
        </button>
        <button className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Register
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Login
        </button>
      </nav>

      <main className="p-6 space-y-4">
        <div>
          <h1>Welcome to Structural Calculators App</h1>
          <p>This is the initial setup of your React + TypeScript project.</p>
        </div>
        <Beam />
      </main>
    </div>
  );
}

export default App
