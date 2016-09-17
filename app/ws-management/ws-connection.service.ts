import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'

@Injectable()
export class WsConnectionService {

    public connect(url): Subject<MessageEvent> {
        return this.create(url);
    }

    private create(url): Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Observable.create((obs: Observer<MessageEvent>) => {
            //Here we are binding the events of the Websocket to the events of the Observable
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = () => {
                console.log("Connection has been closed");
                obs.complete.bind(obs);
            }
            ws.onopen = () => {
                console.log("Connection opened succesfully")
            }

            // Disposable?
            return ws.close.bind(ws);
        });
        // Bi-directional websocket -> bidirectional rxjs subject
        let observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };

        return Subject.create(observer, observable);
    }

}