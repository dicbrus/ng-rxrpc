import {RxRpcTransport} from './rxrpc-transport';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket'
import {Observable} from 'rxjs';

export class RxRpcWebSocketTransport extends RxRpcTransport {
    private readonly webSocket: WebSocketSubject<any>;

    get messages(): Observable<any> {
        return this.webSocket;
    }

    constructor(url: string) {
        super();
        this.webSocket = webSocket(url);
    }

    send(msg: any) {
        this.webSocket.next(msg);
    }

    close() {
        this.webSocket.complete();
    }
}