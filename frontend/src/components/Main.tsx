import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h1>Welcome to Structural Calculators App</h1>
        <p>This is the initial setup of your React + TypeScript project.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Concrete Beams</h2>
          <p className="text-gray-600 mb-4">Design and details for reinforced concrete beams.</p>
          <Link to="/concrete/beams" className="link">Go to Beams</Link>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Concrete Columns</h2>
          <p className="text-gray-600 mb-4">Calculation and parameters for columns.</p>
          <Link to="/concrete/columns" className="link">Go to Columns</Link>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Concrete Slabs</h2>
          <p className="text-gray-600 mb-4">Slab thicknesses, reinforcement, and loads.</p>
          <Link to="/concrete/slabs" className="link">Go to Slabs</Link>
        </div>
      </div>
    </>
  );
};

export default Main;