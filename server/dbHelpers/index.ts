import pool from '../../database/index'
import type { UserSignUpInfo } from './dbHelper_types'

const db = {
  addUser: async ({ email, name, password }: UserSignUpInfo) => {
    const queryStr = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}') RETURNING id, name, email, team_ids`;
    try {
      const result = await pool.query(queryStr);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getUser: async (email: string) => {
    const queryStr = `SELECT * FROM users WHERE email = '${email}'`;
    try {
      const result = await pool.query(queryStr);
      return result;
    } catch (err) {
      return null;
    }
  }
}

export default db;