import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserService } from "../services/UserService";

export class UserController {
    
    constructor(
        private userService: UserService
    ) {}

    public getLoginHandler(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            message: 'Here is a login page! Welcome'
        });
    
    }
    
    public postLoginHandler(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
          throw new Error('VALIDATION ERROR');
        }
        let data: string = JSON.stringify(req.body);
        
        let serviceData = this.userService.getUserData();
        res.send( `Try to login in with ${data}` );
    }

    public getRegisterHandler(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            message: 'Here is a register page! Welcome'
        });
    

    }
    public postRegisterHandler(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
            throw new Error('VALIDATION ERROR');
        }
        let data: string = JSON.stringify(req.body);
        res.send( `Try to register in with ${data}` );
    }
}