import { NextFunction, Request, Response } from "express";
import { ClassService } from "../services/ClassService";
import { WebSocket } from "ws";
import { ClassesError } from "../errors/ClassesError";
import { QueryResult } from "pg";

export class ClassController {

    constructor(
        private classService: ClassService
    ) {}

    public async getClassesHandler(req: Request, res: Response, next: NextFunction) {  
        
        const data: ClassesError | QueryResult = await this.classService.getAvailableClass();

        if( data instanceof ClassesError ) {
            next(data);
            return;
        }
        res.status(200).json(
            data.rows
        );
    }
}