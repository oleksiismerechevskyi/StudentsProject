import express, { NextFunction, Request, Response } from "express";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    
    res.status(500).json(
        {
            message: 'Ooops something went wrong'
        }
    );
    
}