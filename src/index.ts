import { Player } from "./classes/Player";
import { PlayerFactory } from "./classes/PlayerFactory";
import { PlayerService } from "./classes/Service/PlayerService";
import { ECharacterClass } from "./enums/ECharacterClass";
import { EPlayerActions } from "./enums/EPlayerActions";
import http from 'http';
import { getApp } from "./app";
import { getWebSocketServer } from "./websocket";
import * as dotenv from "dotenv";
import dotenvExpand from 'dotenv-expand';
import { Client, Pool } from "pg";

const config = dotenv.config();
dotenvExpand.expand(config);

console.log(process.env.DATABASE_URL);

// const client = new Pool({
//     host: process.env.DATABASE_HOST,
//     port: parseInt(process.env.DATABASE_PORT!),
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME
//     })

// client.connect((err) => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected')
//   }
// })


// const warrior = PlayerFactory.create('Alex', ECharacterClass.WARRIOR);
// const mage = PlayerFactory.create('Enemy', ECharacterClass.MAGE);

// if (warrior instanceof Player && mage instanceof Player) {
//     const service = new PlayerService();
//     service.useAction(EPlayerActions.PLAYER_ATTACK, warrior, mage);
//     service.useAction(EPlayerActions.PLAYER_SPELL, warrior);
// }

const port = process.env.PORT;
const server = http.createServer(getApp());
const WebSocketServer = getWebSocketServer(server);
console.log(`The WebSocket server is running`);

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

