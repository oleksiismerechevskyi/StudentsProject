import moment from "moment";
import { QueryResult } from "pg";
import { UserLoginDto } from "../entities/UserLoginDto";
import { UserUpdateDto } from "../entities/UserUpdateDto";
import { PlayerError } from "../errors/PlayerError";
import { UserRepositoryDto } from "../repositories/dto/UserRepositoryDto";
import { Repository } from "../repositories/Repository";

export class PlayerService {

    constructor(
        private repository: Repository<object>
    ) {}

    public async processedUpdateUserData(processedData: UserUpdateDto, user: UserLoginDto): Promise<UserRepositoryDto> {

        const processedDto: UserRepositoryDto = {
            name: processedData.username,
            password: processedData.password,
            class_id: processedData.class_id,
            email: user.email,
            updated_at: moment().format('YYYY-MM-DD hh:mm:ss')
        }
        let isUpdate: QueryResult = await this.repository.update(processedDto, {'email': user.email, 'password': user.password});
        let updatedUser: QueryResult<UserRepositoryDto> = await this.repository.select(['name','email', 'password', 'class_id', 'created_at', 'updated_at'], {email: user.email});

        console.log('Processed request update data in PlayerService');
        
        return updatedUser.rows[0];
    }

    public async tokenValidation(processedData: UserLoginDto): Promise<boolean>{
        
        let result: QueryResult = await this.repository.select(['name','email'], {"email": processedData.email, "password": processedData.password});

        if(result.rows.length > 0) {
            return true;
        }

        return false;
    }

}