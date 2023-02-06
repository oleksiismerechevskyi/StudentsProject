import http from 'http';
import { getApp } from "./config/app";
import { getWebSocketServer } from "./config/websocket";
import * as dotenv from "dotenv";
import dotenvExpand from 'dotenv-expand';
import pg from 'pg'

const config = dotenv.config();
dotenvExpand.expand(config);

const port = process.env.PORT;
const server = http.createServer(getApp());
const WebSocketServer = getWebSocketServer(server);
console.log(`The WebSocket server is running`);

server.listen(port, async() => {

    const client: pg.Client = new pg.Client({
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT!),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
        })
  
      client.connect((err) => {
      if (err) {
        console.error('Postgres database connection error', err.stack)
      } else {
        console.log('Postgres database connected successfully')
      }
      });
    
    console.log(`Example app listening on port ${port}`);
});

