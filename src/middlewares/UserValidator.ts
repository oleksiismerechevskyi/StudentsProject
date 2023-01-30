import { NextFunction, Request, Response } from "express";
import { body, check, validationResult } from "express-validator";

export class UserValidator{
    
    public static loginValidate() {
        return [
            check('username').notEmpty().isLength({min: 5}),
            check('password').notEmpty().isLength({min: 8}).custom((value: string, { req, location, path }) => {
                
                let numbers: string[] = ['0','1','2','3','4','5','6','7','8','9'];
                
                for( let el of numbers ) {
                    let result: boolean = value.includes(el);
        
                    if( result ) {
                        return true;
                    }
                }


                return false;
                
            })
        ];
    }

    public static registerValidate() {
        return [
            check('username').notEmpty().isLength({min: 5}),
            check('password').notEmpty().isLength({min: 8}).custom((value: string, { req, location, path }) => {
                
                let numbers: string[] = ['0','1','2','3','4','5','6','7','8','9'];
                
                for( let el of numbers ) {
                    let result: boolean = value.includes(el);
        
                    if( result ) {
                        return true;
                    }
                }


                return false;
                
            }),
            check('confirmPassword').notEmpty().custom((value: string, { req, location, path }) => value === req.body.password),
            check('userClass').notEmpty().custom((value: string) => {
                let classes = ['mage', 'warrior', 'rogue'];
                if(classes.includes(value)) {
                    return true;
                }

                return false;
            })
        ];
    }
}