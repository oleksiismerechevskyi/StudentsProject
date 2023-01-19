import { EventEntityResponse } from "../entities/EventEntityResponse";
import { EEventType } from "../enums/EEventType";

export class EventService {

    constructor(
        private repository: any
    ) {}

    public messageServiceData(message: string) {
        console.log('Entered into messageServiceData');
        
        let data: EventEntityResponse = {
            type: EEventType.EVENT_MESSAGE,
            userId: 1,
            message: message
        }
        return data;
    }

    public spellServiceData() {
        console.log('Entered into spellServiceData');

        let data: EventEntityResponse = {
            type: EEventType.EVENT_ABILITY,
            userId: 1
        }
        return data;
        
    }

    public restoreServiceData() {
        console.log('Entered into restoreServiceData');

        let data: EventEntityResponse = {
            type: EEventType.EVENT_RESTORE,
            userId: 1
        }
        return data;
    }

    public attackServiceData() {
        console.log('Entered into attackServiceData');

        let data: EventEntityResponse = {
            type: EEventType.EVENT_ATTACK,
            userId: 1
        }
        return data;
    }

}