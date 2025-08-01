export interface UserDbRowWithPasswordHash extends UserDbRowWithoutPasswordHash {
  'passwordHash': string;
}

export interface UserDbRowWithoutPasswordHash {
  'id': number;
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
  'createdAt': string;
  'updatedAt': string;
}

export interface UsernameAndPasswordHash {
  'username': string;
  'passwordHash': string;
}

export interface UserPostRequest {
  'username': string;
  'email': string;
  'firstName': string;
  'lastName': string;
  'password': string;
}

