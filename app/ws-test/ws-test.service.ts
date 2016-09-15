import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject'

import {$WebSocket} from 'angular2-websocket/angular2-websocket'

@Injectable()
export class WsTestService {

    private ws:$WebSocket

    private socket: Subject<MessageEvent>

    constructor(){}

    // Devulve una excepcion si esta mal formulada la URL pero no devuelve mensaje alguno si
    // no se ha podido establecer conexión (handshake, timeout, etc)
    public connect(){
        this.ws = new $WebSocket("ws://localhost:8899/testWs");
        console.log("method: connect")
        return this.ws.getDataStream();
    }

    public closeConnection(){
        console.log("method: closeConnection")
        this.ws.close(true);
    }

    private test(){
        let ws = new WebSocket("")
        ws.readyState === WebSocket.OPEN
    }

/*
    private socket: Subject<MessageEvent>;

    constructor() { }

    private create(url): Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Observable.create(
            (obs: Observer<MessageEvent>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);
                return ws.close.bind(ws);
            }
        );

        let observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
            error: (data: Object)=> {
                // log error
            },
            complete:  ()=> {

            }
        };

        return Subject.create(observer, observable);
    }
      
    public connect(url): Subject<MessageEvent> {
        if(!this.socket) {
        this.socket = this.create(url);
        }
        return this.socket;
    }
*/
}