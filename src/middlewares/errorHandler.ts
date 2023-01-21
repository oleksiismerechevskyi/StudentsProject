import express, { NextFunction, Request, Response } from "express";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
   
    console.warn('error', '', {
        message: `Error Handler - ${error.name}`,
        action: `${req.method} : ${req.url}`,
        body: {
            ...req.body,
        },
        error,
    });

    res.status(500).send(error.message);
}