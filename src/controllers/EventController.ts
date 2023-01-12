export class EventController {

    public static connection(wss: any) {
        console.log('connection occurred');        
    }

    public static close() {
        console.log('close occurred');
    }

    public static message(data: any) {
        console.log('data occurred ' + data);
    }

    public static spell() {
        console.log('spell occurred');
    }

    public static attack() {
        console.log('attack occurred');
    }

    public static restore() {
        console.log('restore occurred');
    }
}