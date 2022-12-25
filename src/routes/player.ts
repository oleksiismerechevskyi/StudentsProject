import express, { NextFunction, Request, Response } from 'express';

export const playerRouter = express.Router();


playerRouter.patch('/', (req: Request, res: Response, next: NextFunction) => {
    let data: string = JSON.stringify(req.body);
    res.json({
        message: 'Trying to update the player ' + data
    });

});

