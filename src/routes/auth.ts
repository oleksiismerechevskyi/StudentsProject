import express, { NextFunction, Request, Response } from 'express';
import { UserController } from '../controllers/UserController';
import { asyncMiddleware } from '../middlewares/asyncMiddleware';
import { UserValidator } from '../middlewares/UserValidator';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';

export const authRouter = express.Router();

const authRepository = new UserRepository();
const authService = new UserService(authRepository);
const authController = new UserController(authService);

authRouter.get('/login', asyncMiddleware(authController.getLoginHandler));

authRouter.post('/login', UserValidator.loginValidate(), asyncMiddleware(authController.postLoginHandler.bind(authController)));

authRouter.get('/register', asyncMiddleware(authController.getRegisterHandler));

authRouter.post('/register',UserValidator.registerValidate(), asyncMiddleware(authController.postRegisterHandler.bind(authController)));

