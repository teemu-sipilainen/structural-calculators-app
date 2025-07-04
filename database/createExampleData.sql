TRUNCATE TABLE reinforced_concrete_beams RESTART IDENTITY;
TRUNCATE TABLE users RESTART IDENTITY CASCADE;

INSERT INTO users (username, email, first_name, last_name, password_hash)
VALUES
  ('jdoe', 'jdoe@example.com', 'John', 'Doe', 'argon2hashedpassword1'),
  ('asmith', 'asmith@example.com', 'Anna', 'Smith', 'argon2hashedpassword2'),
  ('bwayne', 'bwayne@example.com', 'Bruce', 'Wayne', 'argon2hashedpassword3');

INSERT INTO reinforced_concrete_beams 
  (name, length, width, height, concrete_grade, steel_grade, reinforcement_area, user_id)
VALUES
  ('Beam A1', 6500, 300, 500, 'C30/37', 'B500B', 15.5, 1),
  ('Beam B2', 8000, 400, 600, 'C35/45', 'B500B', 18.0, 1),
  ('Beam C3', 5000, 250, 450, 'C25/30', 'B400B', 12.0, 2),
  ('Beam D4', 7200, 350, 550, 'C30/37', 'B500B', 16.2, 2),
  ('Beam E5', 10000, 500, 700, 'C40/50', 'B500B', 22.0, 3);
