import executeQuery from '../db/executeQuery';
import * as concreteQueries from '../queries/concreteQueries';
import * as ConcreteTypes from '../types/ConcreteTypes';

export const getBeams = async (): Promise<ConcreteTypes.BeamDbRow[]> => {
  const result = await executeQuery(concreteQueries.getBeams);
  return result.rows;
};
