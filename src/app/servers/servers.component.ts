import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //selecting by component
  
  //selector: '.app.servers'  selecting by class
  //selector:'[app server] selecting by attribute

  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

allownewserver=false;
servercreationstatus="No Server Created";
serverName="hII";
ifservercreated=false;
  constructor() { 
    setTimeout(() => {
      this.allownewserver=true;
    },2000);
  }

  ngOnInit(): void {
  }

  serverstatusfn(){
    this.ifservercreated=true;
    this.servercreationstatus="Server Created. This is "+this.serverName;
  }

  EnteryourserverName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
