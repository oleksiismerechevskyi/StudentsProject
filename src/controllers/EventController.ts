import { WebSocket, WebSocketServer } from "ws";
import { EventService } from "../services/EventService";
import { IncomingMessage } from "http";
import { v4 as uuidv4 } from "uuid";
import { EventError } from "../errors/EventError";
import { EventMessageDto } from "../entities/EventMessageDto";
import { EventEntityResponse } from "../entities/EventEntityResponse";

export class EventController {
    private connectedUsers: Map<string, WebSocket> = new Map<string, WebSocket>;
    private actions: { [key: string]: Function } = {
        "spell": this.spell,
        "messageToAll": this.messageToAll,
        "attack": this.attack,
        "restore": this.restore,
        "message": this.message,
    }

    constructor(
        private eventService: EventService,
        private webSocketServer: WebSocketServer,
    ) {

    }

    public connection(socket: WebSocket, req: IncomingMessage) {
        console.log('connection occurred');

        let uid: string = uuidv4();
        this.connectedUsers.set(uid, socket);
        
        socket.on('message', (data: string) => {
            try{
                this.messageController(data, socket, req);
            } catch(err: any) {
                socket.close();
                throw new EventError('Message Controller error - ' + err.message);
            }
            
        });
        socket.on('close', this.close.bind(socket));
        socket.on('error', this.error.bind(socket));

    }

    public error(err: any) {
        console.error('websocket error ' + err.message);
        
    }

    public close() {
        console.log('close occurred');
    }

    public messageController(data: string, socket: WebSocket, req: IncomingMessage) {
        try {
            let decodedData: EventMessageDto = JSON.parse(data);
            this.actionHandler(decodedData.action, decodedData.message);
        } catch( err: any) {
            socket.send('Error occured');
            throw new EventError( err.message );
        }
        
    }

    protected actionHandler(actionName: string, message?: string) {
        for(let name in this.actions) {
            if( name === actionName ) {
                if('message' === actionName || 'messageToAll' === actionName) {
                    return this.actions[actionName].bind(this)(message);
                }
                return this.actions[actionName].bind(this)();
            }
           
        }

        throw new EventError( "Action doesn't exist" );
    }

    public message(message: string) {
        console.log( 'Entered into message action' );
        let data: EventEntityResponse = this.eventService.messageServiceData(message);
        console.log(data);
        console.log('Done!');
    }

    public messageToAll(message: string) {
        this.connectedUsers.forEach((client: WebSocket) => {
            if (client.readyState === WebSocket.OPEN && client instanceof WebSocket) {
                console.log( 'Entered into messageToAll action' );
                let data: EventEntityResponse = this.eventService.messageServiceData(message);
                console.log(data);
                console.log('Done!');
            }
          });
    }

    public spell() {
        console.log( 'Entered into spell action' );
        let data: EventEntityResponse = this.eventService.spellServiceData();
        console.log(data);
        console.log('Done!');
    }

    public attack() {
        console.log( 'Entered into attack action' );
        let data: EventEntityResponse = this.eventService.attackServiceData();
        console.log(data);
        console.log('Done!');
    }

    public restore() {
        console.log( 'Entered into restore action' );
        let data: EventEntityResponse = this.eventService.restoreServiceData();
        console.log(data);
        console.log('Done!');
    }
}