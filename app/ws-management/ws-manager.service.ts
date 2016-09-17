import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject'

@Injectable()
export class WsManagerService {

    // Base WebSocket  URL
    private basePath: string = "ws://localhost:8899"

    // Server WebSocket relative URLs
    private testWsUrl: string = this.basePath + "/testWs"
    private testWsUrl2: string = this.basePath + "/testWs2"

    private wsConnections: Array<Subject<MessageEvent>>

    constructor() { }

    public getConnection(){
        
    }

    public disconnect(){

    }
}