import express from 'express'
import controller from './controllers'

const router = express.Router();

router.post('/signup', controller.addUser);

export default router;