import { ClassRepositoryDto } from "./dto/ClassRepositoryDto";
import { Repository } from "./Repository";

export class ClassRepository extends Repository<ClassRepositoryDto> {

    constructor() {
        super('classes');
    }
}