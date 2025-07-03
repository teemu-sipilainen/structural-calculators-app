TRUNCATE TABLE reinforced_concrete_beams;

INSERT INTO reinforced_concrete_beams 
  (name, length, width, height, concrete_grade, steel_grade, reinforcement_area)
VALUES
  ('Beam A1', 6500, 300, 500, 'C30/37', 'B500B', 15.5),
  ('Beam B2', 8000, 400, 600, 'C35/45', 'B500B', 18.0),
  ('Beam C3', 5000, 250, 450, 'C25/30', 'B400B', 12.0),
  ('Beam D4', 7200, 350, 550, 'C30/37', 'B500B', 16.2),
  ('Beam E5', 10000, 500, 700, 'C40/50', 'B500B', 22.0);
