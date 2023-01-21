export class EventError extends Error {
    constructor(message: string) {
        if(message.length <= 0) {
            message = 'Oops. Something went wrong in Event module'
        }
        super(message);
        this.name = this.constructor.name;
    }
}