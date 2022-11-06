import { NgIf } from '@angular/common';
import {Component} from'@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'server.component.html'
})
export class ServerComponent{
        ServerId :number=10;
        serverstatus:string="offline";

    constructor(){
        this.serverstatus=Math.random()>0.5?"online":"offline";
    }    

    getserverstatus(){
        return this.serverstatus;
    }

    getColor(){
        return this.serverstatus==="online"?"green":"red"
    }

}