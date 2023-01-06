import { ClassEntityResponse } from "../entities/ClassEntityResponse";

export class ClassService {

    constructor(
        private repository: any
    ) {}

    public getClassData() {

        let data: ClassEntityResponse = {
            "classes": ['somedata']
        }
        return data;
    }

}