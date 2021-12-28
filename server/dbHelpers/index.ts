import pool from '../../database/index'
import type { UserSignUpInfo } from './dbHelper_types'

const db = {
  addUser: ({ email, name, password }: UserSignUpInfo, callback: Function) => {
    const queryStr = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email})', '${password}') RETURNING id, name, email, team_ids`;
    pool.query(queryStr, (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    })
  }
}

export default db;