import { EEventType } from "../enums/EEventType";

export interface EventEntityResponse {
    type: EEventType;
    userId: number
}