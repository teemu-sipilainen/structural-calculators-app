import * as ConcreteTypes from '../types/ConcreteTypes';

interface BeamsProps {
  beams: ConcreteTypes.Beam[];
  onSelect: (beam: ConcreteTypes.Beam) => void;
}

const Beams = ({ beams, onSelect }: BeamsProps) => {
  return (
    <>
      <h1>Beams</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-sm rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Length (mm)</th>
              <th className="px-4 py-2 text-left">Width (mm)</th>
              <th className="px-4 py-2 text-left">Height (mm)</th>
              <th className="px-4 py-2 text-left">Concrete Grade</th>
              <th className="px-4 py-2 text-left">Steel Grade</th>
              <th className="px-4 py-2 text-left">Reinf. Area (mm²)</th>
              <th className="px-4 py-2 text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {beams.map(beam => (
              <tr key={beam.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <button
                    type="button"
                    onClick={() => onSelect(beam)}
                  >
                    {beam.name}
                  </button>
                </td>
                <td className="px-4 py-2">{beam.length}</td>
                <td className="px-4 py-2">{beam.width}</td>
                <td className="px-4 py-2">{beam.height}</td>
                <td className="px-4 py-2">{beam.concreteGrade}</td>
                <td className="px-4 py-2">{beam.steelGrade}</td>
                <td className="px-4 py-2">{beam.reinforcementArea}</td>
                <td className="px-4 py-2">{new Date(beam.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Beams;
