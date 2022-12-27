import { ClassEntityResponse } from "../entities/ClassEntityResponse";

export class ClassService {

    constructor(
        private repository: any
    ) {}

    public getClassData() {

        return new ClassEntityResponse(['data']);
    }

}