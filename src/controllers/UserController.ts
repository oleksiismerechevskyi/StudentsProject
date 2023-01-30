import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserService } from "../services/UserService";
import { AuthError } from "../errors/AuthError";
import { UserRegisterDto } from "../entities/UserRegisterDto";
import { UserLoginDto } from "../entities/UserLoginDto";

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
          throw new AuthError('Login post request error');
        }

        const token: string = this.userService.processedLoginUserData(req.body);
        res.json({token: token});
    }

    public getRegisterHandler(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            message: 'Here is a register page! Welcome'
        });
    

    }
    public postRegisterHandler(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
            throw new AuthError('Register post request error');
        }
        
        const token: string = this.userService.processedRegisterUserData(req.body);
        res.json({token: token});
    }
}