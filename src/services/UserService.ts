import { UserLoginDto } from "../entities/UserLoginDto";
import { UserRegisterDto } from "../entities/UserRegisterDto";
import { v4 as uuidv4 } from "uuid";
import jsonwebtoken from 'jsonwebtoken';
import { Repository } from "../repositories/Repository";
import { UserRepositoryDto } from "../repositories/dto/UserRepositoryDto";
import { QueryResult } from "pg";
import moment from "moment";
import { AuthError } from "../errors/AuthError";

export class UserService {

    constructor(
        private repository: Repository<object>
    ) {}

    public async processedRegisterUserData(requestData: UserRegisterDto): Promise<UserRepositoryDto | AuthError> {

        let processedDto: UserRepositoryDto = {
            name: requestData.username,
            password: requestData.password,
            class_id: requestData.class_id,
            email: requestData.email,
            created_at: moment().format('YYYY-MM-DD hh:mm:ss')
        }

        let existedUserResults: QueryResult = await this.repository.select(['email'], {email: requestData.email});
        console.log(existedUserResults);
        
        if( existedUserResults.rows.length > 0 ) {
            return new AuthError('User already exists');
        }
        
        let isCreated: QueryResult = await this.repository.create(processedDto);
        let createdUser: QueryResult<UserRepositoryDto> = await this.repository.select(['name','email', 'password', 'class_id', 'created_at', 'updated_at'], {email: requestData.email});

        console.log('Processed request register data in UserService');
        return createdUser.rows[0];
    }

    public async processedLoginUserData(requestData: UserLoginDto): Promise<string|AuthError> {
        const data = await this.repository.select( ['email', 'password'], {'email': requestData.email, 'password': requestData.password} );
        console.log('Processed request login data in UserService');
        if( data.rows.length === 0 ) {
            return new AuthError("User doesn't exist");
        }
        
        const token: string = jsonwebtoken.sign(data.rows[0], process.env.JWT_SECRET!);
        return token;
    }
}