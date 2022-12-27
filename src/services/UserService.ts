import { UserEntityResponse } from "../entities/UserEntityResponse";

export class UserService{

    constructor(
        private repository: any
    ) {}

    public getUserData() {

        return new UserEntityResponse(
            'name',
            'password'
        );
    }
}