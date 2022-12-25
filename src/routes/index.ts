import { Router } from "express";
import { authRouter } from '../routes/auth';
import { classesRouter } from "./classes";
import { playerRouter } from "./player";

export const router = Router();

router.use('/auth', authRouter);

router.use('/player', playerRouter);

router.use('/classes', classesRouter);