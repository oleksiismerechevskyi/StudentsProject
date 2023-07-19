import { Request } from "express";
import { UserLoginDto } from "./UserLoginDto";

export interface DecodedTokenRequest extends Request {
    user?: UserLoginDto
}