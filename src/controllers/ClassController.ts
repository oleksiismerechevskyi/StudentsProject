import { NextFunction, Request, Response } from "express";
import { ClassService } from "../services/ClassService";
import { WebSocket } from "ws";

export class ClassController {

    constructor(
        private classService: ClassService
    ) {}

    public async getClassesHandler(req: Request, res: Response, next: NextFunction) {        
        res.status(200).json({
            message: 'Here is classes classes page! Welcome'
        });
    }
}