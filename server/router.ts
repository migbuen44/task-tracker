import express from 'express'
import controller from './controllers'

const router = express.Router();

router.post('/signup', controller.addUser);
router.post('/login', controller.getUser);

export default router;