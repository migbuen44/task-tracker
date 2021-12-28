import type { Request, Response } from 'express'
import db from '../dbHelpers'
import bcrypt from 'bcrypt'
import type { AddUserResponse } from './controller_types'

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
    const resObj: AddUserResponse = result.rows[0];
    res.json(resObj);
  },
}

export default controller;

