import { Request, Response, NextFunction } from 'express';

export const logger = (request: Request, _response: Response, next: NextFunction): void => {
  const timestamp = new Date().toUTCString();
  console.log(`[${timestamp}] ${request.method} ${request.url}`);
  console.log('  Request body:', JSON.stringify(request.body));
  next();
};
