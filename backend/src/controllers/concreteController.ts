import { Request, RequestHandler, Response } from 'express';
import * as concreteDao from '../dao/concreteDao';
import * as ConcreteTypes from '../types/ConcreteTypes';

export const getBeams: RequestHandler = async (_request: Request, response: Response) => {
  try {
    const beams: ConcreteTypes.BeamDbRow[] = await concreteDao.getBeams();
    response.status(200).json({
      success: true,
      data: beams
    });
  } catch (error) {
    console.error('Error fetching beams:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
};