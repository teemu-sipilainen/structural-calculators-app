DROP TABLE IF EXISTS reinforced_concrete_beams;

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
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
