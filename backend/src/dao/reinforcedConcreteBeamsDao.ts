import executeQuery from '../db/executeQuery';
import * as beamsQueries from '../queries/reinforcedConcreteBeamsQueries';
import * as BeamsTypes from '../types/BeamTypes';

export const getAllBeams = async (): Promise<BeamsTypes.BeamDbRow[]> => {
  const result = await executeQuery(beamsQueries.getAllBeams);
  return result.rows;
};
