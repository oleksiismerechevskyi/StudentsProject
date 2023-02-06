import pg from 'pg'
import * as dotenv from "dotenv";
import dotenvExpand from 'dotenv-expand';

const config = dotenv.config();
dotenvExpand.expand(config);

export const getDBInstance = async () => {

    const pool: pg.Pool = new pg.Pool({
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT!),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    });
    
    return pool;
}

