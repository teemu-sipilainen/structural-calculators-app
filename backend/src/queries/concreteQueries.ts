export const getBeams = `
  SELECT id, name, length, width, height, 
    concrete_grade AS "concreteGrade", 
    steel_grade AS "steelGrade", 
    reinforcement_area AS "reinforcementArea", 
    created_at AS "createdAt", 
    updated_at AS "updatedAt" 
  FROM reinforced_concrete_beams;
`;
