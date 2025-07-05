export interface UserResponse {
  'id': number;
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
  'password'?: string;
  'createdAt': string;
  'modifiedAt': string;
}

export interface UserRegisterForm {
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
  'password': string;
  'confirmPassword': string;
}

export interface UserLoginPostRequest {
  'username': string;
  'password': string;
}

export interface UserPostRequest {
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
  'password': string;
}

export interface UserRegisterPostRequest {
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
  'password': string;
}
