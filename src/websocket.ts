import { WebSocketServer } from "ws";
import { Server } from 'http';
import { EventController } from "./controllers/EventController";
import { EventService } from "./services/EventService";

export const getWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server: server });

    const eventService = new EventService('');
    const eventController = new EventController(eventService, wss);

    wss.on('connection', eventController.connection.bind(eventController));
    wss.on('spell', eventController.spell.bind(eventController));
    wss.on('message', eventController.message.bind(eventController));
    wss.on('messageToAll', eventController.messageToAll.bind(eventController));
    wss.on('attack', eventController.attack.bind(eventController));
    wss.on('regeneration', eventController.restore.bind(eventController));
    wss.on('close', eventController.close.bind(eventController));
    wss.on('test', function() {console.log('there is a test');
    });

    return wss;
}