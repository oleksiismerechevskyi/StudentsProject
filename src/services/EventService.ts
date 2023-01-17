import { EventEntityResponse } from "../entities/EventEntityResponse";
import { EEventType } from "../enums/EEventType";

export class EventService {

    constructor(
        private repository: any
    ) {}

    public messageServiceLogic() {
        console.log('Some event service logic');

        let data: EventEntityResponse = {
            type: EEventType.EVENT_MESSAGE,
            userId: 1
        }
        return data;
    }

}