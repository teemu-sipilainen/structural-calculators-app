import { Request, RequestHandler, Response } from 'express';
import * as authDao from '../dao/authDao';
import * as UserTypes from '../types/UserTypes';

export const registerUser: RequestHandler = async (request: Request, response: Response) => {
  const userPostRequest: UserTypes.UserPostRequest = {
    ...request.body
  };

  try {
    const registeredUser: UserTypes.UserDbRowWithoutPasswordHash | null = await authDao.registerUser(userPostRequest);
    response.status(201).json(registeredUser);
  } catch (error) {
    console.error('Error registering user:', error);
    response.status(500).json({ error: 'Error registering user' });
  }
};