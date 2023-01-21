import express, { Request, Response } from 'express';
import { errorHandler } from "./middlewares/errorHandler";
import { WebSocket } from 'ws';
import bodyParser from "body-parser";
import { router } from './routes/index';

export const getApp = () => {
    const app = express();
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.get('/', (req: Request, res: Response) => {       
        res.send('Hello World!');
    });
    
    app.use(router);
    app.use(errorHandler);

    return app;
};
