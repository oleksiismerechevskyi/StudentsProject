import { Repository } from "./Repository";
import { UserRepositoryDto } from "./dto/UserRepositoryDto";

export class UserRepository extends Repository<UserRepositoryDto> {
    
    constructor() {
        super('users');
    }
}