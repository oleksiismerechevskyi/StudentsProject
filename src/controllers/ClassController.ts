import { NextFunction, Request, Response } from "express";
import { ClassService } from "../services/ClassService";

export class ClassController {

    constructor(
        private classService: ClassService
    ) {}

    public getClassesHandler(req: Request, res: Response, next: NextFunction) {

        let serviceData = this.classService.getClassData();

        res.status(200).json({
            message: 'Here is classes classes page! Welcome'
        });
    }
}