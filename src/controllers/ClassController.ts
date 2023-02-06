import { NextFunction, Request, Response } from "express";
import { ClassService } from "../services/ClassService";
import { WebSocket } from "ws";
import { getDBInstance } from "../config/db";

export class ClassController {

    constructor(
        private classService: ClassService
    ) {}

    public async getClassesHandler(req: Request, res: Response, next: NextFunction) {
        const db = await getDBInstance();
        console.log(db);
        
        res.status(200).json({
            message: 'Here is classes classes page! Welcome'
        });
    }
}