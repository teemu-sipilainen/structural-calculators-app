import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/login', authController.loginUser);
router.post('/quick-register', authController.quickRegisterUser);
router.post('/register', authController.registerUser);

export default router;