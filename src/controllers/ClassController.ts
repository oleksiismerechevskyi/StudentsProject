import { NextFunction, Request, Response } from "express";
import { ClassService } from "../services/ClassService";
import { WebSocket } from "ws";

export class ClassController {

    constructor(
        private classService: ClassService
    ) {}

    public getClassesHandler(req: Request, res: Response, next: NextFunction) {

        let socket: WebSocket = new WebSocket('ws://localhost' + req.url);

        socket.on('message', function(data: any) {
            console.log(data);

        });

        let serviceData = this.classService.getClassData();

        res.status(200).json({
            message: 'Here is classes classes page! Welcome'
        });
    }
}