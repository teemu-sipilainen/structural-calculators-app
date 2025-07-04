import axios from 'axios';
import * as UserTypes from '../types/UserTypes';

const baseUrl = 'http://localhost:3000';

export const loginUser = async (userToLogin: UserTypes.UserLoginPostRequest) => {
  return axios.post(`${baseUrl}/api/auth/login`, userToLogin);
}

export const registerUser = async (userToBeRegistered: UserTypes.UserRegisterPostRequest) => {
  return axios.post(`${baseUrl}/api/auth/register`, userToBeRegistered);
}
