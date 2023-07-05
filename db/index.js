// import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'teqbridgeltddb',
//   password: 'chijioke',
//   port: 5432,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

// export default pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
