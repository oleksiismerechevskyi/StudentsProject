export class PlayerError extends Error {
    constructor(message: string) {
        if(message.length <= 0) {
            message = 'Oops. Something went wrong in Auth module'
        }
        super(message);
        this.name = this.constructor.name;
    }
}