import { UserLoginDto } from "../entities/UserLoginDto";
import { UserRegisterDto } from "../entities/UserRegisterDto";
import { v4 as uuidv4 } from "uuid";
import jsonwebtoken from 'jsonwebtoken';

export class UserService{

    constructor(
        private repository: any
    ) {}

    public processedRegisterUserData(requestData: UserRegisterDto): string {
        
        /**
         * Here will be query to repository and insert new row into db.
         */

        const processedData: UserRegisterDto = {
            id: uuidv4(),
            username: requestData.username,
            password: requestData.password,
            confirmPassword: requestData.confirmPassword,
            userClass: requestData.userClass,
        };

        const tokenData: UserLoginDto = {
            username: requestData.username,
            password: requestData.password
        }
        
        const token: string = jsonwebtoken.sign(tokenData, process.env.JWT_SECRET!);
        console.log('Processed request register data in Service');
        return token;
    }

    public processedLoginUserData(requestData: UserLoginDto) {
        
        /**
         * Here will be query to repository and find proper user.
         */

        const tokendata: UserLoginDto = requestData;
        const token: string = jsonwebtoken.sign(tokendata, process.env.JWT_SECRET!);
        console.log('Processed request login data in Service');
        return token;
    }
}