import express, { NextFunction, Request, Response } from 'express';
import { ClassController } from '../controllers/ClassController';

export const classesRouter = express.Router();


classesRouter.get('/', ClassController.getClassesHandler);

