import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'

// Este servicio es el que ofrece Websockets, por ahora solo puede dar uno por instancia
// Es decir, que se puede compartir la conexión entre varios componentes, ya que este servicio 
// siempre mostraria lo mismo (devolveria a todos los componentes que lo incluyan lo mismo)

@Injectable()
export class WsTestService {

    private subject: Subject<MessageEvent>;

    public connect(url): Subject<MessageEvent> {
        if(!this.subject) {
            console.log("Define the subjec<MessageEvent>")
            this.subject = this.create(url);
        }

        return this.subject;
    }

    public disconnect(){
        console.log("undefine the subject")
        this.subject = undefined;
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