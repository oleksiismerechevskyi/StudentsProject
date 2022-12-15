import express, { NextFunction, Request, Response } from 'express';

export const classesRouter = express.Router();


classesRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'Here is classes classes page! Welcome'
    });

});

