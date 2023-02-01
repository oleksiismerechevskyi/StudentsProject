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
import pg from 'pg'

const config = dotenv.config();
dotenvExpand.expand(config);


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
    const client: pg.Client = new pg.Client({
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT!),
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
      })

    client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
    });
    console.log(`Example app listening on port ${port}`);
});

