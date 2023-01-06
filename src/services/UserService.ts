import { UserEntityResponse } from "../entities/UserEntityResponse";

export class UserService{

    constructor(
        private repository: any
    ) {}

    public getUserData() {

        let data: UserEntityResponse = {
            "username": "user1",
            "password": 'pass',
            'confirmPassword': 'pass',
        }
        return data;
    }
}