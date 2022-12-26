import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export class UserController {

    public static getLoginHandler(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            message: 'Here is a login page! Welcome'
        });
    
    }
    
    public static postLoginHandler(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
          throw new Error('VALIDATION ERROR');
        }
        let data: string = JSON.stringify(req.body);
        res.send( `Try to login in with ${data}` );
    }

    public static getRegisterHandler(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            message: 'Here is a register page! Welcome'
        });
    

    }
    public static postRegisterHandler(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
            throw new Error('VALIDATION ERROR');
        }
        let data: string = JSON.stringify(req.body);
        res.send( `Try to register in with ${data}` );
    }
}