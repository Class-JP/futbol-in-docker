import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "futbol_in_db",
  password: "pass4321",
  port: 5432,
});
