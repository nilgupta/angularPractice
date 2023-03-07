import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
addNewServers =false;
serverCreationStatus = 'No server was created';
  constructor(  ) { 
    setTimeout(() => {
      this.addNewServers=true;
    }, 2000);
  }

  ngOnInit(): void {
  }
changeServerStatus(){
  this.serverCreationStatus = 'server was created';
}
}
