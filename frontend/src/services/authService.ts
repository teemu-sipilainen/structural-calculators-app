import axios from 'axios';
import * as UserTypes from '../types/UserTypes';

const baseUrl = 'http://localhost:3000';

export const registerUser = async (userToBeRegistered: UserTypes.UserPostRequest) => {
  return axios.post(`${baseUrl}/api/auth/register`, userToBeRegistered);
}
