import type { Request, Response } from 'express'
import db from '../dbHelpers'
import bcrypt from 'bcrypt'
import type { AddUserResponse } from './controller_types'

const controller = {
  addUser: (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return res.sendStatus(500);
      const addUserDbArg = {
        name,
        email,
        password: hash,
      }
      db.addUser(addUserDbArg, (err: any, result: any) => {
        if (err) return res.sendStatus(500);
        const resObj: AddUserResponse = result.rows[0];
        res.json(resObj);
      })
    })
  }
}

export default controller;

