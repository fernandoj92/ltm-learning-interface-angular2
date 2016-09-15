import { Component, OnInit } from '@angular/core';

import {Observer} from 'rxjs/Observer'

import { WsTestService } from './ws-test.service'

@Component({
    moduleId: module.id,
    selector: 'ws-test',
    templateUrl: 'ws-test.component.html'
})
export class WsTestComponent implements OnInit {

    messages: Array<string>
    wsConnection // No puedo inferir el tipo porque me da un error extraño: ()=> Subject<any> != Subject<any>
    subscription

    constructor(private service: WsTestService) { }

    defaultWsMessage = (msg) =>{
        this.messages.push(msg)
        console.log('Message: ' + msg);  
    }

    defaultWsError = (err) => {
        console.log('Error: ' + err);
    }

    defaultWsCompleted = () => {
        console.log('Completed');
    }

    ngOnInit() { }

    onClickConnect(){
        this.wsConnection = this.service.connect();
        this.subscription = this.wsConnection.subscribe(
            this.defaultWsMessage,
            this.defaultWsError,
            this.defaultWsCompleted
        );
        console.log("method: onClickConnect finalizado")
    }

    onClickRemove(){
        this.subscription.unsubscribe();
        this.service.closeConnection();
        console.log("Adios conexion")
    }

}