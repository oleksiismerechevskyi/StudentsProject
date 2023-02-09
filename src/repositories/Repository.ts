import pg, { QueryResult } from "pg";

export abstract class Repository<T extends object> {

    protected tableName: string;

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    
    public async read( fields: string[] ) {

        let fieldsToInject: string = '*';

        if( fields.length > 0 ) {
            let fieldsToInject: string = fields.join(',');
        }
        const db: pg.Pool = await this.getDB();
        let result: pg.QueryResult = await db.query(
            'SELECT ' + fieldsToInject + 'FROM ' + this.tableName
        );

        return result.rows;
    }

    public async create( data: T ) {

        const keys: string = Object.keys(data).join(', ');
        const values: string = Object.values(data).join(', ');

        const db: pg.Pool = await this.getDB();

        let result: pg.QueryResult = await db.query(
            'INSERT INTO ' + this.tableName + ' (' + keys + ') VALUES (' + values + ')'
        );

        return result.rows;
    }

    public async update( data: T ) {

        const keys: string = Object.keys(data).join(', ');
        const values: string = Object.values(data).join(', ');

        const db: pg.Pool = await this.getDB();
        let result: pg.QueryResult = await db.query(
            'UPDATE INTO ' + this.tableName + ' (' + keys + ') VALUES (' + values + ')'
        );

        return result.rows;
    }

    public async deleteById( id: number ) {
        const db: pg.Pool = await this.getDB();
        let result: pg.QueryResult = await db.query(
            'DELETE FROM ' + this.tableName + ' WHERE id = ' + id
        );

        return result.rows;
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

}