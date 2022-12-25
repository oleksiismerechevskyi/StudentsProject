import express, { NextFunction, Request, Response } from 'express';

export const authRouter = express.Router();


authRouter.get('/login', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'Here is a login page! Welcome'
    });

});

authRouter.get('/register', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'Here is a register page! Welcome'
    });

});

authRouter.post('/register', (req: Request, res: Response, next: NextFunction) => {
    let data: string = JSON.stringify(req.body);
    res.send( `Try to register in with ${data}` );
});

authRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
    let data: string = JSON.stringify(req.body);
    res.send( `Try to log in with ${data}` );
});
