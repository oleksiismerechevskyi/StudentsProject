import { NextFunction, Request, Response } from "express";

export class ClassController {

    public static getClassesHandler(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            message: 'Here is classes classes page! Welcome'
        });    
    }
}