import Graph from './Graph';
import * as ConcreteTypes from '../types/ConcreteTypes';

interface BeamProps {
  beam: ConcreteTypes.Beam;
}


const Beam = ({ beam }: BeamProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{beam.name}</h2>
      <ul className="text-sm space-y-1">
        <li>Length: {beam.length} mm</li>
        <li>Width: {beam.width} mm</li>
        <li>Height: {beam.height} mm</li>
        <li>Concrete Grade: {beam.concreteGrade}</li>
        <li>Steel Grade: {beam.steelGrade}</li>
        <li>Reinforcement Area: {beam.reinforcementArea} mm²</li>
        <li>Created At: {new Date(beam.createdAt).toLocaleString()}</li>
        <li>Updated At: {new Date(beam.updatedAt).toLocaleString()}</li>
      </ul>
      <Graph />
    </div>
  );
};

export default Beam;