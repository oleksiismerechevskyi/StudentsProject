import { WebSocketServer } from "ws";
import { Server } from 'http';
import { EventController } from "./controllers/EventController";
import { EventService } from "./services/EventService";

export const getWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server: server });

    const eventService = new EventService('');
    const eventController = new EventController(eventService, wss);

    wss.on('connection', eventController.connection.bind(eventController));
    wss.on('error', (err) => console.log('WS error ' + err.message));
    return wss;
}