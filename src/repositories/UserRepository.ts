import { Repository } from "./Repository";
import pg from "pg";
import { UserRepositoryDto } from "./dto/UserRepositoryDto";

export class UserRepository extends Repository<UserRepositoryDto> {
    
    constructor() {
        super('users')
    }
}