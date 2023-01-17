import { WebSocket, WebSocketServer } from "ws";
import { EventService } from "../services/EventService";
import { IncomingMessage } from "http";

export class EventController {
    private connectedUsers: Set<WebSocket> = new Set();

    constructor(
        private eventService: EventService,
        private webSocketServer: WebSocketServer,
    ) {

    }

    public connection(socket: WebSocket, req: IncomingMessage) {
        console.log('connection occurred');
        socket.send('Hello there!');
        this.connectedUsers = this.webSocketServer.clients;
        socket.on('message', this.message.bind(this));
        socket.on('close', this.close.bind(socket));

    }

    public close() {
        console.log('close occurred');
    }

    public message(data: any, isBinary: any) {
        console.log('data occurred ' + data);
        let setIterator = this.connectedUsers.values();
        
        let firstValue: WebSocket = setIterator.next().value;

        firstValue.send(data, { binary: isBinary });
    }

    public messageToAll(data: any, isBinary: any) {
        this.connectedUsers.forEach((client: WebSocket) => {
            if (client.readyState === WebSocket.OPEN && client instanceof WebSocket) {
                client.send(data, { binary: isBinary });
            }
          });
    }

    public spell() {
        console.log('spell occurred');
    }

    public attack() {
        console.log('attack occurred');
    }

    public restore() {
        console.log('restore occurred');
    }
}