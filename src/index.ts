import { Player } from "./classes/Player";
import { PlayerFactory } from "./classes/PlayerFactory";
import { PlayerService } from "./classes/Service/PlayerService";
import { ECharacterClass } from "./enums/ECharacterClass";
import { EPlayerActions } from "./enums/EPlayerActions";
import express from 'express';
import { WebSocketServer } from 'ws';

const warrior = PlayerFactory.create('Alex', ECharacterClass.WARRIOR);
const mage = PlayerFactory.create('Enemy', ECharacterClass.MAGE);

if (warrior instanceof Player && mage instanceof Player) {

    const service = new PlayerService();
    service.useAction(EPlayerActions.PLAYER_ATTACK, warrior, mage);
    service.useAction(EPlayerActions.PLAYER_SPELL, warrior);
}

/**
 * Experess installation
 */
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

/**
 * Websocket installation
 */

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws: any) => {
    console.log("new client connected");

    ws.on("message", (data: any) => {
        console.log(`Client has sent us: ${data}`);
        ws.send("response");
    });

    ws.on("close", () => {
        console.log("the client has connected");
    });

    ws.onerror = function () {
        console.log("Some Error occurred");
    }
});
console.log("The WebSocket server is running on port 8080");