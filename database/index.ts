import pg from 'pg'
import config from './config'

const { Pool } = pg;

const pool = new Pool(config);

export default pool;