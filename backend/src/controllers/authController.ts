import { Request, RequestHandler, Response } from 'express';
import argon2 from 'argon2';
import jwt, { SignOptions } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import * as authDao from '../dao/authDao';
import * as UserTypes from '../types/UserTypes';

export const loginUser: RequestHandler = async (request: Request, response: Response) => {
  const { username, password } = request.body;

  try {
    const storedUser = await authDao.getUserWithPasswordHashByUsername(username);

    if (!storedUser) {
      response.status(401).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    const passwordCorrect = await argon2.verify(storedUser.passwordHash, password);

    if (!passwordCorrect) {
      response.status(401).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    const payload = {
      username: storedUser.username
    };

    if (!process.env.SECRET) {
      throw new Error('SECRET env variable is not defined');
    }

    const secret: string = process.env.SECRET as string;
    const options: SignOptions = { expiresIn: '1h' };

    const accessToken = jwt.sign(payload, secret, options);

    response.status(200).json({ success: true, accessToken });
    return;

  } catch (error) {
    console.error('Internal server error:', error);
    response.status(500).json({ success: false, error: 'Internal server error' });
    return;
  }
};

// There is not necessarily at least one lowercase character,
// one uppercase character and one digit in the password
const generatePassword = (): string => {
  // return Math.random().toString(36).slice(-10);
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars.charAt(index);
  }
  return password;
};

export const quickRegisterUser: RequestHandler = async (request: Request, response: Response) => {
  const generatedPassword = generatePassword();
  const hashedPassword = await argon2.hash(generatedPassword);

  const userToBeRegistered: UserTypes.UserPostRequest = {
    username: `guest-${uuidv4()}`,
    email: 'N/A',
    firstName: 'N/A',
    lastName: 'N/A',
    password: hashedPassword
  };

  try {
    const registeredUser = await authDao.quickRegisterUser(userToBeRegistered);

    if (registeredUser) {
      const updatedRegisteredUser =
        await authDao.updateUserUsernameById(registeredUser.id, `guest-${registeredUser.id}`);

      const updatedRegisteredUserWithPassword = {
        ...updatedRegisteredUser,
        password: generatedPassword
      };

      if (registeredUser) {
        response.status(201).json({ success: true, data: updatedRegisteredUserWithPassword });
        return;
      }

    }

    console.error('Registration failed');
    response.status(400).json({ success: false, error: 'Registration failed' });
    return;
  } catch (error) {
    console.error('Error registering user:', error);
    response.status(500).json({ success: false, error: 'Error registering user' });
  }
};

export const registerUser: RequestHandler = async (request: Request, response: Response) => {
  const hashedPassword = await argon2.hash(request.body.password);

  const userToBeRegistered: UserTypes.UserPostRequest = {
    ...request.body,
    password: hashedPassword
  };

  try {
    const registeredUser = await authDao.registerUser(userToBeRegistered);

    if (registeredUser) {
      response.status(201).json({ success: true, data: registeredUser });
      return;
    }

    response.status(400).json({ success: false, error: 'Registration failed' });
    return;
  } catch (error) {
    console.error('Error registering user:', error);
    response.status(500).json({ success: false, error: 'Error registering user' });
  }
};