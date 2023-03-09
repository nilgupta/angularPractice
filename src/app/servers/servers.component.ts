import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
addNewServers =false;
serverCreationStatus = 'No server was created';
serverName = 'TestServer';
  constructor(  ) { 
    setTimeout(() => {
      this.addNewServers=true;
    }, 2000);
  }

  ngOnInit(): void {
  }
onchangeServerStatus(){
  this.serverCreationStatus = 'server was created! name is' + this.serverName ;
}
onUpdateServerName(event :Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}
}
