import { EventEntityResponse } from "../entities/EventEntityResponse";
import { EEventType } from "../enums/EEventType";

export class EventService {

    constructor(
        private repository: any
    ) {}

    public messageToAllServiceData(message: string) {
        console.log('Entered into messageToAllServiceData');
        
        let data: EventEntityResponse = {
            type: EEventType.EVENT_MESSAGE,
            message: message
        }
        return data;
    }

    public messageServiceData(userId: string, message: string) {
        console.log('Entered into messageServiceData');
        
        let data: EventEntityResponse = {
            type: EEventType.EVENT_MESSAGE,
            userId: userId,
            message: message
        }
        return data;
    }

    public spellServiceData(userId: string) {
        console.log('Entered into spellServiceData');

        let data: EventEntityResponse = {
            type: EEventType.EVENT_ABILITY,
            userId: userId
        }
        return data;
        
    }

    public restoreServiceData(userId: string) {
        console.log('Entered into restoreServiceData');

        let data: EventEntityResponse = {
            type: EEventType.EVENT_RESTORE,
            userId: userId
        }
        return data;
    }

    public attackServiceData(userId: string) {
        console.log('Entered into attackServiceData');

        let data: EventEntityResponse = {
            type: EEventType.EVENT_ATTACK,
            userId: userId
        }
        return data;
    }

}