import { WebSocketServer} from "ws";
import { Server } from 'http';
import { EventController } from "./controllers/EventController";

export const getWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server: server });

    wss.on('connection', EventController.connection);
    wss.on('spell', EventController.spell);
    wss.on('message', EventController.message);
    wss.on('attack', EventController.attack);
    wss.on('regeneration', EventController.restore);
    wss.on('close', EventController.close);

    return wss;
}