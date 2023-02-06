import { WebSocketServer } from "ws";
import { Server } from 'http';
import { EventController } from "../controllers/EventController";
import { EventService } from "../services/EventService";
import { IncomingMessage } from "http";
import { v4 as uuidv4 } from "uuid";
import { EventMessageDto } from "../entities/EventMessageDto";
import { EventError } from "../errors/EventError";

export const getWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server: server });

    const eventService = new EventService('');
    const eventController = new EventController(eventService, wss);

    wss.on('connection', (socket: any, req: any) => {

        /**
         * Setup some properties here on connection.
         */

        console.log('connection occurred');

        let uid: string = uuidv4();
        eventController.connectedUsers.set(uid, socket);

        socket.on('message', (message: any) => {

            /**
             * Decode and parsing message data.
             */

            messageController(message, socket, eventController);

        });


        socket.on('close', () => { console.log('close') });
        socket.on('error', (err:any) => { console.log('error ' + err.message) });
    });


    wss.on('error', (err) => console.log('WS error ' + err.message));
    return wss;
}

const messageController = (data: string, socket: WebSocket, controller: EventController) => {
    try {
        let decodedData: EventMessageDto = JSON.parse(data);

        if( typeof controller.actions[decodedData.action] === 'function' ) {
            if( 'messageToAll' === decodedData.action ) {
                return controller.actions[decodedData.action].bind(controller)(decodedData.message);
            }
    
            if( 'message' === decodedData.action ) {
                return controller.actions[decodedData.action].bind(controller)(decodedData.message, decodedData.userId);
            }
    
            return controller.actions[decodedData.action].bind(controller)(decodedData.userId);
        }

        throw new Error("Action doesn't exist");

    } catch(err: any) {
        socket.send('Error occured');
        throw new EventError( err.message );
    }
    
}