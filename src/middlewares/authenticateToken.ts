import { NextFunction, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { DecodedTokenRequest } from "../entities/DecodedTokenRequest";

export const authenticateToken = (req: DecodedTokenRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) {
        return res.sendStatus(401); 
    } 

    jsonwebtoken.verify(token, process.env.JWT_SECRET!, (err: any, decoded: any) => {

        if(err) {
            return res.sendStatus(403);
        }
        req.user = decoded;
        next();
      });
}