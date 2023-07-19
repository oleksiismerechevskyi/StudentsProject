import express, { NextFunction, Request, Response } from 'express';
import { PlayerController } from '../controllers/PlayerController';
import { asyncMiddleware } from '../middlewares/asyncMiddleware';
import { authenticateToken } from '../middlewares/authenticateToken';
import { UserValidator } from '../middlewares/UserValidator';
import { UserRepository } from '../repositories/UserRepository';
import { PlayerService } from '../services/PlayerService';

export const playerRouter = express.Router();

const repository = new UserRepository();
const playerService = new PlayerService(repository);
const playerController = new PlayerController(playerService);

playerRouter.patch('/', authenticateToken, UserValidator.updateValidate(), asyncMiddleware(playerController.patchUpdateHandler.bind(playerController)));

