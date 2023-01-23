import { Player } from "./classes/Player";
import { PlayerFactory } from "./classes/PlayerFactory";
import { PlayerService } from "./classes/Service/PlayerService";
import { ECharacterClass } from "./enums/ECharacterClass";
import { EPlayerActions } from "./enums/EPlayerActions";
import http from 'http';
import { getApp } from "./app";
import { getWebSocketServer } from "./websocket";
import * as dotenv from "dotenv";

dotenv.config();

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

