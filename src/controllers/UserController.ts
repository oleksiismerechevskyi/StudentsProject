import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserService } from "../services/UserService";
import { AuthError } from "../errors/AuthError";
import { UserRegisterDto } from "../entities/UserRegisterDto";
import { UserLoginDto } from "../entities/UserLoginDto";
import pg from "pg";
import { UserRepositoryDto } from "../repositories/dto/UserRepositoryDto";

export class UserController {
    
    constructor(
        private userService: UserService
    ) {}

    public async getLoginHandler(req: Request, res: Response, next: NextFunction) {
        
        res.status(200).json({
            message: 'Here is a login page! Welcome'
        });
    
    }
    
    public async postLoginHandler(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
            next(new AuthError('Login post request error'));
            return;
        }
        
        const token: string | AuthError = await this.userService.processedLoginUserData(req.body);
        if( token instanceof AuthError ) {
            next(token);
            return;
        }

        res.json({token: token});
    }

    public async getRegisterHandler(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            message: 'Here is a register page! Welcome'
        });
    }
    public async postRegisterHandler(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
             next(new AuthError('Register post request error'));
             return;
        }
        
        const data: UserRepositoryDto | AuthError = await this.userService.processedRegisterUserData(req.body);

        if( data instanceof AuthError ) {
            next(data);
            return;
        }

        res.json(data);
    }
}