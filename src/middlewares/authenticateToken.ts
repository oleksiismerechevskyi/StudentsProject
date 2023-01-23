import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // test token
    //token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzM2U3N2Y3LWE5OWEtNDU4Ni05NTE3LTRhOGRjYThhNTdjMyIsInVzZXJuYW1lIjoidmFzZGZzYWRmIiwicGFzc3dvcmQiOiIxMjMxMjMxMzEyMyIsImNvbmZpcm1QYXNzd29yZCI6IjEyMzEyMzEzMTIzIiwidXNlckNsYXNzIjoibWFnZSIsImlhdCI6MTY3NDQyNjAzOH0.bk0uKkg3jwRk8URdyErwuyB1ORowJhrT6GPhyBLQJ1w';
    
    if (token == null) {
        return res.sendStatus(401); 
    } 
    jsonwebtoken.verify(token, process.env.JWT_SECRET!, (err: any, decoded: any) => {

        if(err) {
            return res.sendStatus(403);
        }

        next();
      })
}