import express, { NextFunction, Request, Response } from 'express';
import { UserController } from '../controllers/UserController';
import { UserValidator } from '../middlewares/UserValidator';
import { UserService } from '../services/UserService';

export const authRouter = express.Router();

const authService = new UserService('');
const authController = new UserController(authService);

authRouter.get('/login', authController.getLoginHandler);

authRouter.post('/login', UserValidator.loginValidate(), authController.postLoginHandler);

authRouter.get('/register', authController.getRegisterHandler);

authRouter.post('/register',UserValidator.registerValidate(), authController.postRegisterHandler);

