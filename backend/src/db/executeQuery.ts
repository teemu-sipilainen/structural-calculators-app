import pg from 'pg';

type PrimitiveQueryValue = string | number | boolean | Date | null | Buffer | undefined;
type QueryParameter = PrimitiveQueryValue | PrimitiveQueryValue[];

interface DatabaseError extends Error {
  name: string;
  stack?: string;
}

const {
  PG_HOST,
  PG_PORT,
  PG_SSL,
  PG_USERNAME,
  PG_PASSWORD,
  PG_DATABASE,
} = process.env;

export const pool = new pg.Pool({
  host: PG_HOST,
  port: PG_PORT ? Number(PG_PORT) : 5432,
  user: PG_USERNAME,
  password: String(PG_PASSWORD),
  database: PG_DATABASE,
  ssl: PG_SSL === 'true'
});

const executeQuery = async (query: string, parameters?: QueryParameter[]): Promise<pg.QueryResult> => {
  const client = await pool.connect();
  try {
    const result = await client.query(query, parameters);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
      const dbError = error as DatabaseError;
      dbError.name = 'dbError';
      throw dbError;
    }

    const unknownError = new Error('Unknown database error');
    (unknownError as DatabaseError).name = 'dbError';
    throw unknownError;
  } finally {
    client.release();
  }
};

export default executeQuery;
