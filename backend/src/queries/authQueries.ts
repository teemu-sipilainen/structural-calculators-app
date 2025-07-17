// password_hash IS returned
export const getUserWithPasswordHashByUsername = `
  SELECT 
    id, 
    username, 
    email, 
    first_name AS "firstName", 
    last_name AS "lastName", 
    password_hash AS "passwordHash", 
    created_at AS "createdAt", 
    updated_at AS "updatedAt"
  FROM users 
  WHERE username = $1;
`;

// password_hash IS NOT returned
export const registerUser = `
  INSERT INTO users (username, email, first_name, last_name, password_hash) 
  VALUES ($1, $2, $3, $4, $5)
  RETURNING 
    id, 
    username, 
    email, 
    first_name AS "firstName", 
    last_name AS "lastName", 
    created_at AS "createdAt", 
    updated_at AS "updatedAt"
`;

export const updateUserUsernameById = `
  UPDATE users
  SET username = $2
  WHERE id = $1
  RETURNING 
    id, 
    username, 
    email, 
    first_name AS "firstName", 
    last_name AS "lastName", 
    created_at AS "createdAt", 
    updated_at AS "updatedAt";
`;


