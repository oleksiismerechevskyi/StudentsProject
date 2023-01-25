import { WebSocketServer } from "ws";
import { Server } from 'http';
import { EventController } from "./controllers/EventController";
import { EventService } from "./services/EventService";

export const getWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server: server });

    const eventService = new EventService('');
    const eventController = new EventController(eventService, wss);

    /**
     * Here will be set of connected users.
     */

    wss.on('connection', (socket: any, req: any) => {

        /**
         * Setup some properties here on connection.
         */

        socket.on('message', (message: any) => {

            /**
             * Decode and parsing message data.
             */

            message = JSON.parse(message);

            eventController.messageController(message, socket, req);

        });


        socket.on('close', () => { console.log('close') });
        socket.on('error', (err:any) => { console.log('error ' + err.message) });
    });


    wss.on('error', (err) => console.log('WS error ' + err.message));
    return wss;
}