import { WebSocket, WebSocketServer } from "ws";
import { EventService } from "../services/EventService";
import { IncomingMessage } from "http";
import { v4 as uuidv4 } from "uuid";
import { EventError } from "../errors/EventError";
import { EventMessageDto } from "../entities/EventMessageDto";
import { EventEntityResponse } from "../entities/EventEntityResponse";

export class EventController {
    public actions: { [key: string]: Function } = {
        "spell": this.spell,
        "messageToAll": this.messageToAll,
        "attack": this.attack,
        "restore": this.restore,
        "message": this.message,
    }

    public connectedUsers: Map<string, WebSocket> = new Map<string, WebSocket>;

    constructor(
        private eventService: EventService,
        private webSocketServer: WebSocketServer,
    ) {}

    public async message(userId: string, message: string) {
        console.log( 'Entered into message action' );
        let data: EventEntityResponse = this.eventService.messageServiceData(userId, message);
        console.log(data);
        console.log('Done!');
    }

    public async messageToAll(message: string) {
        this.connectedUsers.forEach((client: WebSocket) => {
            if (client.readyState === WebSocket.OPEN && client instanceof WebSocket) {
                console.log( 'Entered into messageToAll action' );
                let data: EventEntityResponse = this.eventService.messageToAllServiceData(message);
                console.log(data);
                console.log('Done!');
            }
          });
    }

    public spell(userId: string) {
        console.log( 'Entered into spell action' );
        let data: EventEntityResponse = this.eventService.spellServiceData(userId);
        console.log(data);
        console.log('Done!');
    }

    public attack(userId: string) {
        console.log( 'Entered into attack action' );
        let data: EventEntityResponse = this.eventService.attackServiceData(userId);
        console.log(data);
        console.log('Done!');
    }

    public restore(userId: string) {
        console.log( 'Entered into restore action' );
        let data: EventEntityResponse = this.eventService.restoreServiceData(userId);
        console.log(data);
        console.log('Done!');
    }
}