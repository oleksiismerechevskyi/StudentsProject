import express, { NextFunction, Request, Response } from 'express';
import { ClassController } from '../controllers/ClassController';
import { ClassService } from '../services/ClassService';
import { authenticateToken } from '../middlewares/authenticateToken';

export const classesRouter = express.Router();

const classesService = new ClassService('');
const classesController = new ClassController(classesService);

classesRouter.get('/', authenticateToken, classesController.getClassesHandler.bind(classesController));

