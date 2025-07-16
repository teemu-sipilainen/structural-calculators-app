import { useEffect, useState } from 'react';
import Beam from '../components/Beam';
import Beams from '../components/Beams';
import Loader from '../components/Loader';
import * as concreteService from '../services/concreteService';
import * as ConcreteTypes from '../types/ConcreteTypes';

const BeamsPage = () => {
  const [beams, setBeams] = useState<ConcreteTypes.Beam[]>([]);
  const [selectedBeam, setSelectedBeam] = useState<ConcreteTypes.Beam | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getBeams = async () => {
      setIsLoading(true);
      try {
        const response = await concreteService.getBeams();
        setBeams(response.data.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getBeams();
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Beams</h1>
      <div className="bg-white shadow-md rounded-2xl p-6">
        {isLoading ? (
          <Loader />
        ) : (
          <Beams beams={beams} onSelect={setSelectedBeam} />
        )}
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6">
        {selectedBeam ? (
          <Beam beam={selectedBeam} />
        ) : (
          <p>Select a beam to view details.</p>
        )}
      </div>
    </>
  );
};

export default BeamsPage;