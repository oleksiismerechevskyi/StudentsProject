import pg, { QueryResult } from "pg";

export abstract class Repository<T extends {[key:string]: any}> {

    protected tableName: string;

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    
    public async select(fields: string[], conditions: {[key: string]: string} = {}, operator: string = 'AND'): Promise<QueryResult> {

        let fieldsToInject: string = '*';

        if( fields.length > 0 ) {
            fieldsToInject = fields.join(', ');
        }

        const db: pg.Pool = await this.getDB();
        let query: string = `SELECT ${fieldsToInject} FROM ${this.tableName}`;
        query = this.addConditionQuery(query, conditions, operator);
        
        let result: pg.QueryResult = await db.query(query);

        return result;
    }

    public async create( data: T, conditions: {[key: string]: string} = {}, operator: string = 'AND' ): Promise<QueryResult> {
        
        let keys: string[] | string = Object.keys(data).join(', ');
        let values: string[] | string = Object.values(data);

        values = values.map((el) => {
            el = "'" + el + "'";
            return el;
        });

        values = values.join(', ');

        const db: pg.Pool = await this.getDB();
        let query: string = `INSERT INTO ${this.tableName} (${keys}) VALUES (${values})`;
        query = this.addConditionQuery(query, conditions, operator);

        let result: pg.QueryResult = await db.query(query);
        
        return result;
    }

    public async update( data: T, conditions: {[key: string]: string} = {}, operator: string = 'AND' ): Promise<QueryResult> {

        let keys: string[] | string = Object.keys(data);
        let values: string[] = [];
        let dataUpdate: string = '';

        keys.forEach((key: string, index: number) => {
            if(data[key].length === 0) {
                return;
            }
            values.push(`${key}='${data[key]}'`);
        });

        if(values.length > 0) {
            dataUpdate = values.join(', ');
        }

        const db: pg.Pool = await this.getDB();
        let query: string = `UPDATE ${this.tableName} SET ${dataUpdate}`;

        query = this.addConditionQuery(query, conditions, operator);
        console.log(query);
        
        let result: pg.QueryResult = await db.query(query);

        return result;
    }

    public async deleteById( id: number ): Promise<QueryResult> {

        const db: pg.Pool = await this.getDB();
        let query: string =  `DELETE FROM ${this.tableName} WHERE id='${id}'`;

        let result: pg.QueryResult = await db.query(query);

        return result;
    }

    protected async getDB(): Promise<pg.Pool> {
        const pool: pg.Pool = new pg.Pool({
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT!),
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB
        });

        return pool;
    }

    private addConditionQuery(query: string, conditions: {[key: string]: string} = {}, operator: string = 'AND'): string {

        let keys: string[] = Object.keys(conditions);
        if(keys.length > 0) {
            keys.forEach((key: string, index: number) => {
                if(index === 0) {
                    query += ` WHERE ${key}='${conditions[key]}'`;
                    return;
                }
                query += ` ${operator} ${key}='${conditions[key]}'`;

            });
        }

        return query;
    }

}