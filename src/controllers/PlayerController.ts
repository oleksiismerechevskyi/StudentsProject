import { NextFunction, Request, Response } from "express";
import { PlayerService } from "../services/PlayerService";
import { validationResult } from "express-validator";
import { PlayerError } from "../errors/PlayerError";
import { DecodedTokenRequest } from "../entities/DecodedTokenRequest";
import { QueryResult } from "pg";
import { UserRepositoryDto } from "../repositories/dto/UserRepositoryDto";

export class PlayerController {

    constructor(
        private playerService: PlayerService
    ) {}

    
    public async patchUpdateHandler(req: DecodedTokenRequest, res: Response, next: NextFunction): Promise<Response|void> {
        const errors = validationResult(req);        
        if (!errors.isEmpty()) {
             next(new PlayerError('Update patch request error (validation)'));
             return;
        }

        if(req.user === undefined) {
            next(new PlayerError('Update patch request error (token)'));
            return;
        }
        
        let isTokenValid: boolean = await this.playerService.tokenValidation(req.user);
        if( !isTokenValid ) {
            next(new PlayerError('Token is invalid (token #2)'));
            return;
        }
        const data: UserRepositoryDto = await this.playerService.processedUpdateUserData(req.body, req.user);

        return res.json(data);
    }
}