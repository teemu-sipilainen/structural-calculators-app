DROP TABLE IF EXISTS reinforced_concrete_beams;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE reinforced_concrete_beams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  length INT NOT NULL,
  width INT NOT NULL,
  height INT NOT NULL,
  concrete_grade VARCHAR(50) NOT NULL,
  steel_grade VARCHAR(50) NOT NULL,
  reinforcement_area NUMERIC(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE RESTRICT
);
