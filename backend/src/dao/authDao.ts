import executeQuery from '../db/executeQuery';
import * as authQueries from '../queries/authQueries';
import * as UserTypes from '../types/UserTypes';

export const getUserWithPasswordHashByUsername =
  async (username: string): Promise<UserTypes.UserDbRowWithPasswordHash | null> => {
    const params = [username];

    const result = await executeQuery(authQueries.getUserWithPasswordHashByUsername, params);
    return result.rows.length > 0 ? result.rows[0] : null;
  };

export const registerUser =
  async (newUser: UserTypes.UserPostRequest): Promise<UserTypes.UserDbRowWithoutPasswordHash | null> => {
    const { username, email, firstName, lastName, password } = newUser;
    const params = [username, email, firstName, lastName, password];

    const result = await executeQuery(authQueries.registerUser, params);
    return result.rows.length > 0 ? result.rows[0] : null;
  };
