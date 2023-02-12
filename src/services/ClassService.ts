import { QueryResult } from "pg";
import { ClassEntityResponse } from "../entities/ClassEntityResponse";
import { ClassesError } from "../errors/ClassesError";
import { Repository } from "../repositories/Repository";

export class ClassService {

    constructor(
        private repository: Repository<object>
    ) {}

    public async getAvailableClass(): Promise<ClassesError | QueryResult> {

        const data: QueryResult = await this.repository.select(['name', 'health', 'damage', 'attack_type', 'ability']);

        if( data.rows.length < 0 ) {
            return new ClassesError( `Don't find classes` );
        }
        
        return data;
    }

}