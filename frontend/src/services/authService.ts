import axios from 'axios';
import * as UserTypes from '../types/UserTypes';


export const loginUser = async (userToLogin: UserTypes.UserLoginPostRequest) => {
  return axios.post(`/api/auth/login`, userToLogin);
}

export const quickRegisterUser = async () => {
  return axios.post(`/api/auth/quick-register`);
}

export const registerUser = async (userToBeRegistered: UserTypes.UserRegisterPostRequest) => {
  return axios.post(`/api/auth/register`, userToBeRegistered);
}
