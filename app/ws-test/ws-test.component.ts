import { Component, OnInit } from '@angular/core';

import {Observer} from 'rxjs/Observer'
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'

// Observable operators
import 'rxjs/add/operator/map';

import { WsTestService } from './ws-test.service'

@Component({
    moduleId: module.id,
    selector: 'ws-test',
    templateUrl: 'ws-test.component.html'
})
export class WsTestComponent implements OnInit {

    messages: Array<string>
    wsConnection: Subject<MessageEvent>
    messageStream : Observable<string>
    subscription

    constructor(private service: WsTestService) { 
        this.messages = new Array();
    }

    defaultWsMessage = (msg:MessageEvent) =>{
        this.messages.push(msg.data)
        console.log('Message: ' + msg);  
    }

    defaultWsError = (err) => {
        console.log('Error logeado por mi: ' + err);
    }

    defaultWsCompleted = () => {
        console.log('Completed');
    }

    ngOnInit() { 
        this.messages.push("test1");
        this.messages.push("test2");
        this.messages.push("test3");
        
    }

    onClickConnect(){
        this.wsConnection = this.service.connect("ws://localhost:8899/testWs");

        // Transformamos el stream de messageEvents en un stream de string
        this.messageStream = this.wsConnection
            .map((response: MessageEvent): string => {
                let data = JSON.parse(response.data);
                return JSON.stringify(data);
        });

        // Subscribimos un observer para utilizar los messageEvent recibidos
        this.subscription = this.wsConnection.subscribe(
            this.defaultWsMessage,
            this.defaultWsError,
            this.defaultWsCompleted
        );
        console.log("method: onClickConnect finalizado")
    }

    onClickDisconnect(){
        this.subscription.unsubscribe();
        this.service.disconnect();
        console.log("method: onClickDisconnect finalizado")
    }

}