export interface UserDbRowWithPasswordHash extends UserDbRowWithoutPasswordHash {
  'passwordHash': string;
}

export interface UserDbRowWithoutPasswordHash {
  'id': number;
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
}

export interface UserPostRequest {
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
  'password': string;
}

