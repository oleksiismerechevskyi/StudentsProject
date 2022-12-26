import express, { NextFunction, Request, Response } from 'express';
import { UserController } from '../controllers/UserController';
import { UserValidator } from '../middlewares/UserValidator';

export const authRouter = express.Router();

authRouter.get('/login', UserController.getLoginHandler);

authRouter.post('/login', UserValidator.loginValidate(), UserController.postLoginHandler);

authRouter.get('/register', UserController.getRegisterHandler);

authRouter.post('/register',UserValidator.registerValidate(), UserController.postRegisterHandler);

