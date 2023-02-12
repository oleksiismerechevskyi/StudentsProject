import { NextFunction, Request, Response } from "express";
import { body, check, validationResult } from "express-validator";

export class UserValidator{
    
    public static loginValidate() {
        return [
            check('email').notEmpty().isEmail(),
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
            check('email').notEmpty().isEmail(),
            check('class_id').notEmpty().custom((value: string) => {
                
                if( value === '1' || value === '2' || value === '3' ) {
                    return true;
                }

                return false;
            })
        ];
    }

    public static updateValidate() {
        return [
            check('username').notEmpty().isLength({min: 5}),
            check('oldPassword').notEmpty().isLength({min: 8}).custom((value: string, { req, location, path }) => {
                
                let numbers: string[] = ['0','1','2','3','4','5','6','7','8','9'];
                
                for( let el of numbers ) {
                    let result: boolean = value.includes(el);
        
                    if( result ) {
                        return true;
                    }
                }


                return false;
                
            }),
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
            check('class_id').notEmpty().custom((value: string) => {
                
                if( value === '1' || value === '2' || value === '3' ) {
                    return true;
                }

                return false;
            })
        ]
    }
}