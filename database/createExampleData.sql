TRUNCATE TABLE reinforced_concrete_beams RESTART IDENTITY CASCADE;
TRUNCATE TABLE users RESTART IDENTITY CASCADE;

INSERT INTO users (username, email, first_name, last_name, password_hash)
VALUES
  ('guest1', 'guest1@user.com', 'Guest1', 'User', '$argon2id$v=19$m=65536,t=3,p=4$7tboTdt8+oOcBulzcJQfew$PEpI6ExcZqrhRMqeZLaaO+tMSn2jfIyWXm50U3mhfaU'),
  ('guest2', 'guest2@user.com', 'Guest2', 'User', '$argon2id$v=19$m=65536,t=3,p=4$JdVbGSuRbQI2xffPMHOhkw$TzAc2n5qHLMAIECRmIda4am9WSHwkN6gf6GsuhOQwSc'),
  ('guest3', 'guest3@user.com', 'Guest3', 'User', '$argon2id$v=19$m=65536,t=3,p=4$tS+/4FWO1KtsFNrs59lgAg$7fEu9oZetq5EA51ljAppsvTScCfHJ7YkzACblMWL1Ok');

INSERT INTO reinforced_concrete_beams 
  (name, length, width, height, concrete_grade, steel_grade, reinforcement_area, user_id)
VALUES
  ('Beam A1', 6500, 300, 500, 'C30/37', 'B500B', 15.5, 1),
  ('Beam B2', 8000, 400, 600, 'C35/45', 'B500B', 18.0, 1),
  ('Beam C3', 5000, 250, 450, 'C25/30', 'B400B', 12.0, 2),
  ('Beam D4', 7200, 350, 550, 'C30/37', 'B500B', 16.2, 2),
  ('Beam E5', 10000, 500, 700, 'C40/50', 'B500B', 22.0, 3);
