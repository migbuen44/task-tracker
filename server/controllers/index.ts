import type { Request, Response } from 'express'
import db from '../dbHelpers'
import bcrypt from 'bcrypt'
import type { UserEntryRes } from './controller_types'
import { sendStatusCode } from 'next/dist/server/api-utils'

const controller = {
  addUser: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);
    if(!passwordHash) return res.sendStatus(500);
    const addUserDbArg = {
      name,
      email,
      password: passwordHash,
    }
    const result = await db.addUser(addUserDbArg);
    if(!result) return res.sendStatus(500);
    const resObj: UserEntryRes = result.rows[0];
    res.json(resObj);
  },
  getUser: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await db.getUser(email);
    if(!result) return res.sendStatus(500);
    const userInfo = result.rows[0];
    if(!userInfo) return res.sendStatus(404);
    const { name, id, team_ids } = userInfo;
    const dbPassword = userInfo.password;
    const match = await bcrypt.compare(password, dbPassword);
    if(!match) return res.sendStatus(401);
    const resObj: UserEntryRes = {
      id,
      name,
      email,
      team_ids,
    }
    res.json(resObj);
  }
}

export default controller;

