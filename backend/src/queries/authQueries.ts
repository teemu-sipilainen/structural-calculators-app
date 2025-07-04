export const getUserWithPasswordHashByUsername = `
  SELECT id, username, email, first_name AS "firstName", last_name AS "lastName", password_hash AS "passwordHash"
  FROM users 
  WHERE username = $1;
`;

export const registerUser = `
  INSERT INTO users (username, email, first_name, last_name, password_hash) 
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id, username, email, first_name AS "firstName", last_name AS "lastName";
`;
