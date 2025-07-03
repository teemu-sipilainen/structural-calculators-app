import { Request, RequestHandler, Response } from 'express';
import * as beamsDao from '../dao/reinforcedConcreteBeamsDao';
import * as BeamsTypes from '../types/BeamsTypes';

export const getAllBeams: RequestHandler = async (_request: Request, response: Response) => {
  try {
    const beams: BeamsTypes.BeamDbRow[] = await beamsDao.getAllBeams();
    response.status(200).json(beams);
  } catch (error) {
    console.error('Error fetching beams:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
};