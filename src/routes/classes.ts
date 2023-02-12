import express, { NextFunction, Request, Response } from 'express';
import { ClassController } from '../controllers/ClassController';
import { ClassService } from '../services/ClassService';
import { authenticateToken } from '../middlewares/authenticateToken';
import { asyncMiddleware } from '../middlewares/asyncMiddleware';
import { ClassRepository } from '../repositories/ClassRepository';

export const classesRouter = express.Router();

const classesRepository = new ClassRepository();
const classesService = new ClassService(classesRepository);
const classesController = new ClassController(classesService);

classesRouter.get('/', asyncMiddleware(classesController.getClassesHandler.bind(classesController)));

